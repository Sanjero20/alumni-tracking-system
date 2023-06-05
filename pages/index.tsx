import { auth } from '@/firebase/config';
import AuthLayout from '@/services/auth/authLayout';
import Header from '@/components/Header/Header';
import { useAuthStore } from '@/stores/user';

export default function Home() {
  const { user } = useAuthStore();

  return (
    <AuthLayout>
      <Header />

      <button
        onClick={() => auth.signOut()}
        className="mt-2 rounded-3xl bg-primary px-4 py-2 text-white"
      >
        Signout
      </button>
    </AuthLayout>
  );
}
