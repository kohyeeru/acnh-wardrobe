import React from 'react';
import styled from 'styled-components';
import { Categories } from '../../constants/categoryEnums';
import { Outfit } from '../../constants/outfitTypes';
import CharacterDefaultSrc from '../../assets/character_default.png';

// TODO: change width and height to be responsive
const Wrapper = styled.div`
  position: relative;
  width: 350px;
  height: 450px;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const BackgroundShadow = styled.div`
  background: #efdef0;
  width: 100%;
  height: 100%;
  clip-path: polygon(1% 4%, 96% 1%, 100% 96%, 8% 100%);
`

const BackgroundCard = styled.div`
  background-color: #f9f8af;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fbf9d4' fill-opacity='0.95'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  height: 100%;
  clip-path: polygon(0 6%, 90% 0, 98% 90%, 10% 96%);
`

const CharacterDefaultImage = styled.img`;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
`

interface IProps {
  outfit: Outfit
}

class CharacterDisplay extends React.Component<IProps> {
  public render() {
    const { outfit } = this.props;

    return(
      <Wrapper>
        <BackgroundShadow />
        <BackgroundCard />
        
        <CharacterDefaultImage alt='character default' src={CharacterDefaultSrc} />
        {Object.keys(outfit).map(key => {
            const clothing = outfit[key as Categories];
            if (clothing) {
              return (
                // TODO: return clothing as a component that can set top and left values
                <img
                  key={clothing.name}
                  alt={clothing.name}
                  src={clothing.imageURL}
                />
              )
            }
            else {
              return '';
            }
          })
        }
      </Wrapper>
    );
  }
}

export default CharacterDisplay;
