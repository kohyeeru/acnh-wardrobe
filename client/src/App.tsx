import React from 'react';
import styled from 'styled-components';
import CategoryNavBar from './components/CategoryNavBar/CategoryNavBar';

const Wrapper = styled.div`
  margin-top: 24px;
`

interface IState {
  data: any;
}

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <Wrapper>
        <CategoryNavBar />
      </Wrapper>
    );
  }
}

export default App;
