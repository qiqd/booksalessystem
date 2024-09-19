import request from './request'
export const getAllStaff = () => {
  return request.get('/staffs', {})
}
export const getStaffByParams = (params) => {
  return request.get(`/staffs/${params}`, {})
}
export const getStaffBySno = (params) => {
  return request.get(`/staffs/${params}`, {})
}
export const addStaff = (from) => {
  return request.post(`/staffs/staffIncrease`, {
    semail: from.semail,
    sgender: from.sgender,
    sname: from.sname,
    sphone: from.sphone
  })
}
export const deleteStaffBySno = (params) => {
  return request.delete(`/staffs/${params}`, {})
}
export const updateStaffBySno = (vno, from) => {
  return request.put(`/staffs/${vno}`, {
    semail: from.semail,
    sgender: from.sgender,
    sname: from.sname,
    sphone: from.sphone
  })
}
