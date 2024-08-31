<script setup>
import { ref } from 'vue'

import { ElMessage } from 'element-plus'

import { addVip } from '@/api/vip'

const VipFrom = ref({
  vname: '',
  vgender: '',
  vphone: '',
  vemail: ''
})
const insertVip = () => {
  addVip(VipFrom.value).then((res) => {
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
    <el-form :model="VipFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="VipFrom.vname" placeholder="请输入vip顾客名字" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="VipFrom.vphone" placeholder="请输入vip顾客手机号" clearable />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="VipFrom.vemail" placeholder="请输入vip顾客邮件号" clearable />
      </el-form-item>

      <el-form-item label="性别">
        <el-radio v-model="VipFrom.vgender" label="1">男</el-radio>
        <el-radio v-model="VipFrom.vgender" label="0">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertVip">确认添加</el-button>
      </el-form-item>
    </el-form>
    </el-container>

</template>

<style lang="less" scoped>

</style>
