import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav sidebar sidebar-dark accordion h-100"
        style={{ backgroundColor: "#435585" }}
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <img
              src={require("../../photos/logo.png")}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="sidebar-brand-text mx-2">
            <h5 className="m-0">
              Hotel Realta
              <br />
              <p className="fs-6 fst-italic lead m-0">check in dong</p>
            </h5>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Module</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseUsers"
            aria-expanded="true"
            aria-controls="collapseUsers"
          >
            <span>Users</span>
          </Link>
          <div
            id="collapseUsers"
            className="collapse"
            aria-labelledby="headingUsers"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/users/profile"}>
                My Profile
              </Link>
              <Link className="collapse-item" to={"/users/booking"}>
                My Bookings
              </Link>
              <Link className="collapse-item" to={"/users/account"}>
                My Accounts
              </Link>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseMaster"
            aria-expanded="true"
            aria-controls="collapseMaster"
          >
            <span>Master</span>
          </Link>
          <div
            id="collapseMaster"
            className="collapse"
            aria-labelledby="headingMaster"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/master/locations"}>
                Locations
              </Link>
              <Link className="collapse-item" to={"/master/policy"}>
                Policy
              </Link>
              <Link className="collapse-item" to={"/master/category"}>
                Category Group
              </Link>
              <Link className="collapse-item" to={"/master/priceitems"}>
                Price Items
              </Link>
              <Link className="collapse-item" to={"/master/servicetasks"}>
                Service Task
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseHotels"
            aria-expanded="true"
            aria-controls="collapseHotels"
          >
            <span>Hotels</span>
          </Link>
          <div
            id="collapseHotels"
            className="collapse"
            aria-labelledby="headingHotels"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/hotels/hotel"}>
                Hotel
              </Link>
              <Link className="collapse-item" to={"/hotels/facilities"}>
                Facilities
              </Link>
              <Link className="collapse-item" to={"/hotels/reviews"}>
                Reviews
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBooking"
            aria-expanded="true"
            aria-controls="collapseBooking"
            to={"/booking"}
          >
            <span>Booking</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseResto"
            aria-expanded="true"
            aria-controls="collapseResto"
            to={"/resto"}
          >
            <span>Resto</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePayment"
            aria-expanded="true"
            aria-controls="collapsePayment"
          >
            <span>Payment</span>
          </Link>
          <div
            id="collapsePayment"
            className="collapse"
            aria-labelledby="headingPayment"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/payment/bank"}>
                Bank
              </Link>
              <Link className="collapse-item" to={"/payment/fintech"}>
                Fintech
              </Link>
              <Link className="collapse-item" to={"/payment/account"}>
                Accounts
              </Link>
              <Link className="collapse-item" to={"/payment/topup"}>
                Topup
              </Link>
              <Link className="collapse-item" to={"/payment/transaction"}>
                Transaction
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseHR"
            aria-expanded="true"
            aria-controls="collapseHR"
          >
            <span>HR</span>
          </Link>
          <div
            id="collapseHR"
            className="collapse"
            aria-labelledby="headingHR"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/HR/dept"}>
                Department
              </Link>
              <Link className="collapse-item" to={"/HR/employee"}>
                Employee
                </Link>
              <Link className="collapse-item" to={"/HR/work_order"}>
                WorkOrder
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePurchasing"
            aria-expanded="true"
            aria-controls="collapsePurchasing"
          >
            <span>Purchasing</span>
          </Link>
          <div
            id="collapsePurchasing"
            className="collapse"
            aria-labelledby="headingPurchasing"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link className="collapse-item" to={"/purchasing/vendor"}>
                Vendor
              </Link>
              <Link className="collapse-item" to={"/purchasing/stock"}>
                Stock
              </Link>
              <Link className="collapse-item" to={"/purchasing/order"}>
                Purchasing Order
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
