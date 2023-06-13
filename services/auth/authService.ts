import { auth, db } from '@/firebase.config';
import { collection, doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { loginErrorHandler } from './authErrorHandler';
import { AccountRegister } from '@/types/registration';
import { AccountType } from '@/types/account';

export const logoutUser = () => {
  auth.signOut();
};

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return null;
  } catch (error: any) {
    return loginErrorHandler(error.code);
  }
};

export const signUpUser = async (registrationData: AccountRegister) => {
  const { personalData, academicData } = registrationData;
  const { email, password } = registrationData.accountData;

  // Create a accounts collection reference
  const accountsCollection = collection(db, 'accounts');

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { uid } = userCredential.user;

    const userData: AccountType = {
      id: uid,
      permission: 'user',
      profile: personalData,
      academicData: academicData,
      accountData: {
        email,
        isVerified: false,
      },
    };

    // create a document reference in the accounts collection
    const docRef = doc(accountsCollection, uid);

    // Store user data in the accounts collection
    await setDoc(docRef, userData);

    return null;
  } catch (error: any) {
    return error.code;
  }
};
