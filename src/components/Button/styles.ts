import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background: #1550ff;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.3s;

    &:hover {
        opacity: 0.6;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 15px;
`;

export const Icon = styled.img``;

export const Label = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    color: #fff;
    flex: 1;
    font-weight: bold;
    margin-left: 14px;
`;