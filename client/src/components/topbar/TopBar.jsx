import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-api.project.mikolee.xyz/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a
          className="socialLink"
          href="https://twitter.com/michael_li524"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </a>
        <a
          className="socialLink"
          href="https://github.com/michaeli524"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fa-brands fa-square-github"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {user.profilePic === "" ? (
              <i className="defaultTopImg fa-solid fa-user"></i>
            ) : (
              <img
                className="topImg"
                // src="https://z1.ax1x.com/2023/10/04/pPONoSx.jpg" src="/images/miku_avatar.jpg"
                src={PF + user.profilePic}
                title="User Setting"
                alt="avatar"
              />
            )}
            <span className="topUsername">{user.username}</span>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
}
