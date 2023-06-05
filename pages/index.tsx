import { auth } from '@/firebase/config';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <button
        onClick={() => auth.signOut()}
        className="mt-2 rounded-3xl bg-primary px-4 py-2 text-white"
      >
        Signout
      </button>
    </Layout>
  );
}
