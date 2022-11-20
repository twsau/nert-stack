import { ListItem, OrderedList, UnOrderedList } from "./styles";

export const List = ({ items, type = "bullet" }: ListProps) => {
  const mapItems = (items: any[]) =>
    items.map((item) => <ListItem>{item}</ListItem>);

  switch (type) {
    case "bullet":
      return <UnOrderedList>{mapItems(items)}</UnOrderedList>;
    case "number":
      return <OrderedList>{mapItems(items)}</OrderedList>;
    // TODO consider dl
  }
};
