import { v4 as uuid } from "uuid";

interface ListProps {
  items: any[];
  numbered?: boolean;
}

export const List = ({ items, numbered }: ListProps) => {
  const ListType = numbered ? "ol" : "ul";

  return (
    <ListType>
      {items.map((item) => (
        <li key={uuid()}>{item}</li>
      ))}
    </ListType>
  );
};
