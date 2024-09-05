<script setup>
import { ref } from 'vue'

import { ElMessage } from 'element-plus'

import {addShelf  } from '@/api/book'

const shelfFrom = ref({
  shelftype: '',

})
const insertShelf = () => {
  addShelf(shelfFrom.value).then((res) => {
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
    <el-form :model="shelfFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="shelfFrom.shelftype" placeholder="请输入书类型" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertShelf">确认添加</el-button>
      </el-form-item>
    </el-form>
    </el-container>

</template>

<style lang="less" scoped>

</style>
