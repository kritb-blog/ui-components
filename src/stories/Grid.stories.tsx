import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "..";

export default {
  title: "Example/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  opts: {
    numOfRow: 5,
    numOfCol: 5,
    blockSize: 50,
  },
  renderTile: (index: number) => <span>{index}</span>,
};
