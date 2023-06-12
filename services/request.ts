import { db } from '@/firebase.config';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

// fetch documents in the database collections
export const fetchCollection = async (collectionName: string) => {
  try {
    const colRef = collection(db, collectionName);
    const documents = await getDocs(colRef);

    const documentArray: any = [];
    documents.docs.forEach((document) => {
      documentArray.push(document.data());
    });

    return documentArray;
  } catch (error) {}
};

export const fetchCampuses = async () => {
  try {
    let campuses = await fetchCollection('campuses');

    campuses = campuses.map((campus: any) => ({
      campusId: campus.campusId,
      name: campus.name,
    }));

    return campuses;
  } catch (error) {}
};
