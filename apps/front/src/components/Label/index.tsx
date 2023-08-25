import {  ComponentPropsWithoutRef } from "react";
interface LabelProps extends ComponentPropsWithoutRef<"label"> {}
export default function Label({ children, ...props}: LabelProps){
    return (
        <label {...props}  className="block text-sm font-semibold leading-6 text-gray-900">
            {children}
        </label>
    )
}