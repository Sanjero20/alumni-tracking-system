import AuthLayout from '@/layouts/AuthLayout';
import { auth } from '@/firebase/config';

export default function Home() {
  return (
    <AuthLayout>
      <p>Landing page</p>

      <button onClick={() => auth.signOut()}>Signout</button>
    </AuthLayout>
  );
}
