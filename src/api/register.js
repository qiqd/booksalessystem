import request from "./request"
export const login = (aemail, apassword, aname) => {
    return request.post("/admin/sign", {
        "aemail": aemail,
        "aname": aname,
        "apassword": apassword
    })
}