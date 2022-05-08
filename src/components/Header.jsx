import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header
      className="header"
      style={{ display: "flex", justifyContent: "flex-end", margin: "20px" }}
    >
      {/* <div className="">
        <Link to="/">Dashboard</Link>
      </div> */}
      <ul style={{ listStyle: "none" }}>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
