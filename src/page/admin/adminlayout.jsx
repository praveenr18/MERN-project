
import { Link, Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <div>
      <nav>
        <Link to="dashboard">Dashboard</Link>
        <br /><br />
        <Link to="userdetails">User Details</Link>
        <br /><br />
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default AdminLayout;
