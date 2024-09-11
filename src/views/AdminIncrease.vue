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
  if (
    AdminFrom.value.aname === '' ||
    AdminFrom.value.apassword === '' ||
    AdminFrom.value.aemail === ''
  ) {
    ElMessage({
      message: '请输入完整信息',
      type: 'error',
      plain: true
    })
    return
  }
  addAdmin(AdminFrom.value).then((res) => {
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
  <el-container class="container">
    <el-form :model="AdminFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="AdminFrom.aname" placeholder="请输入管理员名字" clearable />
      </el-form-item>
      <el-form-item label="密码">
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
  .container {
    width: 260px;
    height: 180px;
    border: 1px #00ffff solid;
    margin: 0 auto;
    margin-top: 100px;

  }
  button{
   position: absolute;
    right: 0;
  }
</style>
