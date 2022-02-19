type Props = {
  type?: string;
  HTMLtype?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  onChange?: any; // function
  className?: string;
  error?: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  ref?: any;
  options?: string[];
  minLength?: number;
  maxLength?: number;
};

function index({
  type,
  HTMLtype,
  placeholder,
  required,
  name,
  value,
  onChange,
  disabled,
  className,
  error,
  label,
  readOnly,
  ref,
  options,
  minLength,
  maxLength,
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
        <div className="input w-full">
          {label && <p className="input-label">{label}</p>}
          <textarea
            className={`w-full cv-input textarea ${className} ${
              error ? "error" : ""
            }`}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            minLength={minLength}
            maxLength={maxLength}
          ></textarea>
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "select":
      return (
        <div className="input w-full">
          {label && <p className="input-label">{label}</p>}
          <select
            className={`w-full cv-input std ${className} ${
              error ? "error" : ""
            }`}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
          >
            {options?.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "file":
      return (
        <div className="input w-full">
          {label && <p className="input-label">{label}</p>}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type="file"
            required={required}
            name={name}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    default:
      return (
        <div className="input w-full">
          {label && <p className="input-label">{label}</p>}
          <input
            className={`w-full cv-input std ${className} ${
              error ? "error" : ""
            }`}
            type={HTMLtype}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            minLength={minLength}
            maxLength={maxLength}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
  }
}

export default index;
