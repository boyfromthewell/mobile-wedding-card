import { addDoc, collection } from "firebase/firestore";
import { db } from ".";

type guestBookType = {
  name: string;
  text: string;
};

export const addGuestBook = async (data: guestBookType) => {
  const newData = { ...data, date: new Date().toString() };

  const docRef = collection(db, "guestBook");
  try {
    await addDoc(docRef, newData);
  } catch (error) {
    console.error(error);
    alert("등록에 실패 했어요...");
  }
};
