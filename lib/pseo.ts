export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "ai-governance-readiness-review",
  "name": "Governance readiness review",
  "title": "AI Governance Readiness Review สำหรับ use case ที่ต้องตรวจสอบได้",
  "description": "ทบทวน AI, privacy หรือ security use case เดียว แล้วจัดทำ control และ evidence map",
  "intent": "ต้องการแปลงกฎและความเสี่ยงของ AI หรือข้อมูลให้เป็น control, owner และ evidence ที่ติดตามได้",
  "buyer": "Board, CEO, CRO และ compliance lead",
  "context": "เริ่มจาก use case เดียวและแยก advisory ออกจาก assurance เพื่อให้บทบาทและความเป็นอิสระชัดเจน",
  "workflow": [
    "เลือก use case และผู้รับผิดชอบการตัดสินใจ",
    "ทำ inventory ของ data, model, vendor และ policy ที่เกี่ยวข้อง",
    "แปลง gap เป็น control, owner, evidence และ review cadence",
    "ส่ง readiness map ให้ผู้บริหารตัดสินใจเรื่อง remediation"
  ],
  "deliverables": [
    "use-case boundary และ responsibility map",
    "control/evidence register",
    "gap และ remediation plan",
    "review cadence และ decision record template"
  ],
  "evidence": [
    "ไม่อ้าง legal advice, assurance opinion หรือ regulatory approval",
    "ไม่ใส่ข้อมูลส่วนบุคคลหรือ private AI logs ใน public content",
    "ข้อกำหนดจริงต้องตรวจตาม jurisdiction และผู้เชี่ยวชาญที่รับผิดชอบ"
  ],
  "readiness": "ต้องมี governance lead, use-case owner, privacy/security reviewer และ retention rule ก่อนเปิด inquiry",
  "agencySlug": "governance-risk",
  "agencyName": "Governance & Risk",
  "agencyThaiName": "กำกับดูแลและความเสี่ยง",
  "agencyStatus": "target",
  "agencyStage": "P1"
};
