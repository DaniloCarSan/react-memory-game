import styles from 'styled-components';

export const Container = styles.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Info = styles.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 768px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styles.a`
    display:block;
`;

export const InfoArea = styles.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

`;

export const GridArea = styles.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
   
    @media (max-width: 768px) {
        justify-content: center;
        margin: 0 20px;
    }

`;