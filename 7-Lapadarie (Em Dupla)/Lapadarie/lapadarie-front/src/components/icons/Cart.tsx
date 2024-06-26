import * as React from "react"

function SvgComponent() {
  return (
    <svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 23a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22.5 23a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="#5F3305"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1h4.545l3.046 14.282c.104.491.388.933.804 1.247.415.313.935.48 1.469.47h11.045a2.37 2.37 0 001.469-.47c.415-.314.7-.756.804-1.247L26 6.333H6.682"
        stroke="#5F3305"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
