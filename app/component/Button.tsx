import React, { ButtonHTMLAttributes, ReactNode, FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    icon?: ReactNode,
}

const Button:FC<iButton> = ({ className, icon, children, ...props}) => {
  return (
    <button {...props}
     className={twMerge(
        "border rounded-[120px] bg-neutral-900 text-white px-[28px] py-3 font-semibold" , className
     )}>
        <div className={ `${icon ? "mr-2" : ""}` }> {icon} </div>
        <div>{children}</div>
    </button>
  )
}

export default Button
