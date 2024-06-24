import { addDoc, collection } from "firebase/firestore";
import { db } from ".";

type SubmitMenuType = {
  name: string;
  menu: string;
};

export const submitMenu = async (data: SubmitMenuType) => {
  const docRef = collection(db, "menu");
  try {
    await addDoc(docRef, data);
    return true;
  } catch (error) {
    console.error(error);
    alert("등록에 실패 했어요...다시 시도해주세요");
    return false;
  }
};
