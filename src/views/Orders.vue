<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { deleteOrderBySno, selectAllOrder,selectOrderDetailByOno } from '@/api/order'
import { getAllVip } from '@/api/vip'
import { getAllStaff} from '@/api/staff.js'
const OrdersData = ref([])
const OrderDetailData = ref([])
const VipData = ref([])
const StaffData = ref([])
const dialogVisible = ref(false)
const detailVisible = ref(false)

const deleteOrderNo = ref()

const OrderFrom = ref({
  // bno: '',
  // btitle: '',
  // dno: '',
  // onumber: '',
  // bprice: '',
  name: '',
  sname: ''
})

const getOrderData = async () => {
  OrdersData.value = (await selectAllOrder()).data.data
  VipData.value = (await getAllVip()).data.data
  StaffData.value = (await getAllStaff()).data.data

}

const confirmDelete = () => {
  console.log(deleteOrderNo.value)

  deleteOrderBySno(deleteOrderNo.value).then((res) => {
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
    deleteOrderNo.value = null
    getOrderData()
  })
}
const handleEdit = async(index,row) => {

  OrderDetailData.value = (await selectOrderDetailByOno(row.ono)).data.data
  console.log(OrderDetailData.value)
  if (row.vno == 0) {
    OrderFrom.value.name = '顾客'
  }
  else {
     OrderFrom.value.name =  VipData.value[index].vname
  }

  // OrderFrom.value.dno = OrderDetailData.value[row.ono].dno
  // OrderFrom.value.onumber = OrderDetailData.value[row.ono].onumber
  // OrderFrom.value.btitle = OrderDetailData.value[row.ono].btitle
  // OrderFrom.value.bprice = OrderDetailData.value[row.ono].bprice
  // OrderFrom.value.bno = OrderDetailData.value[row.ono].bno
  OrderFrom.value.sname=row.sno

  detailVisible.value = true
}

const handleDelete = (index, row) => {
  dialogVisible.value = true
  deleteOrderNo.value = row.ono
}
onMounted(() => {
  getOrderData()
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
  <!-- 订单详情信息弹框 -->
  <el-dialog v-model="detailVisible" title="订单详情" width="660">
    <el-form :model="OrderFrom" label-position="right" label-width="auto">
      <el-form-item label="顾客名字">
        <el-input v-model="OrderFrom.name" placeholder="" clearable disabled />
      </el-form-item>

      <el-form-item label="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp店员">
        <el-input v-model="OrderFrom.sname" placeholder="" clearable disabled />
      </el-form-item>

      <el-table :data="OrderDetailData" style="width: 100%;height: 100%" sortable>
        <el-table-column align="center" label="图书编号" width="100" prop="bno"></el-table-column>
        <el-table-column align="center" label="书名" width="200" prop="btitle"></el-table-column>
        <el-table-column align="center" label="价格" width="100" prop="bprice"></el-table-column>
        <el-table-column align="center" label="数量" width="100" prop="onumber"></el-table-column>
        <el-table-column align="center" label="折扣" width="100" prop="dno"></el-table-column>
      </el-table>
      <el-form-item>
        <el-button @click="detailVisible = false" type="primary" >确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-container>
  <el-table :data="OrdersData" height="600" style="width: 100%" sortable>
    <el-table-column align="center" sortable label="编号" width="220" prop="ono">
    </el-table-column>
    <el-table-column align="center" label="顾客" width="220" prop="vno"> </el-table-column>

    <el-table-column align="center" label="总价（元）" width="220" prop="totalPrice"> </el-table-column>
    <el-table-column align="center" label="时间" width="220" prop="otime"> </el-table-column>

    <el-table-column align="center" label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index,scope.row)"> 订单详情</el-button>
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