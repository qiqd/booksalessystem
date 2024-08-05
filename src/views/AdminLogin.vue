<script setup>
import { ref } from 'vue'
import { login } from '@/api/login.js'
const form = ref({
  username: '',
  password: ''
})
</script>

<template>
  <div class="body">
    <div class="box">
      <el-form :model="form" ref="form" label-width="80px" :inline="false" size="normal">
        <el-form-item label="账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.body {
  height: 100vh;
  background-image: url('../../public/images/login.png');
  background-size: 100vw 100vh;
  background-repeat: no-repeat; /* 确保图片不重复 */
  background-attachment: fixed; /* 背景图片在页面滚动时固定不动 */
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    padding: 20px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
}
</style>
