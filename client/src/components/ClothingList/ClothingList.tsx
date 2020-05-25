import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Categories } from '../../constants/categoryEnums';

const ClothingItemsList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 300px auto auto auto;
`

// TODO: change to component that has an active and on hover mode
// TODO: introduce random rotation for each clothing item
const ClothingItem = styled.img`
  width: 100%;
`

interface IProps {
  currentCategory?: Categories;
}

interface IState {
  clothingList: Object[];
}

class ClothingList extends React.Component<IProps, IState> {
  public static defaultProps = {
    currentCategory: Categories.TOPS,
  }

  constructor(props: IProps) {
    super(props);

    this.state = {
      clothingList: [],
    }
  }

  componentDidMount() {
    const { currentCategory } = this.props;
    if (currentCategory) {
      this.retrieveClothing(currentCategory);
    }
  }

  public retrieveClothing(category: Categories) {
    axios.get(`${process.env.REACT_APP_API_URL}/${category}`)
      .then((res) => this.setState({ clothingList: res.data }))
      .catch((err) => console.log(err));
  }

  public render() {
    const { clothingList } = this.state;

    return(
      <ClothingItemsList>
        {clothingList.map((clothing: any, index: any) => {
          const isThirdElementOnLeftColumn = (index - 3) % 6 === 0;
          if (isThirdElementOnLeftColumn) {
            return (
              <React.Fragment key={index}>
                <div>&nbsp;</div>
                <ClothingItem
                  alt={clothing.name}
                  src={clothing.storageImageUrl}
                />
              </React.Fragment>
            );
          } else {
            return (
              <ClothingItem
                key={index}
                alt={clothing.name}
                src={clothing.storageImageUrl}
              />
            );
          }
        })}
      </ClothingItemsList>
    );
  }
}

export default ClothingList;
