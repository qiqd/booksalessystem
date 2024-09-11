<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getAllBook } from '@/api/book'

const BookData = ref([])


const dialogVisible = ref(false)


const deleteBookNo = ref()

const BookFrom = ref({
  bname: ''
})
// const bname = ""
const getBookData = async () => {
  let bname=""
  BookData.value = (await getAllBook(bname)).data.data
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

  <el-container>
    <el-table :data="BookData" height="850"  style="width: 100%" sortable>
      <el-table-column align="center" sortable label="图书编号" width="200" prop="bno">
      </el-table-column>
      <el-table-column align="center" label="书名" width="200" prop="btitle"></el-table-column>

      <el-table-column align="center" label="类型" width="200" prop="btype"> </el-table-column>
      <el-table-column align="center" sortable label="数量（本）" width="200" prop="bnumber"> </el-table-column>

      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit2(scope.$index,scope.row)"> 编辑</el-button>
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