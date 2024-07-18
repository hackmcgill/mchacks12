import * as styleVars from "../variable"

export const MobileMenu = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    top: "28px",
    right: "30px",
  },
  bmBurgerBars: {
    background: styleVars.hackWhite,
    borderRadius: "30px",
    height: "3.5px",
  },
  bmBurgerBarsHover: {
    background: styleVars.darkYellow,
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
    top: "22px",
    right: "30px",
    outline: "none",
  },
  bmCross: {
    background: styleVars.hackBlack,
    height: "5px",
    width: "30px",
    top: "5px",
    left: "-15px",
    borderRadius: "5px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: styleVars.hackBlack10,
    padding: "2.5em 1.5em 0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: styleVars.yellow,
    padding: "0.8em",
    top: "8em",
    display: "grid",
    height: "250px",
    textAlign: "center",
    fontSize: "24px",
    marginTop: "60px",
  },
  bmItem: {
    textAlign: "center",
    lineHeight: "7rem",
    fontSize: "36px",
    padding: "40px",
    color: styleVars.hackBlack,
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default MobileMenu
