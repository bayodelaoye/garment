import { Link } from "react-router-dom";

function Page401() {
  return (
    <main className="main-404-container">
      <div className="page-404-container">
        <h1>401 Unauthorized</h1>
        <p>You don't have authorization to make this change.</p>
        <Link to="/">
          <button className="project-404-btn">Continue to home page</button>
        </Link>
      </div>
    </main>
  );
}

export default Page401;
