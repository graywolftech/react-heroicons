import React from "react";

export const MdPlusCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
}
