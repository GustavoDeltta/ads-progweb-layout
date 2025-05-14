import "./card.css";
import Likes from "../../assets/like.svg";
import Comments from "../../assets/comments.svg";
import Views from "../../assets/views.svg";

function Card(props) {
  return (
    <div className="card">
      <div className="card-banner">
        <img className="banner" src={props.banner} />
      </div>
      <div className="user-infos">
        <img className="user-pfp" src={props.pfp} />
        <div className="infos">
          <p className="name">{props.name}</p>
          <div className="statistics">
            <div className="likes">
              <img src={Likes} />
              <p>123</p>
            </div>
            <div className="comments">
              <img src={Comments} />
              <p>123</p>
            </div>
            <div className="views">
              <img src={Views} />
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
