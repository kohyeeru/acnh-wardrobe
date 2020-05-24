import React from 'react';
import styled from 'styled-components';
import { Categories } from '../../constants/categoryEnums';
import CategoryNavBarIcon from './CategoryNavBarIcon';

//TODO: add keyboard support to cycle through the categories

const NavBar = styled.div`
  display: flex;
  width: min-content;

  & > :not(:first-child) {
    margin-left: -8px;
  }
`

interface IState {
  activeCategory: Categories;
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

class CategoryNavBar extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      activeCategory: Categories.TOPS,
    }
  }

  public setActiveCategory(category: Categories) {
    this.setState({ activeCategory: category })
  }

  public render() {
    const { activeCategory } = this.state;

    return (
      <NavBar>
        {categories.map((category) => {
            return <CategoryNavBarIcon
              key={category}
              onClick={() => this.setActiveCategory(category)}
              isActive={category === activeCategory}
            />
          }
        )}
      </NavBar>
    );
  }
}

export default CategoryNavBar;
