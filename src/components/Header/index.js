import { Container, Title, Menu, MenuContainer, backgroundImage,Logo } from './styles'
import Link from 'next/link'

function Header() {
    return <Container>

        <Logo src='/Logo.png'></Logo>

        <Title>The<br></br> Polyglots</Title>
        <MenuContainer>
        <Link target="_blank" href='https://www.duolingo.com/' > 
        <Menu>DuoLingu</Menu>
        </Link>
        <a href='https://www.duolingo.com/'
      target="_blank" className="bold" >
          Feed
      
      </a>
        <Link href='/https://www.internetpolyglot.com/' >
        <Menu target="_blank" >Internet Poliglot</Menu>
        </Link>
        <Link href='https://www.ankiweb.net/'> 
        <Menu>Anki</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Japanese</Menu>
        </Link>
    
</MenuContainer>


        
           </Container>
}

export default Header