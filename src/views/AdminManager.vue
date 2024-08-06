<script setup>
import {} from 'vue'
</script>

<template>
  <el-container direction="vertical">
    <h4>管理员管理</h4>
    <el-main class="main" height="50%">
      <div class="box"><img src="../../public/images/user.svg" alt="" /><span>个人信息</span></div>
      <div class="box"><img src="../../public/images/vip.svg" alt="" /><span>会员信息</span></div>
      <div class="box"><img src="../../public/images/staff.svg" alt="" /><span>员工信息</span></div>
      <div class="box"><img src="../../public/images/book.svg" alt="" /><span>图书信息</span></div>
    </el-main>
    <h4>数据查询</h4>
    <el-main class="main" height="50%">
      <div class="box" style="margin-left: 27px">
        <img class="filter" src="../../public/images/user.svg" alt="" /><span>个人信息查询</span>
      </div>
      <div class="box">
        <img class="filter" src="../../public/images/vip.svg" alt="" /><span>会员信息查询</span>
      </div>
      <div class="box">
        <img class="filter" src="../../public/images/staff.svg" alt="" /><span>员工信息查询</span>
      </div>
      <div class="box">
        <img class="filter" src="../../public/images/book.svg" alt="" /><span>图书信息查询</span>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.filter {
  filter: hue-rotate(-223deg) saturate(150%) brightness(110%);
}
h4 {
  margin: 20px 52px;
  font-size: 17px;
}
.main {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px #b4aeae;
  }
  img {
    width: 50px;
    height: 50px;
  }
  span {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
