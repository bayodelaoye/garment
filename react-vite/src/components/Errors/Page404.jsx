import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <main className="main-404-container">
      <div className="page-404-container">
        <h1>404 Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/kids">
          <button className="project-404-btn">
            Continue to latest collection
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Page404;
