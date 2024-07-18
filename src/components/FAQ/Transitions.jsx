import styled from "styled-components"
import * as styleVars from "../variable"

import BoxGradientImg from "../../assets/images/designs/sponsor-gradient.svg"
import TopTransitionBoxes from "../../assets/images/designs/faq-top-transition.svg"
import SideBoxes from "../../assets/images/designs/faq-side-boxes.svg"
import BottomTransitionBoxes from "../../assets/images/designs/faq-bottom-transition.svg"
import SponsorTransitionBoxes from "../../assets/images/designs/sponsor-transition.svg"
import BgGridSquare from "../../assets/images/designs/faq-grid-square.svg"

const TransitionToFAQ = styled.div`
  position: relative;
  vertical-align: bottom;
  background-repeat: repeat-x;
  height: 279px;
  background-color: ${styleVars.darkSecondaryBlue};
  background-image: url(${BoxGradientImg});
`
const TopTransition = styled.div`
  height: 181px;
  background-color: #fed8ac;
  background-image: url(${TopTransitionBoxes}), url(${BgGridSquare});
  background-repeat: repeat;
`

const TopTransitionSides = styled.div`
  position: absolute;
  width: 100%;
  height: 270px;
  background-image: url(${SideBoxes});
  background-repeat: repeat-x;
`

const BottomTransition = styled.div`
  height: 268px;
  background-color: #ffb260;
  background-image: url(${BottomTransitionBoxes}), url(${BgGridSquare});
  background-repeat: repeat;
`

const TransitionToSponsors = styled.div`
  height: 186px;
  background-image: url(${SponsorTransitionBoxes});
  background-repeat: repeat-x;
`

export {
  TransitionToFAQ,
  TopTransition,
  TopTransitionSides,
  BottomTransition,
  TransitionToSponsors,
}
