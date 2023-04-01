import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDogBreedByName } from "../../../services";
import BreedsList from "./BreedsList";
import Stepper from "./Stepper";
import Typography from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:100%;
`;

const ImageContainer = styled(Container)`
  height:auto;
  max-width: 150px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 300px;
`;

const Carousel: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [breeds, setBreeds] = useState<{ name: string, image: string, temperament: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const _breeds = await Promise.all(BreedsList.map(async (breed) => {
        const breedDetails = await getDogBreedByName(breed.name)
        return { ...breed, temperament: breedDetails[0]?.temperament }
      }))
      setBreeds(_breeds)
    }
    fetchData()
  }, [])


  function handleClick() {
    const nextStep = (currentStep + 1) % 4
    setCurrentStep(nextStep)
  }

  const currentBreed = breeds[currentStep]

  return (
    <Container onClick={handleClick}>
      <ImageContainer >
        <Image src={currentBreed?.image} />
      </ImageContainer>
      <Stepper currentStep={currentStep} onChange={setCurrentStep} />
      <Typography fontSize="24px" lineHeight="32px" letterSpacing="1.5px" marginBottom="20px" >{currentBreed?.name}</Typography>
      <Typography fontSize="16px" lineHeight="20px" letterSpacing="0.35px" height="100px">{currentBreed?.temperament}</Typography>
    </Container>
  )
}

export default Carousel