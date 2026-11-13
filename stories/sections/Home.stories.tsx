import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroSection, OfferSection, ProblemSection, ReadinessSection, SignalRow, SiteFooter, SiteHeader } from "./home-sections";

// The page wraps its sections in .site-shell with the boardpaper archetype class.
const meta = {
  title: "Sections/Home page",
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="site-shell archetype-boardpaper" data-site="governance-risk">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderNav: Story = { name: "Header", render: () => <SiteHeader /> };
export const Hero: Story = { render: () => <HeroSection /> };
export const HeroMobile: Story = { name: "Hero (mobile)", render: () => <HeroSection />, globals: { viewport: { value: "w375" } } };
export const Signals: Story = { name: "Signal row", render: () => <SignalRow /> };
export const Problem: Story = { render: () => <ProblemSection /> };
export const Offer: Story = { render: () => <OfferSection /> };
export const OfferMobile: Story = { name: "Offer (mobile)", render: () => <OfferSection />, globals: { viewport: { value: "w375" } } };
export const ReadinessTarget: Story = { name: "Readiness: target", render: () => <ReadinessSection status="target" /> };
export const ReadinessIncubating: Story = { name: "Readiness: incubating", render: () => <ReadinessSection status="incubating" /> };
export const ReadinessLocked: Story = { name: "Readiness: locked", render: () => <ReadinessSection status="locked" /> };
export const ReadinessMobile: Story = { name: "Readiness (mobile)", render: () => <ReadinessSection />, globals: { viewport: { value: "w375" } } };
export const Footer: Story = { render: () => <SiteFooter /> };
