interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  error?: string;
  placeholder?: string;
}

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}: InputProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(
            type === "number" ? parseFloat(e.target.value) : e.target.value
          )
        }
        className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
          error ? "border-red-500 " : "border-[#043a66] "
        }`}
      />
      {error && <p className="text-red-500 self-start text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
