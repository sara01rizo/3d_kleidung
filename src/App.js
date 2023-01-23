import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Banner from './components/Banner.js'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Banner />
        <Container>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App