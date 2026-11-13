import { pseoService, type PseoService } from "@/lib/pseo";
import { site } from "@/lib/site";

// The repo ships one service in lib/pseo.ts (target / P1). It is used as-is.
export const targetService: PseoService = pseoService;

// Same service, other readiness states. The gate copy changes with agencyStatus.
export const incubatingService: PseoService = { ...pseoService, agencyStatus: "incubating" };
export const lockedService: PseoService = { ...pseoService, agencyStatus: "locked" };

// Long Thai stress case. Every string is a sentence already in lib/pseo.ts or lib/site.ts,
// joined together so headings, list items and the aside wrap the way real copy would.
export const longThaiService: PseoService = {
  ...pseoService,
  title: `${pseoService.title} — ${site.fit}`,
  context: `${pseoService.context} ${site.problem} ${site.offerDetail}`,
  workflow: pseoService.workflow.map((step) => `${step} ${pseoService.readiness}`),
  deliverables: pseoService.deliverables.map((item) => `${item} ${pseoService.evidence[0]}`),
  evidence: [...pseoService.evidence, `${site.fit} ${site.problem}`],
};

// Lists are empty, to see how the page reads when the content is missing.
export const emptyListsService: PseoService = {
  ...pseoService,
  workflow: [],
  deliverables: [],
  evidence: [],
};
