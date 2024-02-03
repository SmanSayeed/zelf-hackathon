import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <>
    <Link to="/main">
      <Button>Sign in</Button>
    </Link>
     
    </>
  );
}
