import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Card from "./components/cards/card";
import imagesPool from "./assets/images/imagesPool";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var response = await fetch(
        "https://randomuser.me/api/?results=5&inc=name,picture"
      );
      var data = await response.json();
      setUsers(data.results);
    }

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <main>
        {users.map((user, index) => (
          <Card
            key={index}
            banner={imagesPool[index].src}
            pfp={user.picture.medium}
            name={user.name.first}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
