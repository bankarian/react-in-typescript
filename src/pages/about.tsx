import { Snackbar } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  Link,
  RouteComponentProps,
  useHistory,
  withRouter,
} from "react-router-dom";
import IPage from "../interface/page";

interface RouteProps {
  number?: string;
}

interface HistoryState {
  number: number;
}

let direct = true;

const AboutPage: React.FC<IPage & RouteComponentProps<RouteProps>> = (
  props
) => {
  const [name, setName] = useState<string>("loading");
  const [message, setMessage] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const history = useHistory<HistoryState>();

  useEffect(() => {
    console.log("did mount, " + history.location.search);
    setName(props.name);
    history.listen((e) => {
      if (history.action === "POP" && history.location.state) {
        direct = false;
        console.log(history.location.state);
        setNumber(history.location.state.number);
      }
    });
  }, []);

  return (
    <div>
      <Snackbar />
      <h1>{name}</h1>
      <p>{message}</p>
      <Link to="/">to the HomePage, number={number}</Link>
      <button
        onClick={() => {
          history.push({
            pathname: "/about",
            search: "number=" + number,
            state: { number: number + 1 },
          });
          setNumber(number + 1);
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default withRouter(AboutPage);
