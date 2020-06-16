import styled from "styled-components";

const NavColListCss = styled.ul`
    height : 600px;
    overflow-y : scroll;
    list-style-type: none;
    display: grid;

    margin: 0; padding: 0;

    text-align: center;
    font-size: 30px;
    background-color: whitesmoke;
    cursor: pointer;

    li {
        height : 5vh;
        display: block;
        padding: 0px 0px;
        &:hover{
            background-color: #4CAF50;
        }

        a {
            color: #000;
            text-decoration: none;
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