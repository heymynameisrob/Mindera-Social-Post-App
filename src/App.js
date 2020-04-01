import React from 'react';
import styled from 'styled-components';
import { Grid } from './components/Layout';
import { Canvas } from './components/Canvas';

const App = () => {
  return <StyledContainer>
    <Grid cols="8">
      <aside span="3">
        <p>Panel</p>
      </aside>
      <main span="5">
        <Canvas />
      </main>
    </Grid>
  </StyledContainer>
}

export default App;

const StyledContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow:column nowrap;
  height:100%;
  max-width:60rem;
  padding:0 var(--spacing-sm);
  margin:0 auto;
`