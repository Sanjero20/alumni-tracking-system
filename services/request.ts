import { db } from '@/firebase.config';
import { Campus } from '@/types/campus';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

// fetch documents in the database collections
export const fetchCollection = async <T> (collectionName: string): Promise<T[]> => {
  try {
    const colRef = collection(db, collectionName);
    const documents = await getDocs(colRef);

    const documentArray: T[] = [];
    documents.docs.forEach((document) => {
      documentArray.push(document.data() as T);
    });

    return documentArray;
  } catch (error) {
    throw error
  }
};

export const fetchCampuses = async () => {
  try {
    const campusesInfo = await fetchCollection<Campus>('campuses');
    return campusesInfo;
  } catch (error) {
    console.log(error)
  }
};
