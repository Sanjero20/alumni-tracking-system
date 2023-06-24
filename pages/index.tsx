import BtnLogout from '@/components/Buttons/BtnLogout';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <BtnLogout className="mt-2 rounded-3xl bg-primary px-4 py-2 text-white">
        Signout
      </BtnLogout>
    </Layout>
  );
}
