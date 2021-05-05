import React, { useState } from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { ErrorBoundary } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {

  return (
    <Container className="App">
      <h1>Hello World</h1>
    </Container>
  );
};

export default App;
