# Governance & Risk — Board paper and control register

## Visual authority

เว็บนี้เป็น public showcase แบบ static สำหรับ Governance & Risk และใช้ visual world เฉพาะของ vertical นี้: folio paper / rule line / amber mark

## First viewport

หน้าแรกเริ่มด้วย promise ที่อธิบายการตัดสินใจที่ช่วยได้ ต่อด้วย thesis, working artifact, buyer/offer/status signal และ CTA ไปยัง scope ที่มีจริง

## Signature artifact

A control register built for review, ownership and repeatability.

Artifact ใช้ geometry ที่อธิบายภาษาของ vertical นี้และทำหน้าที่เป็น evidence loom: buyer → problem → offer → readiness

## Boundaries

สถานะ commercial คือ target / P1; URL นี้เป็น showcase เท่านั้น ไม่ใช่หลักฐานว่ามีลูกค้า agency, ไม่รับข้อมูลลูกค้า, ไม่ใช่คำแนะนำ regulated และไม่เปลี่ยนงาน freelance/client เดิมให้เป็น agency traction

## Quality floor

ใช้ design floor 1.0.0 ตาม [ADR-0007](https://github.com/bookchaowalit/architecture-docs/blob/main/docs/architecture/decisions/ADR-0007-central-design-floor-and-tokens.md) (WCAG 2.2 AA): Noto Sans Thai/Noto Serif Thai, ข้อความไทยไม่ใช้ letter-spacing ติดลบ, line-height ของ body ไทย ≥ 1.6 และ heading ≥ 1.3, visible focus, skip link, target ≥ 24px, ไม่มี horizontal scroll ที่ 320/375/390/768/1440 และ reduced-motion ตรวจด้วย `design-floor.json` + `check.mjs` ส่วนแถวที่ต้องตรวจด้วยคนต้อง sign off ใน ux-review

Content policy ยังอยู่ที่นี่ ไม่ได้อยู่ใน floor: ห้ามเติม client claims, testimonials, pricing, credentials, lead form หรือ backend โดยไม่มี approval และ evidence

## Tokens

Vendored `app/design-floor/tokens.css` (header `css-vars` 1.0.0, แก้ไม่ได้) ค่าของ visual world นี้อยู่ใน `app/app-theme.css`:

| Token | ค่า | หมายเหตุ |
|---|---|---|
| `--color-bg` | `#f2edde` | folio paper |
| `--color-surface` | `#e4ddcb` | panel |
| `--color-fg` | `#242a2d` | ink |
| `--color-fg-muted` | `#5b5f59` | เดิม `#60645e` ได้ 4.45:1 บน panel ปรับเป็น 4.81:1 |
| `--color-accent` / `--color-focus` | `#a96824` | amber mark ใช้เป็นเส้นและ focus ring (3.3–3.8:1 ผ่านเกณฑ์ non-text 3:1) ห้ามใช้เป็นสีตัวอักษรเล็ก |
| `--color-border` | `#bcb8aa` | rule line |
| `--font-sans` / `--font-serif` | Noto Sans Thai / Noto Serif Thai ผ่าน `next/font/local` | |
| `--font-mono` | SFMono / Consolas / Liberation Mono / DejaVu Sans Mono แล้วต่อด้วย Noto Sans Thai | ป้าย mono ที่มีภาษาไทยจะแสดงด้วย Noto ไม่ตกไปใช้ฟอนต์ของ OS |

Dark mode: ไม่มี (visual world นี้มีธีมเดียว) Waivers: ไม่มี

Display heading เลิกใช้ tracking ติดลบกับข้อความไทยแล้ว และลดขนาดลงราว 7% เพื่อให้ความยาวบรรทัดใกล้ของเดิม
