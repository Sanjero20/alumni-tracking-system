import { auth, db } from '@/firebase/config';
import { collection, doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { loginErrorHandler } from './authErrorHandler';
import { AccountRegister } from '@/utils/types';

export const logoutUser = () => {
  auth.signOut();
};

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return ''; // No errors
  } catch (error: any) {
    return loginErrorHandler(error.code);
  }
};

export const signUpUser = async (registrationData: AccountRegister) => {
  // Destruct Registration form data
  const { name, birthday } = registrationData.personalData;
  const { email, password } = registrationData.accountData;

  const usersCollection = collection(db, 'users');

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { uid } = userCredential.user;

    const docRef = doc(usersCollection, uid);
    await setDoc(docRef, {
      id: uid,
      email,
      name,
      birthday,
    });

    logoutUser();
    // Reset all forms state
    return '';
  } catch (error: any) {
    return error.code;
  }
};
