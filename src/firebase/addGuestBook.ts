import { addDoc, collection } from "firebase/firestore";
import { db } from ".";
import { parseDateObj } from "../utils/parseDateObj";

type guestBookType = {
  name: string;
  text: string;
};

export const addGuestBook = async (data: guestBookType) => {
  const newData = { ...data, date: parseDateObj(new Date()) };

  const docRef = collection(db, "guestBook");
  try {
    await addDoc(docRef, newData);
    return true;
  } catch (error) {
    console.error(error);
    alert("등록에 실패 했어요...");
    return false;
  }
};
