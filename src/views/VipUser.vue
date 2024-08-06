<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getAllVip, updateVipBySno, deleteVipBySno } from '@/api/vip'
const VipData = ref([])
const dialogVisible = ref(false)
const updateVisible = ref(false)

const deleteVipNo = ref()
const updateVipNo = ref()
const VipFrom = ref({
  vname: '',
  vgender: '',
  vphone: '',
  vemail: ''
})
const getVipData = async () => {
  VipData.value = (await getAllVip()).data.data
}
const confirmDelete = () => {
  console.log(deleteVipNo.value)

  deleteVipBySno(deleteVipNo.value).then((res) => {
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
    deleteVipNo.value = null
    getVipData()
  })
}
const updateVip = () => {
  updateVipBySno(updateVipNo.value, VipFrom.value).then((res) => {
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
    getVipData()
  })
}

const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteVipNo.value = row.vno
}
const handleEdit = (index, row) => {
  updateVipNo.value = row.vno
  VipFrom.value.vemail = row.vemail
  VipFrom.value.vname = row.vname
  VipFrom.value.vphone = row.vphone
  VipFrom.value.vgender = row.vgender

  updateVisible.value = true
}

onMounted(() => {
  getVipData()
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
  <el-dialog v-model="updateVisible" title="修改vip顾客信息" width="500">
    <el-form :model="VipFrom" label-position="right" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="VipFrom.vname" placeholder="请输入vip顾客名字" clearable />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="VipFrom.vphone" placeholder="请输入vip顾客手机号" clearable />
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="VipFrom.vemail" placeholder="请输入vip顾客邮件号" clearable />
      </el-form-item>

      <el-form-item label="性别">
        <el-radio v-model="VipFrom.vgender" label="1">男</el-radio>
        <el-radio v-model="VipFrom.vgender" label="0">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateVip">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container>
    <el-table :data="VipData" height="600" style="width: 100%" sortable>
      <el-table-column align="center" sortable label="编号" width="100" prop="vno">
      </el-table-column>
      <el-table-column align="center" label="姓名" width="80" prop="vname"> </el-table-column>
      <el-table-column align="center" label="性别" width="80" prop="vgender">
        <template #default="scope">
          <span v-if="scope.row.vgender == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="电话" width="180" prop="vphone"> </el-table-column>
      <el-table-column align="center" label="邮箱" width="220" prop="vemail"> </el-table-column>
      <el-table-column align="center" label="vip创建时间" width="180" prop="vcreationtime">
      </el-table-column>
      <el-table-column
        align="center"
        label="vip过期时间"
        width="180"
        prop="vdeadline"
      ></el-table-column>
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
