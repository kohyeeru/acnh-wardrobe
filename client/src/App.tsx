import React from 'react';
import CategoryNavBar from './components/CategoryNavBar/CategoryNavBar';

interface IState {
  data: any;
}

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <CategoryNavBar />
    );
  }
}

export default App;
