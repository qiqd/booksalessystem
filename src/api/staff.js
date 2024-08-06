import request from "./request"
export const getAllStaff = () => {
    return request.get("/staffs", {

    })
}
export const getStaffBySno = (params) => {
    return request.get(`/staffs/${params}`, {
    })
}
export const addStaff = (semail, sgender, sname, sphone) => {
    return request.post("/staffs", {
        "semail": semail,
        "sgender": sgender,
        "sname": sname,
        "sphone": sphone
    })

}
export const deleteStaffBySno = (params) => {
    return request.delete(`/staffs/${params}`, {
    })

}
export const updateStaffBySno = (vno, from) => {
    return request.put(`/staffs/${vno}`, {
        "semail": from.semail,
        "sgender": from.sgender,
        "sname": from.sname,
        "sphone": from.sphone
    })
}