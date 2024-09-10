<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const router = useRouter()
const defaltNum = ref(0)
const loginout = () => {
  store.token = ''
  router.push('/')
}
const changeColor = (num) => {
  defaltNum.value = num
}
</script>

<template>
  <div class="layout">
    <el-row
      ><div class="main-title">
        <img class="logo" src="../../public/images/logo.svg" alt="" />
        <h5>图书销售管理系统</h5>
        <div class="user1">
          <img src="../../public/images/use.svg" alt="" class="user2" />
          <div class="info">
            <span>{{ store.adminInfo.username }}</span>
            <span @click="loginout">退出登录</span>
          </div>
        </div>
      </div></el-row
    >
    <el-row :gutter="20" style="margin: 0">
      <el-col :span="4" :offset="0">
        <el-menu default-active="1">
          <router-link to="/index">
            <el-menu-item
              class="item"
              @click="changeColor(0)"
              index="12"
              :class="{ active: defaltNum == 0 }"
              ><h3>首页</h3></el-menu-item
            ></router-link
          >
          <!-- 用户管理导航栏 -->
          <el-sub-menu index="1">
            <template #title>
              <h3>用户管理</h3>
            </template>
            <el-sub-menu v-if="store.adminInfo.type == 'admin'" index="1-1">
              <template #title>
                <h3>管理员</h3>
              </template>
              <router-link to="/manager">
                <el-menu-item
                  class="item"
                  index="1-1-3"
                  @click="changeColor(1)"
                  :class="{ active: defaltNum == 1 }"
                  >管理员操作</el-menu-item
                ></router-link
              >
              <router-link to="/admin">
                <el-menu-item
                  class="item"
                  index="1-1-1"
                  @click="changeColor(2)"
                  :class="{ active: defaltNum == 2 }"
                  >管理员列表</el-menu-item
                ></router-link
              >
              <router-link to="/AdminIncrease">
                <el-menu-item
                  class="item"
                  index="1-1-2"
                  @click="changeColor(3)"
                  :class="{ active: defaltNum == 3 }"
                  >新增管理员</el-menu-item
                ></router-link
              >
            </el-sub-menu>
            <el-sub-menu index="1-2">
              <template #title>
                <h3>会员</h3>
              </template>
              <router-link to="/vip">
                <el-menu-item
                  class="item"
                  index="1-2-1"
                  @click="changeColor(4)"
                  :class="{ active: defaltNum == 4 }"
                  >会员列表</el-menu-item
                ></router-link
              >
              <router-link to="/VipIncrease">
                <el-menu-item
                  class="item"
                  index="1-2-2"
                  @click="changeColor(5)"
                  :class="{ active: defaltNum == 5 }"
                  >新增会员</el-menu-item
                ></router-link
              >
            </el-sub-menu>
            <el-sub-menu index="1-3">
              <template #title>
                <h3>员工</h3>
              </template>
              <router-link to="/staff">
                <el-menu-item
                  class="item"
                  index="1-3-1"
                  @click="changeColor(6)"
                  :class="{ active: defaltNum == 6 }"
                  >员工列表</el-menu-item
                ></router-link
              >
              <router-link to="/StaffIncrease">
                <el-menu-item
                  class="item"
                  index="1-3-2"
                  @click="changeColor(7)"
                  :class="{ active: defaltNum == 7 }"
                  >新增员工</el-menu-item
                ></router-link
              >
            </el-sub-menu>
          </el-sub-menu>
          <!-- 图书分类导航栏 -->
          <el-sub-menu index="2">
            <template #title>
              <h3>图书分类</h3>
            </template>

            <router-link to="/booktype">
              <el-menu-item
                class="item"
                index="2-1-1"
                @click="changeColor(8)"
                :class="{ active: defaltNum == 8 }"
                >图书分类列表</el-menu-item
              ></router-link
            >
            <router-link to="/TypeIncrease">
              <el-menu-item
                class="item"
                index="2-1-2"
                @click="changeColor(9)"
                :class="{ active: defaltNum == 9 }"
                >新增图书分类</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <!-- 图书管理导航栏 -->
          <el-sub-menu index="3">
            <template #title>
              <h3>图书管理</h3>
            </template>

            <router-link to="/books">
              <el-menu-item
                class="item"
                index="3-1-1"
                @click="changeColor(10)"
                :class="{ active: defaltNum == 10 }"
                >图书列表</el-menu-item
              ></router-link
            >
            <router-link to="/BookIncrease">
              <el-menu-item
                class="item"
                index="3-1-2"
                @click="changeColor(11)"
                :class="{ active: defaltNum == 11 }"
                >新增图书</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <!-- 订单管理导航栏 -->
          <el-sub-menu index="4">
            <template #title>
              <h3>订单管理</h3>
            </template>

            <router-link to="/orders">
              <el-menu-item
                class="item"
                index="4-1-1"
                @click="changeColor(12)"
                :class="{ active: defaltNum == 12 }"
                >订单列表</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <!-- 个人信息 -->
          <el-sub-menu index="5">
            <template #title>
              <h3>个人信息</h3>
            </template>

            <router-link to="/password">
              <el-menu-item
                class="item"
                index="5-1-1"
                @click="changeColor(13)"
                :class="{ active: defaltNum == 13 }"
                >修改密码</el-menu-item
              ></router-link
            >
          </el-sub-menu>
        </el-menu>
      </el-col>

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
.active {
  background-color: #00ffff;
}
.main-title {
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 30px;
  padding-left: 30px;
  margin-top: 20px;

  border-bottom: 1px solid #00ffff;
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
  border-radius: 8px;
  h3 {
    display: block;
    font-size: 15px;
    height: 58px;
    border-radius: 8px;
  }
}

.main-title .info:last-child::hover {
  color: #f50000;
}
</style>
