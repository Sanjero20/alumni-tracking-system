import { db } from '@/firebase.config';
import { AccountType } from '@/types/account';
import { Campus } from '@/types/campus';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

// fetch documents in the database collections
export const fetchCollection = async <T>(
  collectionName: string
): Promise<T[] | null> => {
  try {
    const colRef = collection(db, collectionName);
    const documents = await getDocs(colRef);

    const documentArray: T[] = [];
    documents.docs.forEach((document) => {
      documentArray.push(document.data() as T);
    });

    return documentArray;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const fetchDocument = async <T>(
  collectionName: string,
  documentId: string
): Promise<T | null> => {
  const docRef = doc(db, collectionName, documentId);

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData: T = docSnapshot.data() as T;
      return documentData;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const fetchCampuses = async () => {
  try {
    const campusesInfo = await fetchCollection<Campus>('campuses');
    return campusesInfo;
  } catch (error) {
    console.log(error);
  }
};

export const getUserAccountDetails = async (userID: string) => {
  try {
    const userData = await fetchDocument<AccountType>('accounts', userID);
    return userData?.account;
  } catch (error) {
    console.log(error);
  }
};
