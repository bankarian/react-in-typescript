import React, { useState } from "react";
import { useEffect } from "react";
import IPage from "../interface/page";

const HomePage: React.FC<IPage> = (props) => {
  const [name, setName] = useState<string>("loading");
  useEffect(() => {
    setName(props.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default HomePage;
