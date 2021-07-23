import styled from 'styled-components';

export const Bateria = styled.section`
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        div {
            width: 80px;
            height: 80px;
            border: 2px solid #fff;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-weight: bold;
        }
    }

    .active {
        border: 2px solid #ff0;
        color: #ff0;
    }
`;

export const Composer = styled.section`
    width: 260px;
    margin-top: 20px;

    input {
        width: 100%;
        outline: none;
        font-size: 17px;
        padding: 10px 15px;
    }

    button {
        width: 100%;
        height: 40px;
        background: none;
        border: 2px solid #fff;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: #000;
        }
    }
`;
