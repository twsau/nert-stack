interface FieldProps {
  label?: string;
  placeholder?: string;
  type: FieldType;
}

type FieldType = "EmailInput" | "TextInput" | "NumberInput";
