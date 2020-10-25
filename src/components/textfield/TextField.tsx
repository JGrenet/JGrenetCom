import React, { useCallback, useRef } from "react";
import clsx from "clsx";

interface TextFieldProps {
    placeholder?: string;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    hasErrors: string;
}

const TextField = ({
    placeholder,
    className,
    value,
    onChange,
    hasErrors
}: TextFieldProps): JSX.Element => {
    const inputContainerRef = useRef<HTMLDivElement>(null);

    const handleOnBlur = useCallback(() => {
        if (!inputContainerRef.current) {
            return;
        }

        if (!value) {
            inputContainerRef.current.classList.remove("focused")
        }
    }, [value, inputContainerRef])

    const handleOnFocus = useCallback(() => {
        if (!inputContainerRef.current) {
            return;
        }
        inputContainerRef.current.classList.add("focused")
    }, [inputContainerRef])

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
        handleOnFocus();
    }, [onChange, handleOnFocus])

    return (
        <div
            className={clsx(
                "textfield",
                className,
                hasErrors && "textfield--has-error"
            )}
            ref={inputContainerRef}
        >
            <input
                className="textfield_input"
                type="text"
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />
            {hasErrors && (
                <div className="textfield_error">
                    {hasErrors}
                </div>
            )}
        </div>
    )
}

export default TextField;