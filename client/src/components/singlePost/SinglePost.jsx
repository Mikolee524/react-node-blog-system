import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      SinglePost
      <div className="singlePostWrapper">
        <img
          src="https://z1.ax1x.com/2023/10/06/pPXBA3j.jpg"
          alt="singlePostImg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autuor:<b>Michael</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odit
          voluptate neque consequuntur reprehenderit rem quae blanditiis optio
          minus recusandae, omnis modi laudantium nobis voluptas et quo
          adipisci, eius libero?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Explicabo quibusdam dolorum quas rerum totam quasi
          unde recusandae ad consectetur dignissimos numquam, nisi animi
          perferendis quaerat nostrum at itaque temporibus cupiditate! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit
          exercitationem animi soluta, impedit aspernatur totam assumenda non
          ipsum quam nostrum aliquam provident odio commodi dolores distinctio
          recusandae quasi. Et.
        </p>
      </div>
    </div>
  );
}
