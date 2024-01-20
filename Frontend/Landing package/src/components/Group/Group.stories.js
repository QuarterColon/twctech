import { Group } from ".";

export default {
  title: "Components/Group",
  component: Group,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    rectangleClassName: {},
    rectangle: "/img/rectangle-30-9.png",
    divClassName: {},
    text: "Latest Trend",
  },
};
