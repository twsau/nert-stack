import allInputs from "../Input";

export const Field = ({ label, placeholder, type }: FieldProps) => {
  const Input = allInputs[type];

  switch (label) {
    case undefined:
      return <Input placeholder={placeholder} />;
    default:
      return (
        <label>
          {label}
          <Input placeholder={placeholder} />
        </label>
      );
  }
};
