interface FormProps {
  fields: FormField[];
  onSubmit: FormEventHandler;
}

interface FormField {
  // TODO set contstants for form field types
  type: string;
}

interface TextInputProps {
  placeholder: string;
}
