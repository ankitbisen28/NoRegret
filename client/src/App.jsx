import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getDetails = async () => {
    const response = await axios.get(
      "https://noregret.onrender.com/api/users/list"
    );
    setData(response.data);
  };

  console.log(data);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="heading fw-bold">Addmission Consulting</h2>
        <div className="line mt-3 text-success"></div>
        <p className="mt-3 w-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, eius? Lorem ipsum dolor sit amet.
        </p>
        <div id="carouselExample" className="carousel slide w-25 mt-5">
          <div className="carousel-inner">
            {data.map((item, index) => {
              const isActive = index === 0 ? "active" : "";
              return (
                <div className={`carousel-item ${isActive}`} key={item.id}>
                  <Card item={item} />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn btn-primary"
              // aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn btn-primary"
              // aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
