import styled from "styled-components"
import * as styleVars from "../variable"
import headerImage from '../../assets/images/designs/mchacks12-header.svg';


export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .background {
        position: absolute;
        margin-top: 3.4vh;
        width: 100%;
        height: 20vh;
        background-image: url(${headerImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: opacity 0.5s ease-in-out;
        opacity: ${(props) => (props.$scrolled ? 0 : 1)};
        z-index: -1;
    }

    @media only screen and (max-width: 1450px) {
        .background {
            margin-top: 1.5vh;
            width: 100%;
            height: 20vh;
        }
    }

    @media only screen and (max-width: ${styleVars.lgUp}) {
        .background {
            margin-top: 5vh;
            width: 100%;
            height: 10vh;
        }
    }

    @media only screen and (max-width: ${styleVars.mdUp}) {
        .background {
            margin-top: 4.8vh;
            width: 100%;
            height: 10vh;
        }
    }

    @media only screen and (max-width: ${styleVars.smUp}) {
        .background {
            margin-top: 4.8vh;
            width: 100%;
            height: 10vh;
        }
    }

    @media only screen and (max-width: ${styleVars.xsUp}) {
        .background {
            margin-top: 4.8vh;
            width: 100%;
            height: 10vh;
        }
    }
`

export default Background