import styled, { keyframes } from "styled-components";

interface StepProps {
    index: number;
    selected?: boolean;
    isLoading?: boolean;
    marginRight?: string;
}

const pulse = keyframes`
  from {
    width: 5px;
    height: 5px;
    background-color: #A3BED5;
  }

  50% {
    width: 8px;
    height: 8px;
    background-color: #FF9986;
  }

  to {
    width: 5px;
    height: 5px;
    background-color:#A3BED5;
  }
`;


const Step = styled.div<StepProps>`
    position: relative;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: 2px solid ${props => !props.isLoading && props.selected ? '#FF9986' : 'transparent'};
    margin-right: ${props => props.marginRight ?? '0'};
    cursor:${props => !props.isLoading ? 'pointer' : 'default'};

    &:hover {
        border-color:  ${props => !props.isLoading ? '#FF9986' : 'transparent'};
        transition: border-color 0.2s ease-in-out;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color:  ${props => !props.isLoading && props.selected ? '#FF9986' : '#A3BED5'};
        animation: ${pulse} ${props => props.isLoading ? '1s' : '0s'} ease-in-out infinite;
        animation-delay: ${props => props.index * 0.25}s;
    }
`;

export default Step;
