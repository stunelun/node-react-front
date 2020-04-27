import styled from "styled-components";

const NavColListCss = styled.ul`
    list-style-type: none;
    display: grid;
    
    /* ul margin,padding clear */
    margin: 0; padding: 0;

    text-align: center;
    font-size: 30px;
    grid-template-columns: 300px;
    background-color: whitesmoke;
    cursor: pointer;

    li {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
        &:hover{
        background-color: #4CAF50;
        }
    }

    li.title{
        text-align: center;
        background-color: darkseagreen;
        cursor: text;
        &:hover{
        background-color: darkseagreen;
        }
    }
`
export default NavColListCss;