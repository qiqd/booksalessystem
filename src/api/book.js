import request from "./request"
export const getAllBook = (bname) => {
  if (bname==="") {
    return request.get("/book", {
    })
  }else {
    return request.get(`/book?bname=${bname}`,{})
  }
}

export const updateBookByBno = (params) => {
  return request.get(`/book/${params}`, {
  })
}
