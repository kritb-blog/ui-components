import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "..";
import Github from "./assets/github.svg";
import { IconSize } from "../theming/sizes";
import { ThemeProvider } from "styled-components";
import { Colors } from "../theming/colors";

export default {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <ThemeProvider theme={{ primary: Colors.Primary, active: Colors.Active }}>
    <Badge {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  badgeImageUrl: Github,
  badgeName: "Github",
  targetUrl: "https://www.github.com",
  size: IconSize.M,
};
