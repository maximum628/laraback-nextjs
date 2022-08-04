import PropTypes from 'prop-types';
// guards
import AuthGuard from '../guards/AuthGuard';
// components
import MainLayout from './main';
import DashboardLayout from './dashboard';
import AdminDashboardLayout from './admindashboard';
import LogoOnlyLayout from './LogoOnlyLayout';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dashboard','admin', 'main', 'logoOnly']),
};

export default function Layout({ variant = 'dashboard', children }) {
  console.log(variant);
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }
  if (variant === 'admin') {
    return (
      <AuthGuard>
        <AdminDashboardLayout> {children} </AdminDashboardLayout>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
  );
}
