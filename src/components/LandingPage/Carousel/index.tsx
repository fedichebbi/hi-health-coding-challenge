import { useState } from "react";
import styled from "styled-components";
import Stepper from "./Stepper";
import Typography from "./Typography";

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:100%;
`

const Image = styled.img`

`

const Carousel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)

  function handleClick() {
    const nextStep = (currentStep + 1) % 4
    setCurrentStep(nextStep)
  }

  return (
    <Container onClick={handleClick}>
      <Image src='/assets/Dog1.svg' />
      <Stepper currentStep={currentStep} onChange={setCurrentStep} />
      <Typography fontSize="24px" lineHeight="32px" letterSpacing="1.5px" marginBottom="20px" >Dogs are extremely cute animals</Typography>
      <Typography fontSize="16px" lineHeight="20px" letterSpacing="0.35px" >Lorem ipsum tagada lorem ipsum tagada</Typography>
    </Container>
  )
}

export default Carousel