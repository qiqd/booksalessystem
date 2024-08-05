import request from "./request"
export const login = (passowrd, username) => {
    return request.post("/login", {
        passowrd,
        username
    })
}