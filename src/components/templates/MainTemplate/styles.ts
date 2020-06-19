import styled from 'styled-components'

const Div = styled.div `
    border: 1px solid black;
`


export const Container = styled(Div)`
    display: grid;
    grid-template-columns: 200px minmax(1024px, auto);
    grid-template-rows: auto 100vh;
    grid-template-areas:
        "name       topMenu"
        "sideMenu   main";
`;
export const NameDiv = styled(Div)`
    grid-area: name;
`
export const TopMenuDiv = styled(Div)`
    grid-area: topMenu;
`
export const SideMenuDiv = styled(Div)`
    grid-area: sideMenu;
`
export const MainDiv = styled(Div)`
    grid-area: main;
`
