<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

import { salesInfo, bookSalesInfo } from '@/api/saleInfo'
import { getMonthSales } from '@/api/order'
const salesDom = ref(null)
const bookSales = ref(null)
const date = ref([])
const sasles = ref([])
const salesNum = ref([])
const bookName = ref([])
const bookNum = ref([])
const bookData = ref([])
const salesOption = ref({})
const bookSalesOption = ref({})
const bookSaleData = () => {
  for (let i = 0; i < bookName.value.length; i++) {
    bookData.value.push({
      value: bookNum.value[i],
      name: bookName.value[i]
    })
  }
}
const initChart = () => {
  salesOption.value = {
    title: {
      text: '月销售情况'
    },
    tooltip: {
      trigger: 'axis'
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date.value
    },
    yAxis: [
      {
        type: 'value',
        name: '销售额'
      },
      {
        type: 'value',
        name: '销售量',
        opposite: true // 设置Y轴在右侧
      }
    ],
    series: [
      {
        yAxisIndex: 0, // 指定使用第一个Y轴
        data: sasles.value,
        type: 'line'
      },
      {
        yAxisIndex: 1, // 指定使用第二个Y轴
        data: salesNum.value,
        type: 'line'
      }
    ]
  }
  bookSalesOption.value = {
    title: {
      text: '图书销售情况',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: bookData.value,
        label: {
          show: true,
          formatter: '{b}: {c} ({d}%)'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  echarts.init(salesDom.value).setOption(salesOption.value)
  echarts.init(bookSales.value).setOption(bookSalesOption.value)
}
const getSalesInfo = async () => {
  const salesInfoRes = await salesInfo()
  date.value = salesInfoRes.data.data.date
  sasles.value = salesInfoRes.data.data.sales
  salesNum.value = salesInfoRes.data.data.sum
}
const getBookSalesInfo = async () => {
  const bookSalesInfoRes = await bookSalesInfo()
  bookName.value = bookSalesInfoRes.data.data.bookName
  bookNum.value = bookSalesInfoRes.data.data.saleCount
}
// 使用 Promise.all 等待所有数据请求完成
const fetchData = async () => {
  await Promise.all([getSalesInfo(), getBookSalesInfo()])
  bookSaleData()
  initChart()
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <el-container class="container">
    <div ref="salesDom" class="sales"></div>
    <div ref="bookSales" class="book-sales"></div>
  </el-container>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sales {
  width: 500px;
  height: 500px;
}
.book-sales {
  width: 700px;
  height: 500px;
  margin-left: 40px;
}
</style>
