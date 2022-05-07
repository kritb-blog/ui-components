import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IsometricGrid } from "..";

export default {
  title: "Example/IsometricGrid",
  component: IsometricGrid,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IsometricGrid>;

const Template: ComponentStory<typeof IsometricGrid> = (args) => (
  <IsometricGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  opts: {
    numOfRow: 5,
    numOfCol: 5,
    blockSize: 50,
  },
  renderTile: (index: number) => <span>{index}</span>
};
