<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getAllBook, updateBookByBno ,getAllShelf} from '@/api/book'


const BookData = ref([])
const ShelfData = ref([])

const dialogVisible = ref(false)
const updateVisible = ref(false)


const deleteBookNo = ref()
const updateBookNo = ref()

const BookFrom = ref({
  bname: '',
  btitle: '',
  isbn: '',
  bauthor: '',
  bpublisher: '',
  btype: '',
  bprice: '',
  shelfno: '',
  bdate:'',
})

const getBookData = async () => {
 let bname=""
  BookData.value = (await getAllBook(bname)).data.data
  ShelfData.value = (await getAllShelf('')).data.data
  console.log(BookData.value)
  console.log("BookFrom.bname:"+BookFrom.value.bname)

}

const confirmDelete = () => {
  console.log(deleteBookNo.value)

  deleteBookBySno(deleteBookNo.value).then((res) => {
    if (res.data.state > 300) {
      ElMessage({
        message: '删除失败',
        type: 'error',
        plain: true
      })
      return
    }
    ElMessage({
      message: '删除成功',
      type: 'success',
      plain: true
    })
    dialogVisible.value = false
    deleteBookNo.value = null
    getBookData()
  })
}
const ss = async() => {
  const bname = BookFrom.value.bname;
  try {
    BookData.value = (await getAllBook(bname)).data.data // 更新书籍数据
    console.log(BookData.value );
  } catch (error) {
    console.error('Error fetching book data:', error);
  }

}
const updateBook = () => {
  console.log(updateBookNo.value)
  console.log(BookFrom.value)
  updateBookByBno(updateBookNo.value, BookFrom.value).then((res) => {
    if (res.data.state > 300) {
      ElMessage({
        message: '修改失败',
        type: 'error',
        plain: true
      })
      return
    }
    ElMessage({
      message: '修改成功',
      type: 'success',
      plain: true
    })
    updateVisible.value = false
    getBookData()
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
const handleEdit = (index, row) => {
  updateBookNo.value = row.bno
  BookFrom.value.btitle = row.btitle
  BookFrom.value.isbn = row.isbn
  BookFrom.value.bauthor = row.bauthor
  BookFrom.value.bpublisher = row.bpublisher
  BookFrom.value.bdate = row.bdate
  BookFrom.value.btype = row.btype
  BookFrom.value.bprice = row.bprice

  updateVisible.value = true
}
const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteBookNo.value = row.ono
}
onMounted(() => {
  getBookData()
})
</script>

<template>
  <!-- //确认删除弹框 -->
  <el-dialog v-model="dialogVisible" title="提示" width="500">
    <span>你确定要删除吗？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="confirmDelete" type="primary"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>

  <el-container >
    <el-form  label-position="right" label-width="auto">
      <el-form-item label="搜索：">
        <el-input v-model="BookFrom.bname"  style="width: 500px" placeholder="请输入书名" clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="ss">搜索</el-button>
      </el-form-item>
    </el-form>


  </el-container>
  <!-- 修改员工信息弹框 -->
  <el-dialog v-model="updateVisible" title="修改书籍信息" width="500">
    <el-form :model="BookFrom" label-position="right" label-width="auto">
      <el-form-item label="书名">
        <el-input v-model="BookFrom.btitle" placeholder="请输入书名" clearable />
      </el-form-item>
      <el-form-item label="ISBN">
        <el-input v-model="BookFrom.isbn" placeholder="请输入ISBN" clearable />
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
      <el-form-item label="类型">
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
      <el-form-item label="价格（元）/本">
        <el-input v-model="BookFrom.bprice" placeholder="请输入价格（元）" clearable />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="updateBook">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container>
    <el-table :data="BookData" height="600" style="width: 100%" sortable>
      <el-table-column align="center" sortable label="图书编号" width="100" prop="bno">
      </el-table-column>
      <el-table-column align="center" label="书名" width="160" prop="btitle"></el-table-column>
      <el-table-column align="center" label="ISBN" width="160" prop="isbn"> </el-table-column>
      <el-table-column align="center" label="作者" width="160" prop="bauthor"> </el-table-column>

      <el-table-column align="center" label="出版社" width="160" prop="bpublisher"> </el-table-column>
      <el-table-column align="center" label="日期" width="160" prop="bdate"> </el-table-column>
      <el-table-column align="center" label="类型" width="160" prop="btype"> </el-table-column>
      <el-table-column align="center" sortable label="价格（元）/本" width="160" prop="bprice"> </el-table-column>
      <el-table-column align="center" sortable label="库存（本）" width="160" prop="bnumber"> </el-table-column>

      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index,scope.row)"> 编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<style scoped lang="less">

</style>