import React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const TooltipWrapper = styled.div<{ size: string }>`
  position: absolute;
  left: 50%;
  bottom: 85%;
  transform: translateX(-50%);
  z-index: 99;
  font-size: ${ifProp({ size: 'small' }, '12px', '16px')}
`

const Bubble = styled.div<{ fontColor: string, backgroundColor: string, borderRadius: string, size: string, showArrow: boolean }>`
  display: inline-block;
  position: relative;
  background: #${prop('backgroundColor')};
  color: #${prop('fontColor')};
  padding: ${ifProp({ size: 'small' }, '3px 8px', '8px')};
  border-radius: ${prop('borderRadius')}px;

  ${ifProp('showArrow', css`
    &::after {
      content: '';
      position: absolute;
      bottom: -0.3em;
      left: 50%;
      transform: translateX(-50%);
      border-top: 0.5em solid #${prop('backgroundColor')};
      border-right: 0.5em solid transparent;
      border-left: 0.5em solid transparent;
    }
  `)}
`

interface IProps {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: string;
  size:
    | 'small'
    | 'large';
  showArrow: boolean;
}

class Tooltip extends React.Component<IProps> {
  public render() {
    const { text, fontColor, backgroundColor, borderRadius, size, showArrow } = this.props;
    
    return(
      <TooltipWrapper size={size}>
        <Bubble
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          size={size}
          showArrow={showArrow}
        >
          {text}
        </Bubble>
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
