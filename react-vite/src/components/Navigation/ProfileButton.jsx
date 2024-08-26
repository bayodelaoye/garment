import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { FaUser } from "react-icons/fa";
import "./ProfileButton.css";
import { Link, useNavigate } from "react-router-dom";
import { resetCartReducer } from "../../redux/cart";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session?.user);
  const ulRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    dispatch(resetCartReducer());
    navigate("/");
    closeMenu();
  };

  return (
    <>
      <button onClick={toggleMenu} className="menu-btn">
        <FaUser className="user-icon" />
        {showMenu && (
          <div className="profile-dropdown" ref={ulRef}>
            {user ? (
              <div className="profile-dropdown-div">
                <p className="menu-bottom-border">{user.username}</p>
                <p className="menu-bottom-border">{user.email}</p>
                {/* <Link
                  to="/garments/current"
                  className="menu-bottom-border manage-products-favorites"
                >
                  Manage Products
                </Link> */}
                <Link
                  to="/favorites"
                  className="menu-bottom-border manage-products-favorites"
                >
                  {" "}
                  Your Favorites
                </Link>
                <p>
                  <button onClick={logout} className="login-btn">
                    Log Out
                  </button>
                </p>
              </div>
            ) : (
              <>
                {/* <OpenModalMenuItem
                  itemText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
                <OpenModalMenuItem
                  itemText="Sign Up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                /> */}
              </>
            )}
          </div>
        )}
      </button>
    </>
  );
}

export default ProfileButton;
