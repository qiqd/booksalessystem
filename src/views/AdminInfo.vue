<script setup>
import { onMounted, ref } from 'vue'
import { getAllAdminer } from '@/api/admin'

const AdminData = ref([])


const dialogVisible = ref(false)


const deleteAdminNo = ref()

const AdminFrom = ref({
  aname: ''
})

const getAdminData = async () => {
  AdminData.value = (await getAllAdminer()).data.data
  console.log(AdminData.value)
}

// const confirmDelete = () => {
//   console.log(deleteBookNo.value)
//
//   deleteBookBySno(deleteBookNo.value).then((res) => {
//     if (res.data.state > 300) {
//       ElMessage({
//         message: '删除失败',
//         type: 'error',
//         plain: true
//       })
//       return
//     }
//     ElMessage({
//       message: '删除成功',
//       type: 'success',
//       plain: true
//     })
//     dialogVisible.value = false
//     deleteBookNo.value = null
//     getBookData()
//   })
// }

const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteAdminNo.value = row.ono
}
onMounted(() => {
  getAdminData()
})
</script>

<template>
  <!-- //确认删除弹框 -->
  <el-dialog v-model="dialogVisible" title="提示" width="500">
    <span>你确定要删除吗？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
<!--        <el-button @click="confirmDelete" type="primary"> 确认 </el-button>-->
      </div>
    </template>
  </el-dialog>

  <el-container >
    <el-form  label-position="right" label-width="auto">
      <el-form-item label="搜索：">
        <el-input v-model="AdminFrom.aname"  style="width: 500px" placeholder="请输入书名" clearable/>
      </el-form-item>
      <el-form-item>
<!--        <el-button type="primary" @click="ss">搜索</el-button>-->
      </el-form-item>
    </el-form>


  </el-container>

  <el-container>
    <el-table :data="AdminData" height="600" style="width: 100%" sortable>
      <el-table-column align="center" sortable label="管理员编号" width="200" prop="ano">
      </el-table-column>
      <el-table-column align="center" label="名字" width="200" prop="aname"></el-table-column>
      <el-table-column align="center" label="邮箱" width="200" prop="aemail"> </el-table-column>

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