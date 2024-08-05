import request from "./request"
export const login = (form) => {
    return request.post("/admin/login", {
        aname: form.username,
        apassword: form.password
    })
}