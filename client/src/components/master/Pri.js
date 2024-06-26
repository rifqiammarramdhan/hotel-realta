import React from "react";
import Sidebar from "./Sidebar";
import PriceItems from "./PriceItems";
import { Link } from "react-router-dom";

const Pri = () => {
  return (
    <div>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav
              className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow"
              style={{ backgroundColor: "#363062" }}
            >
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow mx-3">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Admin
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="https://i.pravatar.cc/150?img=12"
                      alt=""
                    />
                  </Link>
                  {/* Dropdown - User Information */}
                  <div
                    className="dropdown-menu dropdown-menu-end shadow animated--grow-in w-auto"
                    aria-labelledby="userDropdown"
                  >
                    <Link className="dropdown-item" to={"/profile"}>
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </Link>
                    <Link className="dropdown-item" to={"/setting"}>
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </Link>
                    <Link className="dropdown-item" to={"/activity"}>
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                      Activity Log
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                      to={"/logout"}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            <div class="container">
              <PriceItems />
            </div>
          </div>
          <footer
            className="sticky-footer fixed-bootom"
            style={{ backgroundColor: "#363062" }}
          >
            <div className="container my-auto">
              <div className="copyright text-center my-auto text-white">
                <span>Copyright © Hotel Realta — 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
};

export default Pri;
