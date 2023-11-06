import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsImg">
            <img
              // src="https://z1.ax1x.com/2023/10/05/pPX1dSO.png"
              src="/images/avatar.png"
              alt="avatar"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
          </div>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <div className="settingsPP">
            <label>Username</label>
            <input type="text" placeholder="Safak" />
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com" />
            <label>Password</label>
            <input type="password" placeholder="******" />
            <button className="settingsSubmit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
