import { Container, Title, Menu, MenuContainer, backgroundImage } from './styles'
import Link from 'next/link'


function Header() {
    return <Container>

    
        <Title>Poliglotism</Title>
        <MenuContainer>
        <Link href='/'> 
        <Menu>DuoLingu</Menu>
        </Link>
    
        <Link href='/https://www.internetpolyglot.com/'> 
        <Menu>Internet Poliglot</Menu>
        </Link>
        <Link href='/apoiase'> 
        <Menu>English</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Japanese</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Italian</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Corean</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Spanish</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Chinese</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Germany</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>French</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Russian</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Arabic</Menu>
        </Link>
        <Link href='/sobre'> 
        <Menu>Swedish</Menu>
        </Link>
</MenuContainer>


        
           </Container>
}

export default Header