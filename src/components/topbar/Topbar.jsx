import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg " style={{ height: "50px" }}>
      <div class="container d-flex align-items-center justify-content-between">
        <Link to="/" class="fw-bold fs-4 text-primary">
       
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;
