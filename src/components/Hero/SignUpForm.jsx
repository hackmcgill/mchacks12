import React from "react"

import styled from "styled-components"
import * as styleVars from "../variable"

import "./mailchimp.scss"

import CustomArrowIcon from "../../assets/images/designs/mchacks12-arrow.svg"
import { useMediaQuery } from "react-responsive"

export const ArrowButton = styled.button`
  background-color: ${styleVars.m12Red};
  border-radius: 43%;
  border: none;
  transition: all 0.15s ease-in-out;
  width: 54px;
  height: 54px;
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;

  &:hover {
    background-color: ${styleVars.buttonHover};
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 35px;
    height: 35px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    width: 35px;
    height: 35px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const MceErrorResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: ${styleVars.hackBlack70} !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;

  @media only screen and (max-width: 480px) {
    font-size: 14px !important;
    padding: 8px 8px !important;
    margin-bottom: 0.8em !important;
  }
`

export const MceSuccessResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: #f07c74 !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;

  @media only screen and (max-width: 480px) {
    font-size: 14px !important;
    padding: 8px 8px !important;
    margin-bottom: 0.8em !important;
  }
`

export const MceEmbeddedSubscribe = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`
export const McInputWrapper = styled.div`
  position: relative;
  width: 40vw;
  height: 10vh;

  @media only screen and (max-width: ${styleVars.mdUp}) {
    width: 40vw;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 55vw;
    justify-content: center;
    padding: 0 10px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    width: 60vw;
    padding: 0 5px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 10vh;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 4px 0 0 4px;
  outline: none;
  ::placeholder {
    color: white;
    opacity: 1;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 0vw;
    padding: 8px 10px;
    font-size: 14px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding: 6px 10px;
    font-size: 12px;
  }
`

const SignUpForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 })

  const desktopPlaceholder = "Your email here. No spam, we promise!"
  const mobilePlaceholder = "Your email here."

  return (
    <div id="mc_embed_signup">
      <form
        action="https://mchacks.us21.list-manage.com/subscribe/post?u=5369e4c4f19f741106977ddfa&amp;id=cb6c20e487&amp;f_id=00b9e9e6f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        rel="noopener noreferrer"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <div>
              <McInputWrapper className="mc-input-wrapper">
                <StyledInput
                  id="mce-EMAIL"
                  type="email"
                  name="EMAIL"
                  className="required-email"
                  placeholder={
                    isMobile ? mobilePlaceholder : desktopPlaceholder
                  }
                  required
                />
                <MceEmbeddedSubscribe>
                  <ArrowButton type="submit">
                    <img src={CustomArrowIcon} alt="Arrow Icon" />
                  </ArrowButton>
                </MceEmbeddedSubscribe>
              </McInputWrapper>
            </div>

            <div
              className="response"
              id="mce-error-response"
              css={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              css={{ display: "none" }}
            ></div>
          </div>
          <div
            css={{
              position: "absolute",
              left: "-5000px",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_daca896c9229eac78a0cc3810_a5a34f6561"
              tabIndex="-1"
              value=""
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
