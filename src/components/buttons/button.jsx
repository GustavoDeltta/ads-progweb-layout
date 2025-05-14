import "./Button.css";

function Button(props) {
  return (
    <div className="container-button">
      <button className="button">{props.text}</button>
    </div>
  );
}

export default Button;
