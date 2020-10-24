import React, { useCallback, useRef, useState } from "react";

interface TextFieldProps {
    placeholder?: string;
}

const TextField = ({
    placeholder
}: TextFieldProps): JSX.Element => {
    const [value, setValue] = useState("");
    const inputContainerRef = useRef<HTMLDivElement>(null);

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, [setValue])

    const handleOnBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        if (!inputContainerRef.current) {
            return;
        }

        if (!value) {
            inputContainerRef.current.classList.remove("focused")
        }
    }, [value, inputContainerRef])

    const handleOnFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        if (!inputContainerRef.current) {
            return;
        }
        inputContainerRef.current.classList.add("focused")
    }, [inputContainerRef])

    return (
        <div className="textfield" ref={inputContainerRef}>
            <input
                className="textfield_input"
                type="text"
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />
        </div>
    )
}

export default TextField;