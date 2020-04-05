import styled from "styled-components";

const ChartDataList = styled.li`
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: greenyellow;

    li a {
        display: grid;
        color: #000;
        padding-left: 10px;
        text-decoration: none;
    }
`

export default ChartDataList;