import { StyledBanner, Nav, Logo, Image } from './styles/Banner.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Banner() {
  return (
    <StyledBanner>
      <Container>
        <Nav>
          <Logo src='./images/3d_rings.jpg' alt='Rings' />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>3D Kleigund More Fun, Love and Tech in your life</h1>

            <p>
              3D Kleidung re-imagines the way we live our life. The time to wareing,
              but no the same like always. Create more dreams and be part of the community
              you engage in genuine for us.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Let's try For Free
            </Button>
          </div>

          <Image src='./images/3d_circule' alt='circule' />
        </Flex>
      </Container>
    </StyledBanner>
  )
}