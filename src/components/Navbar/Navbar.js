import { useState } from "react";
import "./Navbar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PublishIcon from "@material-ui/icons/Publish";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";

import SellItem from "./navComponent/Selltem";

export default function Navbar() {
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <>
      <SellItem openUpload={openUpload} setOpenUpload={setOpenUpload} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-2">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top logo_image"
            alt=""
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mr-auto"></div>
          <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item active" onClick={() => setOpenUpload(true)}>
              <a className="nav-link a-upload" href="#">
                <Tooltip title="Upload">
                  <PublishIcon color="secondary" />
                </Tooltip>
                <span className="upload">Upload</span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link a-notification" href="#">
                <Tooltip title="Notification">
                  <NotificationsIcon color="primary" />
                </Tooltip>
                <span className="notification">Notifications</span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link a-notification" href="#">
                <Tooltip title="Favourite">
                  <FavoriteIcon color="secondary" />
                </Tooltip>
                <span className="favourites">Favourites</span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {/* <Tooltip title="Profile">
                  <Avatar className={classes.small} />
                </Tooltip> */}
                <img
                  src="https://img-premium.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1630766468~hmac=e0c1251a2efd2668128610bb3e21dcba"
                  width="25"
                  height="25"
                  className="d-inline-block align-top logo_image"
                  alt=""
                />
                <span className="profile">Profile</span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
