import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cat, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          // src="https://z1.ax1x.com/2023/10/05/pPX1dSO.png"
          src="/images/avatar.png"
          alt="avatar"
        />
        <p>
          This is a blog system made with React, Node.js, and MongoDB. Check it
          on&nbsp;
          <a
            href="https://github.com/michaeli524/react-node-blog-system"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              color: "black",
              "text-decoration": "underline",
            }}
          >
            Github
          </a>
          .
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            className="socialLink"
            href="https://twitter.com/michael_li524"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          </a>
          <a
            className="socialLink"
            href="https://github.com/michaeli524"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
