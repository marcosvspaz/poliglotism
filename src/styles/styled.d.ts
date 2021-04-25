import 'styled-components'


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
    
    colors: 
        {
        primary: string;
        secundary: string;
        color1: string;
        color2: string;
        color3: string;

        background: string;
        text: string;
        }
    }
}