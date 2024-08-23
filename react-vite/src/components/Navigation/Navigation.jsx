import { Link, NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "../../../public/logo.png";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import { MdOutlineShoppingBag } from "react-icons/md";
import LoginFormModal from "../LoginFormModal";
import { useSelector } from "react-redux";

function Navigation() {
  const user = useSelector((state) => state.session.user);
  const { closeModal } = useModal();

  return (
    <>
      {!user ? (
        <div className="navbar-container">
          <img src={logo} alt="logo" />
          <div className="nav-links-container">
            <NavLink to="/men" className="nav-link">
              Men
            </NavLink>
            <NavLink to="/women" className="nav-link">
              Women
            </NavLink>
            <NavLink to="/kids" className="nav-link">
              Kids
            </NavLink>
          </div>

          <div className="login-btn-shopping-bag">
            <OpenModalButton
              buttonText={`Login`}
              onClose={closeModal}
              className="login-btn"
              modalComponent={<LoginFormModal />}
            />
            <MdOutlineShoppingBag className="shopping-bag" />
          </div>
        </div>
      ) : (
        <div className="navbar-container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-links-container">
            <NavLink to="/men" className="nav-link">
              Men
            </NavLink>
            <NavLink to="/women" className="nav-link">
              Women
            </NavLink>
            <NavLink to="/kids" className="nav-link">
              Kids
            </NavLink>
          </div>

          <div className="user-menu-shopping-bag">
            <ProfileButton />
            <MdOutlineShoppingBag className="shopping-bag" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
