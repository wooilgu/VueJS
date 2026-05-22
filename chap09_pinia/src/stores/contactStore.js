import { defineStore } from 'pinia';
import { ref } from 'vue';

// axios 호출 정리는 api/contact.js 파일에 정의 해 놓음 => 불러와서 사용
import * as api from './../api/contact'
// console.log(api)

// 개별 export를 사용했으므로 import { useContactStore } from 'path'
export const useContactStore = defineStore('contactStore', () => {
  // 사용할 데이터
  const contact = ref({ no: 1, name: '', tel: '', address: '', photo: '' });
  const contactList = ref({ pageno: 0, pagesize: 0, totalcount: 0, contacts: [] });
  // 에러와 로딩처리
  const isError = ref(null);
  const isLoading = ref(false);

  const getContactList = async (no, size) => {
    try {
      isLoading.value = true;
      isError.value = null;       // 이전에 에러가 발생해서 값이 대입되어 있을 수 있음

      // 반환값이 Promise를 사용했으면 그 반환값 차체도 Promise다
      const resp = await api.getContactList(no, size);
      contactList.value = resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };
  const getContact = async (no) => {
    try {
      isLoading.value = true;
      isError.value = null;       // 이전에 에러가 발생해서 값이 대입되어 있을 수 있음

      // 반환값이 Promise를 사용했으면 그 반환값 차체도 Promise다
      const resp = await api.getContact(no);
      contact.value = resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };
  const deleteContact = async (no) => {
    try {
      isLoading.value = true;
      isError.value = null;       // 이전에 에러가 발생해서 값이 대입되어 있을 수 있음

      const resp = await api.deleteContact(no);
      // 반환값이 상태를 변경할 값이 아닌 성공, 실패 값이다. 
      // 이 값을 반환해서 각 컴포넌트에서 사용할 수 있도록 return
      return resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };
  const updateContact = async (data) => {
    try {
      isLoading.value = true;
      isError.value = null;

      const resp = await api.updateContact(data);
      // 반환값이 상태를 변경할 값이 아닌 성공, 실패 값이다. 
      // 이 값을 반환해서 각 컴포넌트에서 사용할 수 있도록 return
      return resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };
  const addContact = async (data) => {
    try {
      isLoading.value = true;
      isError.value = null;

      const resp = await api.addContact(data);
      return resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };

  const updatePhoto = async (no, file) => {
    try {
      isLoading.value = true;
      isError.value = null;

      const resp = await api.updatePhoto(no, file);
      return resp.data;
    } catch (err) {
      console.error(err);
      isError.value = err;
    }
    isLoading.value = false;
  };

  const changeContact = (evt) => {
    // <input type="text" class="form-control" name="name" :value="contact.name" @input="store.changeContact($event)" /> <br />
    // <input type="text" class="form-control" name="tel" :value="contact.tel" @input="store.changeContact($event)" />
    if (evt.target.value.trim() !== '') {
      contact.value[evt.target.name] = evt.target.value;
    }
  };
  const clearContact = () => {
    contact.value = { no: '', name: '', tel: '', address: '', photo: '' }
  }

  return { contact, contactList, isLoading, isError, getContactList, getContact, addContact, updateContact, deleteContact, updatePhoto, changeContact, clearContact };
});
