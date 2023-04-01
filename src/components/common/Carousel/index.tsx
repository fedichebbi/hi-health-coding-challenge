import { useState } from "react";
import styled from "styled-components";
import { CarouselItem } from "../../../interfaces";
import Stepper from "./Stepper";
import Typography from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

// as assets do not have the same proportions, a container will ensure they are displayed equally
const ImageContainer = styled(Container)`
  height:auto;
  max-width: 150px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 300px;
`;

interface CarouselProps {
  items: CarouselItem[]
}
const Carousel: React.FC<CarouselProps> = (props) => {
  const { items } = props
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  function handleClick() {
    const nextStep = (currentStep + 1) % 4
    setCurrentStep(nextStep)
  }

  const currentItem = items[currentStep]

  return (
    <Container onClick={handleClick}>
      <ImageContainer >
        <Image src={currentItem?.image} />
      </ImageContainer>
      <Stepper currentStep={currentStep} onChange={setCurrentStep} />
      <Typography fontSize="24px" lineHeight="32px" letterSpacing="1.5px" marginBottom="20px" >{currentItem?.name}</Typography>
      <Typography fontSize="16px" lineHeight="20px" letterSpacing="0.35px" height="100px">{currentItem?.description}</Typography>
    </Container>
  )
}

export default Carousel