
import axios from 'axios';

// 주소록에 관련된 Ajax 요청을 정리
// const BASE_URI = 'http://localhost:8000';

// axios 요청이 default와 다른 경우
// axios 요청 참조 순서: axios 요청 내부의에서 정의한 값 => create => default 순으로 참조
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 3000
})

export const getContactList = async (no = 1, size = 5) => {
  return apiClient.get(``)
};
export const getContact = async (no) => {

};
export const addContact = async (data) => {

};
export const updateContact = async (data) => {

};
export const deleteContact = async (no) => {

};
export const updatePhoto = async (no, file) => {

};

