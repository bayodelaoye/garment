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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { closeModal } = useModal();

  useEffect(() => {
    const formErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (first_name === "" || first_name.length < 3 || first_name.length > 10)
      formErrors.first_name =
        "First name must be between 3 and 10 characters long.";

    if (last_name === "" || last_name.length < 3 || last_name.length > 10)
      formErrors.last_name =
        "Last name must be between 3 and 10 characters long.";

    if (!emailRegex.test(email))
      formErrors.email = "Please enter a valid email.";

    if (username === "" || username.length < 4 || username.length > 10)
      formErrors.username =
        "Username must be between 4 and 10 characters long.";

    if (password === "" || password.length < 6)
      formErrors.password = "Password must be 6 or more characters long.";

    if (confirmPassword === "" || confirmPassword.length < 6)
      formErrors.confirmPassword =
        "Confirm Password must be 6 or more characters long.";

    setErrors(formErrors);
  }, [first_name, last_name, email, username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    if (Object.keys(errors).length === 0) {
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
        {isSubmitted ? (
          errors.first_name && (
            <p className="login-sign-up-error">{errors.first_name}</p>
          )
        ) : (
          <></>
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
        {isSubmitted ? (
          errors.last_name && (
            <p className="login-sign-up-error">{errors.last_name}</p>
          )
        ) : (
          <></>
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
        {isSubmitted ? (
          errors.email && <p className="login-sign-up-error">{errors.email}</p>
        ) : (
          <></>
        )}
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
        {isSubmitted ? (
          errors.username && (
            <p className="login-sign-up-error">{errors.username}</p>
          )
        ) : (
          <></>
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
        {isSubmitted ? (
          errors.password && (
            <p className="login-sign-up-error">{errors.password}</p>
          )
        ) : (
          <></>
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
        {isSubmitted ? (
          errors.confirmPassword && (
            <p className="login-sign-up-error">{errors.confirmPassword}</p>
          )
        ) : (
          <></>
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
