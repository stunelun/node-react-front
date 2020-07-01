import styled from "styled-components";

const size = {
    footerTextWidth: (window.screen.width) /3
}

const FooterDataList = styled.ul`
    font-size : 15px;
    display: grid;
    grid-template-columns: ${size.footerTextWidth}px ${size.footerTextWidth}px ${size.footerTextWidth}px;
    background-color: whitesmoke;

    li {
        display: grid;
        padding: 0px;
        grid-template-columns: auto auto;
    }
    
    div {
        display: grid;
        padding: 10px;
        grid-template-columns: auto auto;
        p {
            text-align: left;
        }
    }
`
 
export default FooterDataList;