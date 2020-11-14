import React, { useCallback, useRef } from "react";
import clsx from "clsx";
import useStores from "../../stores";

interface TextFieldProps {
    placeholder?: string;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    hasErrors: string;
    textarea?: boolean;
}

const TextField = ({
    placeholder,
    className,
    value,
    onChange,
    hasErrors,
    textarea = false
}: TextFieldProps): JSX.Element => {
    const { responsiveStore } = useStores();
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

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
        handleOnFocus();
    }, [onChange, handleOnFocus])

    const props = {
        className: clsx(
            "textfield_input",
            {["textfield_input--black"]: responsiveStore.backgroundColor === "white"}
        ),
        placeholder: placeholder,
        onChange: handleOnChange,
        value: value,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
    }

    return (
        <div
            className={clsx(
                "textfield",
                className,
                hasErrors && "textfield--has-error"
            )}
            ref={inputContainerRef}
        >
            {!textarea && <input type="text" {...props} />}
            {textarea && <textarea {...props} /> }
            {hasErrors && (
                <div className="textfield_error">
                    {hasErrors}
                </div>
            )}
        </div>
    )
}

export default TextField;