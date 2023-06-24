import { auth, db } from '@/firebase.config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { loginErrorHandler, signUpErrorHandler } from './authErrorHandler';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { AccountRegister } from '@/types/registration';
import { AccountType, Permission, UserAccount } from '@/types/account';
import { getUserAccountDetails } from '../request';

export const logoutUser = () => {
  auth.signOut();
};

export const loginUser = async (email: string, password: string) => {
  let account: UserAccount | null = null;
  let errorMsg: string | null = null;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // Check user account details if is verified
    if (!auth.currentUser) throw new Error('');
    const userID = auth.currentUser.uid;

    const userAccountData = await getUserAccountDetails(userID);

    if (!userAccountData) throw new Error('No data found');

    if (userAccountData.status !== 'verified') {
      throw new Error(`auth/account-${userAccountData.status}`);
    }

    account = userAccountData;
  } catch (error: any) {
    auth.signOut();
    errorMsg = loginErrorHandler(error);
  }

  return { account, errorMsg };
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

    // Restructure user data to match the format in the collection
    const { uid } = userCredential.user;
    const userData: AccountType = {
      id: uid,
      profile: personalData,
      academicData: academicData,
      account: {
        email,
        status: 'pending',
        permission: 'user',
      },
    };

    // create a document reference in the accounts collection
    const docRef = doc(accountsCollection, uid);
    // Store user data in the accounts collection
    await setDoc(docRef, userData);

    // Prevent user from automatically going to the main page
    auth.signOut();
    return null;
  } catch (error: any) {
    return signUpErrorHandler(error.code);
  }
};
