import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PseoLandingPage } from "@/components/pseo-page";
import { emptyListsService, incubatingService, longThaiService, lockedService, targetService } from "../fixtures/pseo";

const meta = {
  title: "Components/PseoPage",
  component: PseoLandingPage,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/services/" } } },
} satisfies Meta<typeof PseoLandingPage>;
export default meta;
type Story = StoryObj<typeof meta>;

// Target status is the real repo service (lib/pseo.ts).
export const Target: Story = { args: { service: targetService } };
export const Mobile: Story = { args: { service: targetService }, globals: { viewport: { value: "w375" } } };
export const Incubating: Story = { args: { service: incubatingService } };
export const Locked: Story = { args: { service: lockedService } };
export const LongThai: Story = { name: "Long Thai text", args: { service: longThaiService } };
export const LongThaiMobile: Story = { name: "Long Thai text (mobile)", args: { service: longThaiService }, globals: { viewport: { value: "w375" } } };
export const EmptyLists: Story = { name: "Empty lists", args: { service: emptyListsService } };
