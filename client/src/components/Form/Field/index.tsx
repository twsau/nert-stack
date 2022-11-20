import allInputs from "../Input";

export const Field = (args: FieldProps) => {
  const Input = allInputs[args.type];

  console.log(args.min, args.max);

  return (
    <label>
      {args.name}
      <Input {...args} />
    </label>
  );
};
