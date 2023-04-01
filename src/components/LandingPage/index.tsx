import styled from 'styled-components'
import Carousel from './Carousel'

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

    return (
        <Container>
            <ChildContainer />
            <ChildContainer background='white'>
                <Carousel />
            </ChildContainer>
        </Container>
    )
}

export default LandingPage