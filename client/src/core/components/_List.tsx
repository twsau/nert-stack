interface ListProps {
  items: any[];
  numbered?: boolean;
}

export const List = ({ items, numbered }: ListProps) => {
  const ListType = numbered ? "ol" : "ul";

  return (
    <ListType>
      {items.map((item) => (
        <li>{typeof item}</li>
      ))}
    </ListType>
  );
};
