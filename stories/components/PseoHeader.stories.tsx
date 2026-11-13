import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PseoHeader } from "@/components/pseo-page";

const meta = {
  title: "Components/PseoHeader",
  component: PseoHeader,
  parameters: { layout: "padded", nextjs: { navigation: { pathname: "/services/" } } },
} satisfies Meta<typeof PseoHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "w375" } } };
