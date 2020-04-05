import styled from "styled-components";

const NavColList = styled.ul`
    list-style-type: none;
    display: grid;
    
    /* ul margin,padding clear */
    margin: 0; padding: 0;

    text-align: center;
    font-size: 30px;
    grid-template-columns: 300px;
    background-color: whitesmoke;
    cursor: pointer;

    li.title{
        text-align: center;
        background-color: darkseagreen;
        cursor: text;
    }
    li a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
        &:hover{
        background-color: #4CAF50;
        }
    }
`
export default NavColList;