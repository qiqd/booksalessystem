<script setup>
import { ref } from 'vue'

import { ElMessage } from 'element-plus'

import { addAdmin } from '@/api/admin'

const AdminFrom = ref({
  aname: '',
  apassword: '',
  aemail: ''
})
const insertAdmin = () => {
  addAdmin( AdminFrom.value).then((res) => {
    if (res.data.state > 300) {
      ElMessage({
        message: '添加失败',
        type: 'error',
        plain: true
      })
      return
    }
    ElMessage({
      message: '添加成功',
      type: 'success',
      plain: true
    })

  })
}
</script>

<template>
  <el-container >
    <el-form :model="AdminFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="AdminFrom.aname" placeholder="请输入管理员名字" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="AdminFrom.apassword" placeholder="请输入管理员密码" clearable />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="AdminFrom.aemail" placeholder="请输入管理员邮件号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertAdmin">确认添加</el-button>
      </el-form-item>
    </el-form>
    </el-container>

</template>

<style lang="less" scoped>

</style>
