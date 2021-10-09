import "./App.css";
import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2 className="loading">Getting Github users...</h2>;
  }

  if (isError) {
    return (
      <h2 className="error">
        An error occurred while fetching data. kindly refresh your browser
      </h2>
    );
  }

  return (
    <div className="App">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
