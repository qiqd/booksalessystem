<script setup>
import { ref } from 'vue'
import { login } from '@/api/login.js'
import { useCounterStore } from '@/stores/counter.js'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const store = useCounterStore()
const router = useRouter()
const form = ref({
  username: '',
  password: ''
  //   type: ''
})
const options = ref([
  {
    value: 'admin',
    label: '管理员'
  },
  {
    value: 'staff',
    label: '员工'
  }
])
const rules = ref({
  username: [{ required: true, message: '请输入账号', trigger: 'blur', min: 4, max: 10 }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  type: [{ required: true, message: '请选择登录身份', trigger: 'blur' }]
})
const OnSubmit = async () => {
  if (form.value.username == '' || form.value.password == '' || form.value.type == '') {
    return
  }

  const res = await login(form.value)
  if (res.data.state > 200) {
    ElMessage({
      message: res.data.message,
      type: 'error',
      plain: true
    })
    return
  }
  ElMessage({
    message: '登录成功',
    type: 'success',
    plain: true
  })
  store.token = res.data.data
  router.push('/layout')
}
const reset = () => {
  form.value.username = ''
  form.value.password = ''
  form.value.type = ''
}
</script>

<template>
  <div class="body">
    <div class="box">
      <h3>图书销售管理系统登录</h3>
      <el-form :model="form" label-width="80px" size="large" label-position="left" :rules="rules">
        <el-form-item label-width="auto" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label-width="auto" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: -80px" prop="type">
          <el-select v-model="form.type" value-key="2" placeholder="选择登录身份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: -16px">
          <el-button type="primary" @click="OnSubmit">登录</el-button>
          <el-button type="danger" @click="reset">重置</el-button>
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
    h3 {
      margin-bottom: 10px;
    }
    position: fixed;
    top: 50%;
    left: 50%;
    // display: flex;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    padding: 20px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
}
</style>
