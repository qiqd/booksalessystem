import request from "./request"

export const addAdmin = (from) => {
    return request.post(`/admin/sign`, {
        "aname": from.aname,
        "aemail": from.aemail,
        "apassword": from.apassword,
    })
}

export const getAllAdminer = () => {
    return request.get("/admin", {
    })
}
export const getAnoByAccount = (name,password) => {
    return request.get(`/admin/getano?name=${name}&password=${password}`);

}
export const updateAdminByAno = (ano,from) => {
    return request.post(`/admin/${ano}`, {
        "aemail": from.aemail,
        "aname": from.aname,

    })
}
export const updateAdminPasswordByAno = (ano,from) => {
    return request.post(`/admin/${ano}`, {
        "apassword": from.newpassword,
    })
}