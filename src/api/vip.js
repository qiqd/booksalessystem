import request from "./request"
export const getAllVip = () => {
    return request.get("/vips", {

    })
}
export const getVipBySno = (params) => {
    return request.get(`/vips/${params}`, {
    })
}
export const addVip = (vno, from) => {
    return request.post(`/vips/${vno}`, {
        "vemail": from.vemail,
        "vgender": from.vgender,
        "vname": from.vname,
        "vphone": from.vphone
    })

}
export const deleteVipBySno = (params) => {
    return request.delete(`/vips/?vno=${params}`,)

}
export const updateVipBySno = (vno, from) => {
    return request.post(`/vips/${vno}`, {
        "vemail": from.vemail,
        "vgender": from.vgender,
        "vname": from.vname,
        "vphone": from.vphone
    })
}