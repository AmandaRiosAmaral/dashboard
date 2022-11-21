import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* MN = Menu
* CT = Content
*/

export const Grid = styled.div`

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    'MN MH'
    'MN CT';

    height: 100vh;
`;