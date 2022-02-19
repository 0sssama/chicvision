import React from "react";

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
};

function index({
  type,
  name,
  placeholder,
  readOnly,
  disabled,
  required,
  className,
}: Props) {
  switch (type) {
    case "header-search":
      return (
        <input
          type="text"
          className={`cv-input header-search ${className}`}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
      );
    case "main-search":
      return (
        <input
          type="text"
          className={`cv-input search ${className}`}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
      );
    case "textarea":
      return (
        <textarea
          className={`cv-input textarea ${className}`}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        ></textarea>
      );
    default:
      return (
        <input
          className={`cv-input std ${className}`}
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        />
      );
  }
}

export default index;
