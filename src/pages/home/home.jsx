import "./home.css";
import Header from "../../Header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../siderbar/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
