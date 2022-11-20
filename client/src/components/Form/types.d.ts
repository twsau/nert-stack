interface FormProps {
  fields: FormField[];
  onSubmit: FormEventHandler;
  showReset?: boolean;
}

interface FormField {
  label?: string;
  placeholder?: string;
  type: FieldType;
}
