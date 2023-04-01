import styled from "styled-components";

interface StepProps {
    selected?: boolean
}

const Step = styled.div<StepProps>`
    position: relative;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: 2px solid ${props => props.selected ? '#FF9986' : 'transparent'};
    margin-right:1rem;
    cursor:pointer;

    &:hover {
        border-color: #FF9986
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
        background-color:  ${props => props.selected ? '#FF9986' : '#A3BED5'};
        }
    `;

export default Step;