import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "../../../public/logo.png";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import { MdOutlineShoppingBag } from "react-icons/md";
import LoginFormModal from "../LoginFormModal";

function Navigation() {
  const { closeModal } = useModal();

  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" />
      <div className="nav-links-container">
        <NavLink to="/men" className="nav-link">
          Men
        </NavLink>
        <NavLink to="/men" className="nav-link">
          Women
        </NavLink>
        <NavLink to="/men" className="nav-link">
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

      {/* <ProfileButton /> */}
    </div>
  );
}

export default Navigation;
