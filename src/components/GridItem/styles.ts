import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
};

export const Container = styled.div<ContainerProps>`
    background: ${(props) => props.showBackground ? "#1550ff" : "#e2e3e3"};
    height: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
};

export const Icon = styled.img<IconProps>`
    width: 50px;
    height: 50px;
    opacity: ${(props) => props.opacity ?? 1};
`;