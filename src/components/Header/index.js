import { Container, Title, Menu, MenuContainer, backgroundImage } from './styles'
import Link from 'next/link'


function Header() {
    return <Container>

    
        <Title>The Polyglots</Title>
        <MenuContainer>
        <Link href='/'> 
        <Menu>DuoLingu</Menu>
        </Link>
    
        <Link href='/https://www.internetpolyglot.com/'> 
        <Menu>Internet Poliglot</Menu>
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