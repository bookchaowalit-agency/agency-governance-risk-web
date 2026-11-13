// Story-only mirror of the inline sections in app/page.tsx. The page does not export them, and app source
// stays unchanged, so this copies the same markup and classes from lib/site. Only the "boardpaper" artifact
// branch is mirrored because site.design.motif is "boardpaper". If app/page.tsx changes, update this file too.
import Link from "next/link";
import { site } from "@/lib/site";

export type ReadinessStatus = "incubating" | "target" | "locked";

const statusCopy = {
  incubating: { label: "กำลังเปิดรอบ validation", note: "กำลังทดสอบ buyer, offer และ delivery economics ก่อนเปิดรับงานในขอบเขตที่ชัดเจน" },
  target: { label: "เตรียมไว้ใน portfolio", note: "positioning พร้อมสำหรับการทดสอบ แต่ owner และหลักฐานการส่งมอบยังต้องผ่าน gate ก่อนเปิดรับงาน" },
  locked: { label: "future capability", note: "เก็บไว้สำหรับการวิจัยและวางพันธมิตร ยังไม่มีการรับข้อมูลหรือรับประกันบริการ" },
} as const;

const servicePath = "/services/ai-governance-readiness-review/";

export function Artifact() {
  const labels = site.scope.slice(0, 4);
  return (
    <div className="artifact artifact-boardpaper" aria-hidden="true">
      <div className="boardpaper-head"><strong>CONTROL REGISTER</strong><span>REV / 01</span></div>
      {labels.map((label, index) => (
        <div className="boardpaper-row" key={label}><span>0{index + 1}</span><strong>{label}</strong><i>owner / evidence</i></div>
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true">{String(site.number).padStart(2, "0")}</span>
        <span><strong>{site.name}</strong><small>{site.thaiName}</small></span>
      </a>
      <nav aria-label="เมนูหลัก"><a href="#offer">Scope</a><a href="#readiness">Readiness</a><Link href={servicePath}>Service</Link></nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <h1>{site.promise}</h1>
        <p className="hero-thesis">{site.design.thesis}</p>
        <div className="hero-meta"><span>{site.design.material}</span><span>showcase / {site.stage}</span></div>
        <a className="primary-link" href="#offer">{site.cta}<span className="link-mark" aria-hidden="true" /></a>
        <Link className="pseo-home-link" href={servicePath}>ดู service page <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-art">
        <Artifact />
        <p className="artifact-caption">{site.design.artifactCaption}</p>
      </div>
    </section>
  );
}

export function SignalRow() {
  return (
    <section className="signal-row" aria-label="ขอบเขตของ vertical">
      <div><span>สำหรับใคร</span><strong>{site.buyer}</strong></div>
      <div><span>เริ่มจาก</span><strong>{site.offer}</strong></div>
      <div><span>สถานะ</span><strong>{statusCopy[site.status].label}</strong></div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="story-section">
      <div><h2>โจทย์ที่ต้องทำให้เห็นชัด</h2></div>
      <p>{site.problem}</p>
    </section>
  );
}

export function OfferSection() {
  return (
    <section id="offer" className="offer-section">
      <div className="offer-intro"><h2>{site.offer}</h2><p>{site.offerDetail}</p></div>
      <div className="offer-register">
        <div className="register-row"><span>ขอบเขตตั้งต้น</span><div className="scope-list">{site.scope.map((item) => <strong key={item}>{item}</strong>)}</div></div>
        <div className="register-row"><span>สิ่งที่ต้อง build</span><p>{site.asset}</p></div>
        <div className="register-row"><span>fit ตอนนี้</span><p>{site.fit}</p></div>
      </div>
    </section>
  );
}

// The status is a prop so the three readiness states can be shown side by side. The page reads it from site.status.
export function ReadinessSection({ status = site.status }: { status?: ReadinessStatus }) {
  const readiness = statusCopy[status];
  return (
    <section id="readiness" className="readiness-section">
      <div><h2>สถานะที่พูดได้ตรง ๆ</h2><p>หน้าเว็บนี้ใช้สำหรับ showcase และ message testing เท่านั้น ยังไม่มี lead form หรือการรับข้อมูลลูกค้า</p></div>
      <div className="readiness-note"><strong>{readiness.label}</strong><p>{readiness.note}</p><span>{site.stage} / {status}</span></div>
    </section>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><span>SE / {site.name}</span><span>public showcase · content-safe · no client claims</span></footer>;
}
