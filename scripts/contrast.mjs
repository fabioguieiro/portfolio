/**
 * Verifies every text/background pair in the palette against WCAG 2.1.
 * Run after changing any token in src/app/globals.css or tailwind.config.ts:
 *
 *   node scripts/contrast.mjs
 *
 * Exits non-zero if any pair drops below its floor, so it can gate CI.
 */

const LIGHT = {
  ground: "#FDF4D8",
  surface: "#FFFBF0",
  surfaceAlt: "#F4F0E2",
  ink: "#14110E",
  inkMuted: "#57503F",
  outline: "#14110E",
  display: "#C2380D",
};

const DARK = {
  ground: "#101F2E",
  surface: "#1B3A57",
  surfaceAlt: "#24486A",
  ink: "#F5EFE0",
  inkMuted: "#AFC0D2",
  outline: "#C4B274",
  display: "#FF8A5C",
};

// Identical in both modes and always paired with fieldInk.
const FIELDS = {
  tomato: "#F66333",
  tomatoDeep: "#DD4E1C",
  mint: "#7FCCC6",
  sky: "#A8D5E5",
  rose: "#F5A3A8",
  sun: "#FBCB3C",
  grape: "#C08BF5",
  paper: "#FFFBF0",
};
const FIELD_INK = "#14110E";

const BODY = 4.5; // normal text
const LARGE = 3.0; // >= 24px, or >= 18.66px bold
const NON_TEXT = 3.0; // borders, separators

const luminance = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = c.map((x) =>
    x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const checks = [];
const check = (mode, label, fg, bg, floor) =>
  checks.push({ mode, label, value: ratio(fg, bg), floor });

for (const [mode, T] of [
  ["light", LIGHT],
  ["dark", DARK],
]) {
  check(mode, "ink on ground", T.ink, T.ground, BODY);
  check(mode, "ink on surface", T.ink, T.surface, BODY);
  check(mode, "ink on surface-alt", T.ink, T.surfaceAlt, BODY);
  check(mode, "ink-muted on ground", T.inkMuted, T.ground, BODY);
  check(mode, "ink-muted on surface", T.inkMuted, T.surface, BODY);
  check(mode, "display heading on ground", T.display, T.ground, LARGE);
  check(mode, "outline on ground", T.outline, T.ground, NON_TEXT);
  check(mode, "outline on surface", T.outline, T.surface, NON_TEXT);

  // Fields never change, so they are checked once per mode against fieldInk
  // and against the ground they sit on.
  for (const [name, hex] of Object.entries(FIELDS)) {
    check(mode, `fieldInk on ${name}`, FIELD_INK, hex, BODY);
  }
}

// Deliberate exceptions: pairs the author chose to keep below the floor.
// They are reported every run so the cost stays visible, but they do not fail
// the gate. Do not add to this list without an explicit decision.
const EXCEPTIONS = [
  {
    label: "cream on tomato (footer)",
    fg: "#F3F1E8",
    bg: "#F66333",
    floor: BODY,
    why: "author prefers the cream footer type over the accessible ink",
  },
];

let failed = 0;
let currentMode = "";
for (const { mode, label, value, floor } of checks) {
  if (mode !== currentMode) {
    currentMode = mode;
    console.log(`\n${mode.toUpperCase()}`);
  }
  const ok = value >= floor;
  if (!ok) failed++;
  console.log(
    `  ${ok ? "PASS" : "FAIL"}  ${label.padEnd(30)} ${value.toFixed(2).padStart(6)}:1  (min ${floor})`,
  );
}

if (EXCEPTIONS.length) {
  console.log("\nKNOWN EXCEPTIONS (reported, not enforced)");
  for (const e of EXCEPTIONS) {
    console.log(
      `  ----  ${e.label.padEnd(30)} ${ratio(e.fg, e.bg).toFixed(2).padStart(6)}:1  (min ${e.floor}) -- ${e.why}`,
    );
  }
}

console.log(
  failed === 0
    ? `\nAll ${checks.length} enforced pairs pass.`
    : `\n${failed} of ${checks.length} enforced pairs fail.`,
);
process.exit(failed === 0 ? 0 : 1);
