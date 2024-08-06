<script setup>
import {} from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const router = useRouter()
const loginout = () => {
  store.token = ''
  router.push('/')
}
</script>

<template>
  <div class="layout">
    <el-row
      ><div class="main-title">
        <img class="logo" src="../../public/images/logo.svg" alt="" />
        <h5>图书销售管理系统</h5>
        <div class="user1">
          <img src="../../public/images/usr.svg" alt="" class="user2" />
          <div class="info">
            <span>admin</span>
            <span @click="loginout">退出登录</span>
          </div>
        </div>
      </div></el-row
    >
    <el-row :gutter="20" style="margin: 0">
      <el-col :span="4" :offset="0">
        <el-menu>
          <router-link to="/index"> <el-menu-item index="1">首页</el-menu-item></router-link>
          <el-menu-item-group>
            <template #title>
              <h3>用户管理</h3>
            </template>
            <el-menu-item class="item" index="1-3">管理员</el-menu-item>
            <router-link to="/staff">
              <el-menu-item class="item" index="1-4">员工</el-menu-item></router-link
            >

            <router-link to="/vip"
              ><el-menu-item class="item" index="1-4">会员</el-menu-item></router-link
            >
          </el-menu-item-group>
          <el-menu-item-group title="图书管理">
            <template #title>
              <h3>图书管理</h3>
            </template>
            <el-menu-item class="item" index="1-3">图书信息</el-menu-item>
            <el-menu-item class="item" index="1-4">图书</el-menu-item>
            <el-menu-item class="item" index="1-4">会员</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="订单管理">
            <template #title>
              <h3>订单管理</h3>
            </template>
            <el-menu-item class="item" index="1-3">订单记录</el-menu-item>
            <el-menu-item class="item" index="1-4">订单详情</el-menu-item>
            <el-menu-item class="item" index="1-4">其他订单</el-menu-item>
          </el-menu-item-group>
        </el-menu></el-col
      >

      <el-col :span="20" :offset="0">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.layout {
  margin-left: 5px;
}
.main-title {
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 30px;
  padding-left: 30px;
  margin-top: 20px;
  border-bottom: 2px solid #aba8a7;
  display: flex;
  align-items: center;
  .logo {
    position: absolute;
    left: 22;
    top: 0;
    width: 40px;
    height: 40px;
  }
  h5 {
    margin-left: 65px;
    font-style: italic;
    margin-top: -11px;
  }
  .user1 {
    position: absolute;
    right: 40px;
    top: 22px;
    width: 80px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover .info {
      // 使用&作为当前选择器的引用
      transform: translateX(0);
      opacity: 1;
    }
  }
  .user2 {
    width: 40px;
    height: 40px;
  }

  .info {
    z-index: 222;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 2px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.5s;
    &:last-child::hover {
      display: block;
      color: #e05c2f;
    }
    span {
      width: fit-content;
      font-size: 13px;
      margin-top: 5px;
    }
  }
}
.item {
  color: var(--el-text-color-secondary);
  font-size: 15px;
  height: 44px;
}
.main-title .info:last-child::hover {
  color: #f50000;
}
</style>
