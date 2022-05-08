import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IsometricPlane } from "..";
import Github from "./assets/github.svg";

export default {
  title: "Example/IsometricPlane",
  component: IsometricPlane,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IsometricPlane>;

const Template: ComponentStory<typeof IsometricPlane> = (args) => (
  <IsometricPlane {...args}>
    <div>
      <h1>THIS IS ISOMETRIC PLANE</h1>
      <div
        style={{
          width: "100px",
          border: "1px solid #333",
          backgroundColor: "#888",
        }}
      >
        <img alt="github" src={Github} style={{ width: "100px" }} />
      </div>
    </div>
  </IsometricPlane>
);

export const Default = Template.bind({});
