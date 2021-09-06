import { useState } from "react";
import "./Navbar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PublishIcon from "@material-ui/icons/Publish";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import logo from "../../assets/images/logo.png";
import SellItem from "./navComponent/Selltem";
import Login from "./navComponent/Login";
import Notification from "./navComponent/Notification";
import Button from "@material-ui/core/Button";
import Favorites from "./navComponent/Favourites";
import Profile from "./navComponent/Profile";
import profileLogo from "../../assets/images/man.png";
export default function Navbar() {
  const [openUpload, setOpenUpload] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const loggedInItems = () => {
    return (
      <>
        <li
          className="nav-item active"
          onClick={() => {
            setOpenUpload(true);
            console.log("Navbar");
          }}
        >
          <a className="nav-link a-upload" href="#">
            <Tooltip title="Upload">
              <PublishIcon color="secondary" />
            </Tooltip>
            <span className="upload">Upload</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li
          onClick={() => {
            setOpenNotification(true);
          }}
          className="nav-item active"
        >
          <a className="nav-link a-notification" href="#">
            <Tooltip title="Notification">
              <NotificationsIcon color="primary" />
            </Tooltip>
            <span className="notification">Notifications</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li
          className="nav-item active"
          onClick={() => {
            setOpenFavorites(true);
          }}
        >
          <a className="nav-link a-notification" href="#">
            <Tooltip title="Favourite">
              <FavoriteIcon color="secondary" />
            </Tooltip>
            <span className="favourites">Favourites</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li
          onClick={() => {
            setOpenProfile(true);
          }}
          className="nav-item active"
        >
          <a className="nav-link" href="#">
            {/* <Tooltip title="Profile">
                  <Avatar className={classes.small} />
                </Tooltip> */}
            <img
              src={profileLogo}
              width="25"
              height="25"
              className="d-inline-block align-top logo_image"
              alt=""
            />
            <span className="profile">Profile</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>
      </>
    );
  };

  const notloggedInItems = () => {
    return (
      <>
        <li
          className="nav-item active"
          onClick={() => {
            setOpenLogin(true);
          }}
        >
          <Button color="primary">
            <strong>Sign In</strong>
          </Button>
        </li>
      </>
    );
  };

  return (
    <>
      <SellItem openUpload={openUpload} setOpenUpload={setOpenUpload} />
      <Notification
        openNotification={openNotification}
        setOpenNotification={setOpenNotification}
      />
      <Login
        setLoggedIn={setLoggedIn}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />
      <Favorites
        openFavorite={openFavorites}
        setOpenFavorite={setOpenFavorites}
      />
      <Profile
        setLoggedIn={setLoggedIn}
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
      />
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-2">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="170px"
            height="40px"
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
            {loggedIn ? loggedInItems() : notloggedInItems()}
          </ul>
        </div>
      </nav>
    </>
  );
}
