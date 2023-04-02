import { useState } from "react";
import styled, { keyframes } from "styled-components";
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// as assets do not have the same proportions, a container will ensure they are displayed equally
const ImageContainer = styled(Container)`
  height:auto;
  max-width: 150px;
  overflow: hidden;
  height: 300px;
`;

const Image = styled.img`
  height: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

interface CarouselProps {
  items: CarouselItem[];
}
const Carousel: React.FC<CarouselProps> = (props) => {
  const { items } = props
  const [currentStep, setCurrentStep] = useState(0)

  function handleClick() {
    // use % to ensure the step gets back to 0 when it reaches steps length
    // eg: 3 % 4 = 3 but 4 % 4 = 0
    const nextStep = (currentStep + 1) % items.length
    setTimeout(() => setCurrentStep(nextStep), 200)
  }

  const currentItem = items[currentStep]

  return (
    <Container onClick={handleClick}>
      <ImageContainer >
        {currentItem?.image && <Image src={currentItem.image} />}
      </ImageContainer>
      <Stepper isLoading={!currentItem} stepsLength={items.length || 4} currentStep={currentStep} onChange={setCurrentStep} />
      <Typography fontSize="24px" lineHeight="32px" letterSpacing="1.5px" marginBottom="20px" height="32px">{currentItem?.name}</Typography>
      <Typography fontSize="16px" lineHeight="20px" letterSpacing="0.35px" height="100px" width="60%">{currentItem?.description}</Typography>
    </Container>
  )
}

export default Carousel