
import styled from "styled-components";

const NavHeadListCss = styled.ul`
    display: grid;
    background-color: #3498db;
    grid-template-columns: 300px 150px 150px 150px 150px auto;
    cursor: pointer;

    margin-block-start: 0px;
    margin-block-end: 0px;

    list-style-type: none;
    
    text-align: left;
    text-indent:10px;
    
    

    /* padding setting */
    /* padding: none; */
    padding-left    : 0px;
    padding-right   : 0px;
    font-size       : 150%;

    .title {
        text-align: center;
        background-color: #1abc9c;
        color: whitesmoke;
    }

    li a {
            display: block;
            color: #000;
            text-decoration: none;
            &:hover{
                color: whitesmoke;
            }
            
            
    }
`

export default NavHeadListCss;