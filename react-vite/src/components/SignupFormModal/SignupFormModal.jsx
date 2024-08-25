import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {}, [
    first_name,
    last_name,
    email,
    username,
    password,
    confirmPassword,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email))
      return setErrors({
        email: "Please enter a valid email.",
      });

    if (password !== confirmPassword)
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field.",
      });

    const serverResponse = await dispatch(
      thunkSignup({
        first_name,
        last_name,
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-text">Sign Up</h1>
      {errors.server && <p className="login-sign-up-error">{errors.server}</p>}
      <form onSubmit={handleSubmit} className="sign-up-form-container">
        <label className="credentials-sign-up">
          <div>
            First Name <span className="field-required">*</span>
          </div>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.first_name && (
          <p className="login-sign-up-error">{errors.first_name}</p>
        )}
        <label className="credentials-sign-up">
          <div>
            Last Name <span className="field-required">*</span>
          </div>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.last_name && (
          <p className="login-sign-up-error">{errors.last_name}</p>
        )}
        <label className="credentials-sign-up">
          <div>
            Email <span className="field-required">*</span>
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p className="login-sign-up-error">{errors.email}</p>}
        <label className="credentials-sign-up">
          <div>
            Username <span className="field-required">*</span>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && (
          <p className="login-sign-up-error">{errors.username}</p>
        )}
        <label className="credentials-sign-up">
          <div>
            Password <span className="field-required">*</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && (
          <p className="login-sign-up-error">{errors.password}</p>
        )}
        <label className="credentials-sign-up">
          <div>
            Confirm Password <span className="field-required">*</span>
          </div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p className="login-sign-up-error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          // disabled={Object.values(errors) >= 1}
          className="sign-up-modal-btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;
