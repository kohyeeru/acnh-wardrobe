import React from 'react';
import styled from 'styled-components';
import { Categories } from './constants/categoryEnums';
import { Outfit } from './constants/outfitTypes';
import CategoryNavBar from './components/CategoryNavBar/CategoryNavBar';
import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay';

const Wrapper = styled.div`
  padding: 24px;
`

interface IState {
  outfit: Outfit;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      outfit: {},
    }
  }

  // TODO: amend to require only clothing name after library of clothing is created
  public setOutfit(category: Categories, clothingName: string, imageURL: string, top: string, left: string) {
    const { outfit } = this.state;
    
    let newOutfit:Outfit = {};
    newOutfit = Object.assign(newOutfit, outfit);
    newOutfit[category] = {
      name: clothingName,
      imageURL,
      top,
      left,
    }

    this.setState({ outfit: newOutfit });
  }

  public render() {
    const { outfit } = this.state;

    return (
      <Wrapper>
        <CategoryNavBar />
        <CharacterDisplay
          outfit={outfit}
        />
      </Wrapper>
    );
  }
}

export default App;
