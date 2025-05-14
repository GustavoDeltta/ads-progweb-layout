import Button from "../buttons/button";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Explore</h1>
      <p className="description">
        Discover prototypes created by the community
      </p>
      <div className="buttons">
        <Button text={"Popular"} />
        <Button text={"Staff Picks"} />
        <Button text={"Recents"} />
      </div>
    </div>
  );
}

export default Header;
