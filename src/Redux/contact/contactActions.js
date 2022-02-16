import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
} from "./contactTypes";
import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import db from "../../config/FirebaseConfig";

const addContact = () => {
  return {
    type: ADD_CONTACT,
  };
};

const getConatcts = (contacts) => {
  return {
    type: GET_CONTACTS,
    payload: contacts,
  };
};

const deleteContact = () => {
  return {
    type: DELETE_CONTACT,
  };
};

const getContact = (contact) => {
  return {
    type: GET_CONTACT,
    payload: contact,
  };
};

const updateContact = () => {
  return {
    type: UPDATE_CONTACT,
  };
};

export const addContactInitiate = (contactInfo) => {
  return async (dispatch) => {
    await addDoc(collection(db, "contacts"), contactInfo);
    dispatch(addContact(contactInfo));
  };
};

export const getContactsInitiate = () => {
  return (dispatch) => {
    const q = collection(db, "contacts");
    onSnapshot(q, (querySnapshot) => {
      const contacts = [];
      querySnapshot.forEach((doc) => {
        contacts.push({ ...doc.data(), id: doc.id });
      });
      dispatch(getConatcts(contacts));
    });
  };
};

export const deleteContactInitiate = (id) => {
  return async (dispatch) => {
    await deleteDoc(doc(db, "contacts", id));
    dispatch(deleteContact());
  };
};

export const getContactInitiate = (id) => {
  return async (dispatch) => {
    const docRef = doc(db, "contacts", id);
    const docSnap = await getDoc(docRef);

    dispatch(getContact({ ...docSnap.data() }));
  };
};

export const updateContactInitiate = (id, singleContact) => {
  return async (dispatch) => {
    const washingtonRef = doc(db, "contacts", id);
    await updateDoc(washingtonRef, singleContact);
    dispatch(updateContact());
  };
};
