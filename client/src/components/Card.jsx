import React from "react";

export const Card = ({ item }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {item.first_name + " " + item.last_name}
          </h5>
          <p className="card-text">{item.message}</p>
        </div>
      </div>
    </>
  );
};
