import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import IPage from "../interface/page";

interface RouteProps {
  number?: string;
}

const AboutPage: React.FC<IPage & RouteComponentProps<RouteProps>> = (
  props
) => {
  const [name, setName] = useState<string>("loading");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setName(props.name);
    let number = props.match.params.number;
    if (number) {
      setMessage(`get number ${number}`);
    } else {
      setMessage("no number provided");
    }
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
      <Link to="/">to the HomePage</Link>
    </div>
  );
};

export default withRouter(AboutPage);
