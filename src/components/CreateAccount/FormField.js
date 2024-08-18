import React from "react";
import ErrorMessage from "./ErrorMessage";

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  maxLength,
  hasError,
  errorMessage,
  isRequired = false,
  additionalContent = null,
  ...props
}) => {
  return (
    <div
      className={`flex w-w2 py-2.5 px-5 text-sm ${
        hasError ? "h-auto" : "h-16"
      }`}
    >
      <div className="inline-block w-w6 mt-4">
        <label className="text-darkGray font-medium">{label}</label>
        {isRequired && <span className="text-red">*</span>}
      </div>
      <div className="inline-block">
        <input
          className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray font-normal"
          name={name}
          type={type}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...props}
        />
        <ErrorMessage hasError={hasError} errorMessage={errorMessage} />
      </div>
      {additionalContent && (
        <div className="inline-block ml-2">{additionalContent}</div>
      )}
    </div>
  );
};

export default FormField;
