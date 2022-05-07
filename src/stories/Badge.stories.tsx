import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "..";
import Github from "./assets/github.svg";
import { IconSize } from "../theming/sizes";

export default {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  badgeImageUrl: Github,
  badgeName: "Github",
  targetUrl: "https://www.github.com",
  size: IconSize.M
};
