import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import MensPage from "../components/MensPage";
import WomensPage from "../components/WomensPage";
import KidsPage from "../components/KidsPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "/men",
        element: <MensPage />,
      },
      {
        path: "/women",
        element: <WomensPage />,
      },
      {
        path: "/kids",
        element: <KidsPage />,
      },
    ],
  },
]);
