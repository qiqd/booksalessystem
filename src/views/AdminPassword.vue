<script setup>
import { onMounted, ref } from 'vue'
import { getAllAdminer, updateAdminPasswordByAno } from '@/api/admin'

import { ElMessage } from 'element-plus'

const AdminData = ref([])

const updateAdminNo = ref()
const AdminFrom = ref({
  ano: '',
  aname: '',
  password: '',
  newpassword: ''
})

const getAdminData = async () => {
  AdminData.value = (await getAllAdminer()).data.data
  console.log(AdminData.value)
  AdminFrom.value = AdminData.value[0]
  console.log(AdminFrom.value)
}

const updateAdmin = () => {
  updateAdminNo.value = AdminFrom.value.ano
  console.log(AdminFrom.value.password)
  console.log(AdminFrom.value.newpassword)
  if (
    AdminFrom.value.password === '' ||
    (AdminFrom.value.newpassword === '' && AdminFrom.value.password === '') ||
    AdminFrom.value.newpassword === ''
  ) {
    ElMessage({
      message: '请输入密码',
      type: 'error',
      plain: true
    })
  } else if (AdminFrom.value.password !== AdminFrom.value.newpassword) {
    ElMessage({
      message: '两次密码不一致',
      type: 'error',
      plain: true
    })
  } else {
    updateAdminPasswordByAno(updateAdminNo.value, AdminFrom.value).then((res) => {
      if (res.data.state > 300) {
        ElMessage({
          message: '修改失败',
          type: 'error',
          plain: true
        })
        return
      }
      ElMessage({
        message: '修改成功',
        type: 'success',
        plain: true
      })
      getAdminData()
    })
  }
}

onMounted(() => {
  getAdminData()
})
</script>

<template>
  <el-container width="500">
    <el-form :model="AdminFrom" label-position="right" label-width="auto">
      <el-form-item label="名字">
        <el-input v-model="AdminFrom.aname" disabled clearable />
      </el-form-item>

      <el-form-item label="新密码">
        <el-input v-model="AdminFrom.password" placeholder="请输入新密码" clearable />
      </el-form-item>
      <el-form-item label="再次输入密码">
        <el-input v-model="AdminFrom.newpassword" placeholder="请再输入新密码" clearable />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="updateAdmin">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<style scoped lang="less"></style>
