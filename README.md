# maxoududu.github.io

Modernized personal website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

## Build static export

```bash
npm run build
```

The static export is generated in `out/`.

## License

The website's source code is licensed under the [MIT License](LICENSE).
Personal content, including text, photographs, and branding, is excluded and
remains all rights reserved unless otherwise stated. Third-party materials
retain their respective licenses.

## Dependency checks

Use Node.js 22, matching the deployment workflow. After updating dependencies,
run `npm ci`, `npm run lint`, `npm run build`, and `npm audit`.

As of October 19, 2026, `npm audit --omit=dev` reports no vulnerabilities.
The full audit reports seven high-severity entries stemming from the same
unpatched transitive `braces` dependency in Tailwind CSS and Next.js lint tooling
([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)).
These tools run during development/builds; the deployed site is a static export.
Recheck for upstream fixes before applying `npm audit fix --force`, which currently
proposes a Tailwind major upgrade and a downgrade of `eslint-config-next` to v14.

ESLint remains on v9 because the React, import, and accessibility plugins used by
`eslint-config-next` do not yet declare ESLint v10 support. npm marks v9 as
unsupported; upgrade when that plugin chain supports v10.
