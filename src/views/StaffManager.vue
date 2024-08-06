<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { deleteStaffBySno, updateStaffBySno, getAllStaff } from '@/api/staff'
const staffData = ref([])
const dialogVisible = ref(false)
const updateVisible = ref(false)

const deleteStaffNo = ref()
const updateStaffNo = ref()
const staffFrom = ref({
  sname: '',
  sgender: '',
  sphone: '',
  semail: ''
})
const getStaffData = async () => {
  staffData.value = (await getAllStaff()).data.data
}
const confirmDelete = () => {
  deleteStaffBySno(deleteStaffNo.value).then((res) => {
    if (res.data.state > 300) {
      ElMessage({
        message: '删除失败',
        type: 'error',
        plain: true
      })
    }
    ElMessage({
      message: '删除成功',
      type: 'success',
      plain: true
    })
    dialogVisible.value = false
    deleteStaffNo.value = null
    getStaffData()
  })
}
const updateStaff = () => {
  console.log(updateStaffNo)
  console.log(staffFrom.value)

  updateStaffBySno(updateStaffNo.value, staffFrom.value).then((res) => {
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
    getStaffData()
  })
}

const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteStaffNo.value = row.sno
}
const handleEdit = (index, row) => {
  updateStaffNo.value = row.sno
  staffFrom.value.semail = row.semail
  staffFrom.value.sname = row.sname
  staffFrom.value.sphone = row.sphone
  staffFrom.value.sgender = row.sgender

  updateVisible.value = true
}

onMounted(() => {
  getStaffData()
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
  <!-- 修改员工信息弹框 -->
  <el-dialog v-model="updateVisible" title="修改员工信息" width="500">
    <el-form :model="staffFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="staffFrom.sname" placeholder="请输入你的名字" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="staffFrom.sphone" placeholder="请输入你的手机号" clearable />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="staffFrom.semail" placeholder="请输入你的邮件号" clearable />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="staffFrom.sgender">
          <el-radio value="1" size="large">男</el-radio>
          <el-radio value="0" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateStaff">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container>
    <el-table :data="staffData" height="600" style="width: 100%">
      <el-table-column align="center" sortable label="员工编号" width="180" prop="sno">
      </el-table-column>
      <el-table-column align="center" label="姓名" width="180" prop="sname"> </el-table-column>
      <el-table-column align="center" label="性别" width="180" prop="sgender">
        <template #default="scope">
          <span v-if="scope.row.sgender == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="电子邮件" width="350" prop="semail"> </el-table-column>
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<style lang="less" scoped></style>
