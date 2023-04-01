import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const Container = styled.div`
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
`

interface StepperProps {
    stepsLength: number;
    currentStep: number;
    onChange: (step: number) => void;
    isLoading?: boolean;
}

const Stepper: React.FC<StepperProps> = (props) => {
    const { stepsLength, currentStep, onChange, isLoading = false } = props;

    function handleStepClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
        e.stopPropagation()
        onChange(index)
    }

    return (
        <Container>
            {Array.from({ length: stepsLength }).map((_, index) => (
                <Step
                    key={index}
                    index={index}
                    selected={currentStep === index}
                    onClick={(e) => handleStepClick(e, index)}
                    isLoading={isLoading}
                    marginRight= {index !== stepsLength ? '1rem': '0'}
                />
            ))}
        </Container>
    )
}

export default Stepper;
