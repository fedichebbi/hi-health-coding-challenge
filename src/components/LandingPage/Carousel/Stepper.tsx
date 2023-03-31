
import React from 'react';
import styled from 'styled-components';
import Step from './Step';

interface StepperProps {
    currentStep: number;
    onChange: (step: number) => void
}

const Stepper: React.FC<StepperProps> = (props) => {
    const { currentStep, onChange } = props


    const Container = styled.div`
        display: flex;
        margin-top: 4rem;
        margin-bottom:4rem;
    `

    return (
        <Container>
            {Array.from({ length: 4 }).map((_, index) => (
                <Step key={index} selected={currentStep === index} onClick={() => onChange(index)} />
            ))}
        </Container>
    )
}

export default Stepper;
