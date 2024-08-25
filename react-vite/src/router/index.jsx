import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import HomePage from "../components/HomePage";
import MensPage from "../components/MensPage";
import WomensPage from "../components/WomensPage";
import KidsPage from "../components/KidsPage";
import GarmentDetailsPage from "../components/Garment/GarmentDetailsPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
      {
        path: "/garments/:garmentId",
        element: <GarmentDetailsPage />,
      },
    ],
  },
]);
