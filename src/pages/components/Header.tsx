// src/components/Header.tsx
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-100 px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-800 font-semibold border-b-2 border-gray-800 pb-1"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistic"
          className={({ isActive }) =>
            isActive
              ? "text-gray-800 font-semibold border-b-2 border-gray-800 pb-1"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Statistic
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm"
      >
        Logout
      </button>
    </nav>
  );
};

export default Header;
