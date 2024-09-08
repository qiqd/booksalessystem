import request from "./request"
export const getAllBook = (bname) => {
  if (bname==="") {
    return request.get("/book", {
    })
  }else {
    return request.get(`/book?bname=${bname}`,{})
  }
}

export const updateBookByBno = (bno,from) => {
  return request.post(`/book/${bno}`, {

    "btitle": from.btitle,
    "isbn": from.isbn,
    "bauthor": from.bauthor,
    "bpublisher": from.bpublisher,
    "btype": from.btype,
    "shelfno": from.shelfno,
    "bprice": from.bprice,

  })
}

export const addBook = (from) => {
  return request.post(`/book/add`, {

    "btitle": from.btitle,
    "isbn": from.isbn,
    "bauthor": from.bauthor,
    "bpublisher": from.bpublisher,
    "bdate": from.bdate,
    "bprice": from.bprice,
    "btype": from.btype,
    "shelfno": from.shelfno,
    "bnumber": from.bnumber,

  })
}



export const getAllShelf = (shelftype) => {
  if (shelftype==="") {
    return request.get("/shelf", {
    })
  }else {
    return request.get(`/shelf?shelftype=${shelftype}`,{})
  }
}
export const updateShelfByShelfno = (shelfno,from) => {
  return request.post(`/shelf/${shelfno}`, {
    "shelftype": from.shelftype,
  })
}
export const deleteShelfByShelfno = (shelfno) => {
  return request.delete(`/shelf/?shelfno=${shelfno}`,)

}
export const addShelf = (from) => {
  return request.post(`/shelf/add`, {
    "shelftype": from.shelftype,
  })
}
