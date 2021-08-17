import { PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import IPage from "../interface/page";
import { useSnackBar } from "./hook";

const HomePage: React.FC<IPage> = (props) => {
  const [name, setName] = useState<string>("loading");
  useEffect(() => {
    setName(props.name);
  }, []);

  const snackbar = useSnackBar();

  const onClick = () => {
    snackbar.open({
      anchorOrigin: { vertical: "top", horizontal: "center" },
      message: "I love hook",
      onClose: () => snackbar.close(),
      autoHideDuration: 2000,
    });
  };

  return (
    <div>
      <h1>{name}</h1>
      <PrimaryButton onClick={onClick}>open snackbar</PrimaryButton>
    </div>
  );
};

export default HomePage;
