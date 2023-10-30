import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        // src="https://z1.ax1x.com/2023/10/05/pPXSAlF.png"
        src="./background.png"
        alt="background"
      />
    </div>
  );
}
