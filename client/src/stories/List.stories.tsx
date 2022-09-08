import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "../core/components";

export default {
  title: "core/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ["egg", "ham", "cheese", "milk"],
  numbered: false,
};

export const Numbered = Template.bind({});
Numbered.args = {
  items: ["egg", "ham", "cheese", "milk"],
  numbered: true,
};
