<script setup>
import { ref } from 'vue'

import { ElMessage } from 'element-plus'

import { addStaff } from '@/api/staff'

const staffFrom = ref({
  sname: '',
  sgender: '',
  sphone: '',
  semail: ''
})
const insertStaff = () => {
  addStaff(staffFrom.value).then((res) => {
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
    <el-form :model="staffFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="staffFrom.sname" placeholder="请输入员工名字" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="staffFrom.sphone" placeholder="请输入员工手机号" clearable />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="staffFrom.semail" placeholder="请输入员工邮件号" clearable />
      </el-form-item>

      <el-form-item label="性别">
        <el-radio v-model="staffFrom.sgender" label="1">男</el-radio>
        <el-radio v-model="staffFrom.sgender" label="0">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertStaff">确认添加</el-button>
      </el-form-item>
    </el-form>
    </el-container>

</template>

<style lang="less" scoped>

</style>
