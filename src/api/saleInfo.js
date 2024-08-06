import request from "./request"
export const salesInfo = () => {
    return request.get('/order/sales')
}
export const bookSalesInfo = () => {
    return request.get('/order/bookSale')
}

