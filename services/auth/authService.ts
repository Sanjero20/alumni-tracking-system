import { auth, db } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { loginErrorHandler } from './authErrorHandler';

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return '';
  } catch (error: any) {
    return loginErrorHandler(error.code);
  }
};

// export const signUpUser =async (registrationData: ) => {

// }

export const logoutUser = () => {
  auth.signOut();
};
