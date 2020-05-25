import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Categories } from '../../constants/categoryEnums';
import ClothingItem from './ClothingItem';

const ClothingItemsList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 300px auto auto auto;
  grid-gap: 24px;
`

interface IProps {
  currentCategory: Categories;
}

interface IState {
  clothingList: Object[];
}

class ClothingList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      clothingList: [],
    }
  }

  componentDidMount() {
    const { currentCategory } = this.props;
    this.retrieveClothing(currentCategory);
  }

  componentDidUpdate(prevProps: IProps) {
    const { currentCategory } = this.props;
    if (currentCategory !== prevProps.currentCategory) {
      this.retrieveClothing(currentCategory)
    }
  }

  public retrieveClothing(category: Categories) {
    if (category === Categories.DRESSES) {
      category = Categories.DRESSUP;
    }

    // TODO: specify the type for a and b
    axios.get(`${process.env.REACT_APP_API_URL}/${category}`)
      .then((res) => {
        this.setState({ clothingList: res.data.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
         )})
      })
      .catch((err) => console.log(err));
  }

  // TODO: specify type for clothing
  // TODO: implement isActive logic for clothing item
  public render() {
    const { clothingList } = this.state;

    return(
      <ClothingItemsList>
        {clothingList.map((clothing: any, index: number) => {
          const isThirdElementOnLeftColumn = (index - 3) % 6 === 0;
          if (isThirdElementOnLeftColumn) {
            return (
              <React.Fragment key={index}>
                <div>&nbsp;</div>
                <ClothingItem
                  clothing={clothing}
                  isActive={false}
                />
              </React.Fragment>
            );
          } else {
            return (
              <ClothingItem
                key={index}
                clothing={clothing}
                isActive={false}
              />
            );
          }
        })}
      </ClothingItemsList>
    );
  }
}

export default ClothingList;
