import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    leadingIcon ? :React.ReactNode;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className,leadingIcon,style, type, ...props }, ref) => {
    return (
     <div id="inputContainer" style={{position:'relative', display:'flex', alignItems:'center'}}>
      {
        leadingIcon && (
          <div className="iconContainer" style={{position:'absolute', padding:'0 12px'}}>
            {leadingIcon}
          </div>
        )
      }
       <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className, {'pl-9':leadingIcon,}
        )}
        ref={ref}
        style={{...style}}
        {...props}
      />
     </div>
     
    )
  }
)
Input.displayName = "Input"

export { Input }
