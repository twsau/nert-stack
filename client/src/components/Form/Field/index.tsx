import allInputs from "../Input";
import { ErrorMessage, FieldValue } from "./style";

export const Field = (args: FieldProps) => {
  const Input = allInputs[args.type];
  return (
    <label>
      {args.name}
      <FieldValue>
        <Input {...args} />
        {args.error && <ErrorMessage>{args.error.message}</ErrorMessage>}
      </FieldValue>
    </label>
  );
};
