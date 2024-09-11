<script setup>
import { onMounted, ref } from 'vue'

import { ElMessage } from 'element-plus'

import { addBook, getAllShelf } from '@/api/book'
const ShelfData = ref([])
const BookFrom = ref({
  btitle: '',
  isbn: '',
  bauthor: '',
  bpublisher: '',
  bdate: '',
  bprice: '',
  btype: '',
  shelfno: '',
  bnumber: '',

})
const getShelfData = async () => {
  ShelfData.value = (await getAllShelf('')).data.data
  console.log(ShelfData.value)
}

const insertBook = () => {
  addBook( BookFrom.value).then((res) => {
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
const handleChange =async (type) => {

  const selectedShelf =ShelfData.value.find(item => item.shelftype === type);
  console.log(selectedShelf)
  if (selectedShelf) {
    BookFrom.value.shelfno = selectedShelf.shelfno;
  } else {
    BookFrom.shelfno = null;
  }
}
onMounted(() => {
  getShelfData()
})
</script>

<template>
  <el-container class="container">
    <el-form :model="BookFrom" label-position="right" label-width="auto">
      <el-form-item label="书名">
        <el-input v-model="BookFrom.btitle" placeholder="请输入书名" clearable />
      </el-form-item>
      <el-form-item label="isbn">
        <el-input v-model="BookFrom.isbn" placeholder="请输入isbn" clearable />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="BookFrom.bauthor" placeholder="请输入作者" clearable />
      </el-form-item>
      <el-form-item label="出版社">
        <el-input v-model="BookFrom.bpublisher" placeholder="请输入出版社" clearable />
      </el-form-item>
       <el-form-item label="日期">

           <el-date-picker
             v-model="BookFrom.bdate"
             type="date"
             placeholder="选择日期">
           </el-date-picker>

      </el-form-item>
       <el-form-item label="价格">
        <el-input v-model="BookFrom.bprice" placeholder="请输入价格" clearable />
      </el-form-item>
      <el-form-item label="书架类型">
          <el-select v-model="BookFrom.btype" placeholder="请选择图书类型"  @change="handleChange">
            <el-option
              v-for="item in ShelfData"
              :key="item.shelfno"
              :label="item.shelftype"
              :value="item.shelftype">
            </el-option>
          </el-select>

      </el-form-item>
      <el-form-item label="书架编号">
        <el-input v-model="BookFrom.shelfno"  disabled />
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="BookFrom.bnumber" placeholder="请输入数量" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="insertBook">确认添加</el-button>
      </el-form-item>
    </el-form>
    </el-container>

</template>

<style lang="less" scoped>
.container {
  width: 300px;
  height: 500px;
  border: 1px #00ffff solid;
  margin: 0 auto;
  margin-top: 100px;

}
button{
  position: absolute;
  right: 0;
}
</style>
