import { ListItem, OrderedList, UnOrderedList } from "./styles";

export const List = ({ items, type = "bullet" }: ListProps) => {
  const mapItems = (items: any[]) =>
    items.map((item, index) => <ListItem key={index}>{item}</ListItem>);

  switch (type) {
    case "bullet":
      return <UnOrderedList>{mapItems(items)}</UnOrderedList>;
    case "number":
      return <OrderedList>{mapItems(items)}</OrderedList>;
    // TODO consider dl
  }
};
