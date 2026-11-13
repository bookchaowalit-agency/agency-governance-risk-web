import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ServicePage from "../../app/services/[slug]/page";
import { pseoService } from "@/lib/pseo";

const meta = {
  title: "Pages/ServiceDetail",
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: `/services/${pseoService.slug}/` } } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnyPage = ServicePage as any;
const params = () => Promise.resolve({ slug: pseoService.slug });

export const Desktop: Story = { render: () => <AnyPage params={params()} /> };
export const Mobile: Story = { render: () => <AnyPage params={params()} />, globals: { viewport: { value: "w375" } } };
