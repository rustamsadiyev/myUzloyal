import React from "react";

function Services() {
  const baseUrl = "https://test.uzloyal.uz/api";

  const getData = () => {
    fetch(`${baseUrl}/services`).then((data) => console.log(data));
  };
  return <div></div>;
}

export default Services;
