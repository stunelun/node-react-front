
import styled from 'styled-components';

const textColor = {
    color: "black"
}

const onTextColor = {
    onTitle: "item1",
    onColor: ""
}

export const setTextColor = (onTitle: string, onColor: string) => {
    onTextColor.onTitle = onTitle;
    onTextColor.onColor = onColor;
}


const NavHeadListCss = styled.ul`
    display: grid;
    background-color: #3498db;
    grid-template-columns: 300px 150px 150px 150px 150px auto;
    cursor: pointer;

    margin-block-start: 0px;
    margin-block-end: 0px;

    list-style-type: none;

    text-align: left;
    text-indent: 10px;

    /* padding setting */
    padding-left: 0px;
    padding-right: 0px;
    font-size: 150%;

    .title {
        text-align: center;
        background-color: #1abc9c;
        color: whitesmoke;
    }

    li a {
        display: block;
        color: ${() => textColor.color};
        text-decoration: none;
        &:hover {
            color: whitesmoke;
        }
    }

    .${onTextColor.onTitle} {
        color: ${() => onTextColor.onColor};
    }
`

export default NavHeadListCss;