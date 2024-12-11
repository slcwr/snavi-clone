// pages/admin/index.tsx
import dynamic from 'next/dynamic';

const AdminDashboardWithSuspense = dynamic(
  () => import('../../components/organisms/AdminDashboard/'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

const AdminPage = () => {
  return <AdminDashboardWithSuspense />;
};

export default AdminPage;
