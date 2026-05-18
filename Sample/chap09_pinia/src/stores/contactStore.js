import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore('contactStore', () => {
  const contact = ref({ no: 1, name: '', tel: '', address: '', photo: '' });
  const contactList = ref({ pageno: 0, pagesize: 0, totalcount: 0, contacts: [] });

  const getContactList = (no, size) => {

  };
  const getContact = async (no) => {

  };
  const deleteContact = async (no) => {

  };
  const updateContact = async (data) => {

  };
  const addContact = async (data) => {

  };

  const updatePhoto = async (no, file) => {

  };

  const changeContact = (evt) => {

  };
  const clearContact = () => {

  }

  return { contact, contactList, getContactList, getContact, addContact, updateContact, deleteContact, updatePhoto, changeContact, clearContact };
});