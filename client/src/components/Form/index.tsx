import fieldTypes from "./fields";

export const Form = ({ fields, onSubmit }: FormProps) => (
  <form onSubmit={onSubmit}>
    {fields.map((field) => {
      const Field = fieldTypes[field.type];
      return <Field />;
    })}
  </form>
);
