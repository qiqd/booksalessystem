<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { deleteShelfByShelfno, getAllShelf, updateShelfByShelfno } from '@/api/book'

const ShelfData = ref([])


const dialogVisible = ref(false)
const updateVisible = ref(false)

const deleteShelfNo = ref()
const updateShelfNo = ref()

const ShelfFrom = ref({
  shelftype: '',
  type: '',

})

const getShelfData = async () => {
  let shelftype=""
  ShelfData.value = (await getAllShelf(shelftype)).data.data

}

const confirmDelete = () => {

  deleteShelfByShelfno(deleteShelfNo.value).then((res) => {
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
    deleteShelfNo.value = null
    getShelfData()
  })
}
const ss = async() => {
  const type = ShelfFrom.value.type;
  try {
    ShelfData.value = (await getAllShelf(type)).data.data // 更新书籍数据
    console.log(ShelfData.value );
  } catch (error) {
    console.error('Error  book :', error);
  }

}
const updateShelf= () => {
  updateShelfByShelfno(updateShelfNo.value, ShelfFrom.value).then((res) => {
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
    getShelfData()
  })
}
const handleEdit = (index, row) => {
 updateShelfNo.value = row.shelfno
  ShelfFrom.value.shelftype = row.shelftype
  updateVisible.value = true
}
const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteShelfNo.value = row.shelfno
}
onMounted(() => {
  getShelfData()
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
        <el-input v-model="ShelfFrom.type"  style="width: 500px" placeholder=类型 clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="ss">搜索</el-button>
      </el-form-item>
    </el-form>


  </el-container>
  <!-- 修改员工信息弹框 -->
  <el-dialog v-model="updateVisible" title="修改vip顾客信息" width="500">
    <el-form :model="ShelfFrom" label-position="right" label-width="auto">
      <el-form-item label="类型">
        <el-input v-model="ShelfFrom.shelftype" placeholder="shelftype" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateShelf">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container>
    <el-table :data="ShelfData" height="700" style="width: 100%" sortable>
      <el-table-column align="center" sortable label="图书编号" width="200" prop="shelfno">
      </el-table-column>

      <el-table-column align="center" label="类型" width="200" prop="shelftype"> </el-table-column>

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