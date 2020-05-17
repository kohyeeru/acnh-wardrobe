import React from 'react';
import axios from 'axios';

interface IState {
  data: any;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    // TODO For API testing only, need to remove and/or amend below
    axios.get(`${process.env.REACT_APP_API_URL}/Headwear`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  public render() {
    return (
      <ul>
        {this.state.data.map((e: any, index: any) => <li key={index}>{e.name}</li>)}
      </ul>
    );
  }
}

export default App;
