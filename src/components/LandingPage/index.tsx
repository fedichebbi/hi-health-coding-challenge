import styled from 'styled-components'
import Carousel from './Carousel'

const LandingPage: React.FC = () => {

    const Container = styled.div`
        display: flex;
        background: lightgrey;
        height: 100vh;
        @media (max-width: 768px) {
            flex-direction: column
          }
    `

    const ChildContainer = styled.div<{ background?: string }>`
    flex: 1;
    ${props => props.background && `
    background: ${props.background};
  `};
`

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