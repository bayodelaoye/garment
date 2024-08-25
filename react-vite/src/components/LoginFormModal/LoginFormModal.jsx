import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal";
import { obtainFavoriteGarments } from "../../redux/favorite";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      await dispatch(obtainFavoriteGarments());
      closeModal();
    }
  };

  const handleDemoLogin = async () => {
    setErrors({});
    const demoCredentials = {
      email: "demo@aa.io",
      password: "password",
    };

    const serverResponse = await dispatch(thunkLogin(demoCredentials));

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      await dispatch(obtainFavoriteGarments());
      closeModal();
    }
  };

  return (
    <div className="login-container">
      <div className="login-text-sign-up-container">
        <h1>Log In</h1>
        <OpenModalButton
          buttonText={`Sign Up`}
          onClose={closeModal}
          modalComponent={<SignupFormModal />}
        />
      </div>
      <div className="login-sign-up-error-container">
        {errors.email && <p className="login-sign-up-error">{errors.email}</p>}
        {errors.password && (
          <p className="login-sign-up-error">{errors.password}</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="login-form-container">
        <label className="email-password-login">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="email-password-login">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="login-modal-btn">
          Log In
        </button>
        <button
          type="button"
          className="login-modal-btn"
          onClick={handleDemoLogin}
        >
          Log In as Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;
