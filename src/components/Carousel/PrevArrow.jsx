import React from "react"

const PrevArrow = () => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      style={{ transform: "scale(-1,1)" }}
      fill="none"
      version="1.1"
      id="svg308"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_191_3576)" id="g287">
        <circle
          r="34"
          transform="matrix(-1,0,0,1,38,34)"
          fill="#fff7dc"
          id="circle285"
          cx="0"
          cy="0"
        />
      </g>
      <defs id="defs306">
        <filter
          id="filter0_d_191_3576"
          x="0"
          y="0"
          width="76"
          height="76"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
            id="feFlood289"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
            id="feColorMatrix291"
          />
          <feOffset dy="4" id="feOffset293" />
          <feGaussianBlur stdDeviation="2" id="feGaussianBlur295" />
          <feComposite in2="hardAlpha" operator="out" id="feComposite297" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            id="feColorMatrix299"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_191_3576"
            id="feBlend301"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_3576"
            result="shape"
            id="feBlend303"
          />
        </filter>
      </defs>
      <g id="g321" transform="translate(27.04471,18.528034)">
        <path
          d="M 2,2 19,15 2,29"
          stroke="#02365e"
          stroke-width="5"
          stroke-linejoin="round"
          id="path312"
        />
      </g>
    </svg>
  )
}

export default PrevArrow
