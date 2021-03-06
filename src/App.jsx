import React from 'react';
import { Route } from 'react-router-dom';
import styled from "styled-components"
import {
  Main,
  Docs090,
} from './pages/index';

const Wrapper = styled.div`
  width:100%;
  min-height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Route exact path="/" component={Main} />
      <Route exact path="/docs/0.9.0" component={Docs090} />
    </Wrapper>
  );
};

export default App;
