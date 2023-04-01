import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CarouselItem } from '../../interfaces'
import { getDogBreedByName } from '../../services'
import Carousel from '../common/Carousel'
import BreedsList from './BreedsList'

const Container = styled.div`
    display: flex;
    background: lightgrey;
    @media (max-width: 768px) {
        flex-direction: column-reverse
    }
`

const ChildContainer = styled.div<{ background?: string }>`
    flex: 1;
    ${props => props.background && `background: ${props.background};`};
    min-height: 100vh;
`

const LandingPage: React.FC = () => {

    const [breeds, setBreeds] = useState<CarouselItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const _breeds = await Promise.all(BreedsList.map(async (breed) => {
                const breedDetails = await getDogBreedByName(breed.name)
                return { ...breed, description: breedDetails[0]?.temperament }
            }))
            setBreeds(_breeds)
        }
        fetchData()
    }, [])

    return (
        <Container>
            <ChildContainer />
            <ChildContainer background='white'>
                <Carousel items={breeds} />
            </ChildContainer>
        </Container>
    )
}

export default LandingPage