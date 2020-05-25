import React from 'react';
import styled from 'styled-components';

// TODO: change to component that has an active and on hover mode
// TODO: introduce random rotation for each clothing item
const PreviewImage = styled.img`
  width: 100%;
`

interface IProps {
  // TODO: specify type for clothing
  clothing: any;
  isActive: boolean;
}

class ClothingItem extends React.Component<IProps> {
  public render() {
    const { clothing } = this.props;

    return(
      <PreviewImage alt={clothing.name} src={clothing.storageImage}/>
    );
  }
}

export default ClothingItem;
