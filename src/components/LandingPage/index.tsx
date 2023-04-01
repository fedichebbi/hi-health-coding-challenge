import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CarouselItem } from '../../interfaces'
import { getDogBreedByName } from '../../services'
import Carousel from '../common/Carousel'
import BreedsList from './BreedsList'

const Container = styled.div`
    display: flex;
    background: #F7F8FA;
    @media (max-width: 768px) {
        flex-direction: column-reverse
    }
`

const ContentContainer = styled.div<{ background?: string }>`
    flex: 1;
    ${props => props.background && `background: ${props.background};`};
    min-height: 100vh;
`

const LandingPage: React.FC = () => {
    const [breeds, setBreeds] = useState<CarouselItem[]>([])

    const fetchBreedsData = async () => {
        try {
            const _breeds = await Promise.all(BreedsList.map(async (breed) => {
                const breedDetails = await getDogBreedByName(breed.name)
                return { ...breed, description: breedDetails?.temperament }
            }))

            // timeout is not necessary but used to highlight the loading animation
            setTimeout(() => setBreeds(_breeds), 3000)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchBreedsData()
    }, [])

    return (
        <Container>
            <ContentContainer />
            <ContentContainer background='white'>
                <Carousel items={breeds} />
            </ContentContainer>
        </Container>
    )
}

export default LandingPage
