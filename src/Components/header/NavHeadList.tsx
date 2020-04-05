import styled from "styled-components";

const NavHeadList = styled.ul`
    display: grid;
    list-style-type: none;
    text-align: center;
    grid-template-columns: 300px 150px 150px 150px 150px auto;
    background-color: whitesmoke;
    cursor: pointer;
    
    /* padding setting */
    padding-left    : 10px;
    padding-right   : 10px;
    font-size       : 150%;

    .title {
        text-align: left;
        background-color: #1abc9c;
        color: whitesmoke;
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

export default NavHeadList;