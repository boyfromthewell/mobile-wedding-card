import { addDoc, collection } from "firebase/firestore";
import { db } from ".";

type guestBookType = {
  name: string;
  text: string;
};

export const addGuestBook = async (data: guestBookType) => {
  const newData = { ...data, date: new Date().toString() };

  const docRef = collection(db, "guestBook");
  await addDoc(docRef, newData).then(() => {
    alert("등록 완료");
  });
};
