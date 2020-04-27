
import styled from "styled-components";

const NavHeadListCss = styled.ul`
    display: grid;
    margin-block-start: 0px;
    margin-block-end: 0px;

    list-style-type: none;
    text-align: center;
    grid-template-columns: 300px 150px 150px 150px 150px auto;
    background-color: whitesmoke;
    cursor: pointer;

    /* padding setting */
    padding-left    : 0px;
    padding-right   : 0px;
    font-size       : 150%;
    

    .title {
        text-align: left;
        background-color: #1abc9c;
        color: whitesmoke;
        text-indent: 10px;
    }

    li a {
            display: block;
            color: #000;
            padding-left: 10px;
            text-decoration: none;
            &:hover{
            background-color: #3498db;
            }
    }
`

export default NavHeadListCss;