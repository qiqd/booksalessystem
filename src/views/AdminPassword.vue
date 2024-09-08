<script setup>
import { onMounted, ref } from 'vue'
import {useRouter} from 'vue-router'
import { getAnoByAccount, updateAdminPasswordByAno } from '@/api/admin'
import { useCounterStore } from '@/stores/counter.js'
import { ElMessage } from 'element-plus'

const store = useCounterStore()

const router = useRouter()
const AdminFrom = ref({
  ano: '',
  username: '',
  password: '',
  newpassword: '',
  newnewpassword: ''
})

const getAdminData = async () => {

  AdminFrom.value = store.adminInfo
  AdminFrom.value.ano=(await getAnoByAccount(AdminFrom.value.username,AdminFrom.value.password)).data.data
  console.log(AdminFrom.value)
}

const updateAdmin = () => {

  if (
    AdminFrom.value.newpassword === '' ||
    (AdminFrom.value.newpassword === '' && AdminFrom.value.newnewpassword === '') ||
    AdminFrom.value.newpassword === ''
  ) {
    ElMessage({
      message: '请输入密码',
      type: 'error',
      plain: true
    })
  } else if (AdminFrom.value.newnewpassword !== AdminFrom.value.newpassword) {
    ElMessage({
      message: '两次密码不一致',
      type: 'error',
      plain: true
    })
  } else {
    updateAdminPasswordByAno(AdminFrom.value.ano, AdminFrom.value).then((res) => {
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
      router.push('/')
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
        <el-input v-model="AdminFrom.username" disabled clearable />
      </el-form-item>

      <el-form-item label="新密码">
        <el-input v-model="AdminFrom.newpassword" placeholder="请输入新密码" clearable />
      </el-form-item>
      <el-form-item label="再次输入密码">
        <el-input v-model="AdminFrom.newnewpassword" placeholder="请再输入新密码" clearable />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="updateAdmin">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<style scoped lang="less"></style>
