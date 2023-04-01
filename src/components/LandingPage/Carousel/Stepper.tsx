
import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const Container = styled.div`
display: flex;
margin-top: 4rem;
margin-bottom:4rem;
`

interface StepperProps {
    currentStep: number;
    onChange: (step: number) => void
}

const Stepper: React.FC<StepperProps> = (props) => {
    const { currentStep, onChange } = props

    function handleStepClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
        e.stopPropagation()
        onChange(index)
    }

    return (
        <Container>
            {Array.from({ length: 4 }).map((_, index) => (
                <Step key={index} selected={currentStep === index} onClick={(e) => handleStepClick(e, index)} />
            ))}
        </Container>
    )
}

export default Stepper;
