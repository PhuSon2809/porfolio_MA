import React from "react";
import CardProject from "../../components/CardProject";
import "./Home.scss"

function Home() {
  return (
    <div className="content">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  );
}

export default Home;
