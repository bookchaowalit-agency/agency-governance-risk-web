import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NotFound from "../../app/not-found";

const meta = {
  title: "Pages/NotFound",
  parameters: { layout: "fullscreen" },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { render: () => <NotFound /> };
export const Mobile: Story = { render: () => <NotFound />, globals: { viewport: { value: "w375" } } };
