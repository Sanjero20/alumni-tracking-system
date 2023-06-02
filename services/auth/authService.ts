import { auth, db } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return '';
  } catch (error: any) {
    return error.code;
  }
};

// export const signUpUser =async (registrationData: ) => {

// }

export const logoutUser = () => {
  auth.signOut();
};
