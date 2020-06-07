import React from 'react';
import styled from 'styled-components';
import { Categories } from '../../constants/categoryEnums';
import CategoryNavBarIcon from './CategoryNavBarIcon';

//TODO: add keyboard support to cycle through the categories

const NavBar = styled.div`
  display: flex;
  width: min-content;

  & > :not(:first-child) {
    margin-left: -12px;
  }
`

interface IProps {
  currentCategory: Categories;
  setCurrentCategory: (category: Categories) => void;
}

const categories = [
  Categories.TOPS,
  Categories.BOTTOMS,
  Categories.DRESSES,
  Categories.HEADWEAR,
  Categories.ACCESSORIES,
  Categories.SOCKS,
  Categories.SHOES,
  Categories.BAGS,
];

class CategoryNavBar extends React.Component<IProps> {
  public render() {
    const { currentCategory, setCurrentCategory } = this.props;

    return (
      <NavBar>
        {categories.map((category) => {
            return <CategoryNavBarIcon
              key={category}
              category={category}
              onClick={() => setCurrentCategory(category)}
              isActive={category === currentCategory}
            />
          }
        )}
      </NavBar>
    );
  }
}

export default CategoryNavBar;
