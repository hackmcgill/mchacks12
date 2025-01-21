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
        top: 11px;
        width: 100%;
        height: 200px;
        background-image: url(${headerImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: opacity 0.5s ease-in-out;
        opacity: ${(props) => (props.$scrolled ? 0 : 1)};
        z-index: -1;
    }
    
    .hidden {
        display: none;
    }

    @media only screen and (max-width: ${styleVars.lgUp}) {
        .background {
            top: 28px;
            height: 150px;
        }
    }

    @media only screen and (max-width: ${styleVars.smUp}) {
        .background {
            top: 45px;
            height: 100px;
        }
    }

    @media only screen and (max-width: ${styleVars.xsUp}) {
        .background {
            top: 45px;
            height: 100px;
        }
    }
`

export default Background