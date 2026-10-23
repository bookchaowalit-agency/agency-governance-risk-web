# Verification

หลักฐานและ checklist สำหรับ Governance & Risk showcase

## pSEO service page

- Route: `/services/ai-governance-readiness-review/`
- ขอบเขต: workflow, deliverables, evidence boundary และ readiness ของ Governance & Risk
- ไม่มี lead form, API, database, analytics identifier หรือข้อมูลลูกค้า
- ค่าเริ่มต้นของ build เป็น `noindex` และ `Disallow: /`; เปิด index ได้เฉพาะเมื่อกำหนด `NEXT_PUBLIC_SITE_URL` และ `NEXT_PUBLIC_SITE_INDEXABLE=true` ที่ผ่านการอนุมัติ

## Local checks

```bash
npm run lint
npm test        # site config, robots/sitemap (noindex default), pSEO route, page renders, Sentry scrubbing
npm run check   # typecheck + static export
```

`tests/seo-routes.test.ts` and `tests/site-config.test.ts` pin the noindex / `Disallow: /` default and the
trailing-slash canonical and sitemap URLs.
