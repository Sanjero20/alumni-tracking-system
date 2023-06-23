type ErrorMsg = {
  code: string;
  message: string;
};

export const loginErrorHandler = (error: ErrorMsg) => {
  const errorCode = error.code ? error.code : error.message;

  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/user-disabled':
      return 'Account disabled.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/network-request-failed':
      return 'Network connection failed.';
    case 'auth/too-many-requests':
      return 'Too many sign-in attempts. Try again later.';
    case 'auth/account-pending':
      return 'Account is pending for approval';
    case 'auth/account-rejected':
      return 'Account is rejected due to invalid credentials';
    default:
      return 'An unknown error occured. Please try again later.';
  }
};

export const signUpErrorHandler = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/email-already-in-use':
      return 'Email already in use.';
    case 'auth/weak-password':
      return 'Weak password.';
    case 'auth/network-request-failed':
      return 'Network connection failed.';
    default:
      return 'An unknown error occured. Please try again later.';
  }
};
