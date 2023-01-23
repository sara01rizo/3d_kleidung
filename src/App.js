import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Banner from './components/Banner'
import Card from './components/Card'
import content from './content'

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
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App