import { auth } from '@/firebase/config';
import AuthLayout from '@/services/auth/authLayout';
import Header from '@/components/Header';
import { useAuthStore } from '@/stores/user';

export default function Home() {
  const { user, loading, error } = useAuthStore();

  console.log(user, loading, error);

  return (
    <AuthLayout>
      <Header />

      <button onClick={() => auth.signOut()} className="bg-primary">
        Signout
      </button>
    </AuthLayout>
  );
}
