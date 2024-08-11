import request from "./request"
export const selectAllOrder = () => {
  return request.get("/order", {

  })
}
export const selectOrderByVno = (params) => {
  return request.get(`/order/${params}`, {
  })
}
export const selectOrderDetailByOno = (params) => {
  return request.get(`/order/detail/${params}`, {
  })
}

export const deleteOrderBySno = (params) => {
  return request.delete(`/order/?ono=${params}`,)

}
