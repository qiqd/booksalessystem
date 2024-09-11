<script setup>
import { onMounted, ref } from 'vue'
import { getAllAdminer, updateAdminByAno } from '@/api/admin'

import { ElMessage } from 'element-plus'

const AdminData = ref([])


const dialogVisible = ref(false)
const updateVisible = ref(false)


const deleteAdminNo = ref()
const updateAdminNo = ref()

const AdminFrom = ref({
  aname: '',
  aemail: '',

})

const getAdminData = async () => {
  AdminData.value = (await getAllAdminer()).data.data
  console.log(AdminData.value)
}

const confirmDelete = () => {

    alert("请联系工作人员删除！")
    dialogVisible.value = false
    deleteAdminNo.value = null
  getAdminData()

}
const updateAdmin = () => {

  updateAdminByAno(updateAdminNo.value, AdminFrom.value).then((res) => {
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
    getAdminData()
  })
}
const handleEdit = (index, row) => {
  updateAdminNo.value = row.ano

  AdminFrom.value.aemail = row.aemail
  AdminFrom.value.aname = row.aname


  updateVisible.value = true
}

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
        <el-button @click="confirmDelete" type="primary"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>


  <el-dialog v-model="updateVisible" title="修改vip顾客信息" width="500">
    <el-form :model="AdminFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="AdminFrom.aname" placeholder="请输入名字" clearable />
      </el-form-item>

      <el-form-item label="电子邮件">
        <el-input v-model="AdminFrom.aemail" placeholder="请输入邮件号" clearable />
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="updateAdmin">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container >
    <el-table :data="AdminData" height="100%" style="width: 100%" sortable>
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