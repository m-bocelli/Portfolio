import { Outlet } from 'react-router-dom';
import { lay } from '../components';

export function Layout() {
  return (
    <>
      <lay.Navbar />
      <Outlet />
      <lay.Footer />
    </>
  );
}
