import React from 'react';
import styled from 'styled-components';
import { Categories } from './constants/categoryEnums';
import { Outfit } from './constants/outfitTypes';
import CategoryNavBar from './components/CategoryNavBar/CategoryNavBar';
import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay';
import ClothingList from './components/ClothingList/ClothingList';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: #f9eff0;
`

const CategoryNavBarWrapper = styled.div`
  position: relative;
  width: min-content;
  padding-top: 6vh;
  margin: 0 auto;
  z-index: 1;
`

const CharacterDisplayWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
`

const ClothingListWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 90vw;
  height: calc(100% - 150px);
  padding-top: 150px;
  overflow: scroll;
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
        <CategoryNavBarWrapper>
          <CategoryNavBar />
        </CategoryNavBarWrapper>
        <CharacterDisplayWrapper>
          <CharacterDisplay
            outfit={outfit}
          />
        </CharacterDisplayWrapper>
        <ClothingListWrapper>
          <ClothingList />
        </ClothingListWrapper>
      </Wrapper>
    );
  }
}

export default App;
