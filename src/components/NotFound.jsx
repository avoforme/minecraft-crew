import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
      <Link style={{ color: "white" }} to="/">
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;