import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://z1.ax1x.com/2023/10/06/pPXBA3j.jpg"
        alt="post img"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis
        magni saepe aut ratione provident perspiciatis? Accusantium iste qui id.
        Corrupti tenetur ut delectus laborum sint sit cupiditate natus unde.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis
        magni saepe aut ratione provident perspiciatis? Accusantium iste qui id.
        Corrupti tenetur ut delectus laborum sint sit cupiditate natus unde.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis
        magni saepe aut ratione provident perspiciatis? Accusantium iste qui id.
        Corrupti tenetur ut delectus laborum sint sit cupiditate natus unde.
      </p>
    </div>
  );
}
