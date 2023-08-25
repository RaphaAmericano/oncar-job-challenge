import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>, ref:ForwardedRef<HTMLInputElement>) {
    return <input 
        {...props} ref={ref}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />;
}

export default forwardRef(Input)