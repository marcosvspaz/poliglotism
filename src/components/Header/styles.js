import styled from 'styled-components'


export const Container = styled.div`
 top: 0;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 300;
    font-family: poppins light,sans-serif;
    font-size: 12px;
    position: fixed;
    min-height: 59px;
    text-align: center;
    width: 100%;
    flex-wrap: wrap;
    z-index: 4;
    transition: background-color .3s ease;
    will-change: transform;
`

export const backgroundImage = styled.img`
     content: '';
    background-image: linear-gradient(
180deg
,rgba(0,0,0,.8) 0,transparent 50%,transparent 90%,rgba(0,0,0,.8));
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    will-change: transform;
`


export const MenuContainer = styled.div`
    text-align: center;
    flex: 1;
    order: 2;
    flex-basis: 100%;
    transition: background-color .3s ease;
`


export const Menu = styled.a`
transition: color .3s ease-in-out;
    color: #e2e6e7;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 300;
    letter-spacing: 1.2px;
    font-size: 12px;
    padding: 14px 11px;
@media(max-width: 654px) {
    transition: color .3s ease-in-out;
    color: #e2e6e7;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 300;
    letter-spacing: 1.2px;
    font-size: 12px;
    padding: 14px 11px;
 }
`
export const P = styled.p`
font-size:10;
display: inline-block;
text-align: center;
`



export const Title = styled.div`
transition: opacity .3s ease-in-out;
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    text-decoration: none;
    letter-spacing: 2px;
    padding: 20px 30px;
    text-align: center;
    font-family: neuzeit grotesk bold,sans-serif;
@media(max-width: 654px) {
    padding: 20px 52px;
 }
`