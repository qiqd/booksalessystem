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
export const updateAdminByAno = (ano,from) => {
    return request.post(`/admin/${ano}`, {
        "aemail": from.aemail,
        "aname": from.aname,


    })
}