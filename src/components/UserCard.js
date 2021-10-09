import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <>
      <section className="cards">
        <img src={user.avatar_url} alt={user.login} className="img" />
        <div className="name">
          <p>{user.login}</p>
          <p>
            <a href={user.html_url}>Profile</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default UserCard;
