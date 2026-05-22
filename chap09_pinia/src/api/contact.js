
// npm i p-min-delay
import axios from 'axios';
import pMinDelay from 'p-min-delay'

// 주소록에 관련된 Ajax 요청을 정리
// const BASE_URI = 'http://localhost:8000';

// axios 요청이 default와 다른 경우
// axios 요청 참조 순서: axios 요청 내부의에서 정의한 값 => create => default 순으로 참조
const apiClient = axios.create({
  baseURL: '/api',
  // baseURL: 'http://localhos:8000',     // 에러 확인시
  timeout: 3000
})

export const getContactList = async (no = 1, size = 5) => {
  return await pMinDelay(apiClient.get(`/contacts`, { params: { pageno: no, pagesize: size } }), 1000);
};
export const getContact = async (no) => {
  return await apiClient.get(`/contacts/${no}`);
};
export const addContact = async (data) => {
  return await apiClient.post(`/contacts`, data);
};
// data => { id: ?, name: ?, tel: ?, address: ?, .. }
export const updateContact = async (data) => {
  // node 서버가 잘못되어 있음 JSON으로 직렬화하지 마세요
  return await apiClient.put(`/contacts/${data.no}`, data);
};
export const deleteContact = async (no) => {
  return await apiClient.delete(`/contacts/${no}`);
};
export const updatePhoto = async (no, file) => {
  const formData = new FormData();
  formData.append('photo', file);
  return await apiClient.post(`/contacts/${no}/photo`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

