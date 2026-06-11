import { spawnSync } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/videos");
const TMP_DIR = path.resolve(".tmp/feature-videos");
const W = 960;
const H = 720;
const FPS = 24;
const DURATION = 4;
const FRAMES = FPS * DURATION;

const brand = "#ff6b35";
const brandDark = "#d94d1d";
const navy = "#101827";
const muted = "#6b7280";
const line = "#edf0f3";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function ease(value) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function fmt(value) {
  return Math.round(value).toLocaleString("en-US");
}

function bg() {
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="58%" stop-color="#fffaf7"/>
        <stop offset="100%" stop-color="#ffd7b7"/>
      </linearGradient>
      <linearGradient id="orangeFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff6b35" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#ff6b35" stop-opacity="0.02"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="#9a3412" flood-opacity="0.16"/>
      </filter>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#111827" flood-opacity="0.08"/>
      </filter>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <path d="M-70 154C116 78 352 84 473 172C608 270 482 385 605 484C734 589 910 505 1036 595V760H-70Z" fill="#fff7f1" opacity="0.86"/>
    <circle cx="778" cy="570" r="260" fill="#ff9f5a" opacity="0.16"/>
    <g opacity="0.55">
      ${Array.from({ length: 8 }, (_, y) =>
        Array.from({ length: 12 }, (_, x) =>
          `<circle cx="${592 + x * 18}" cy="${518 + y * 18}" r="1.6" fill="#ffffff"/>`,
        ).join(""),
      ).join("")}
    </g>
  `;
}

function svg(content) {
  return `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${bg()}
      ${content}
    </svg>
  `;
}

function rect(x, y, w, h, r, fill, stroke = "none", sw = 1, extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
}

function text(x, y, body, size, weight = 600, color = navy, anchor = "start", extra = "") {
  return `<text x="${x}" y="${y}" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}" ${extra}>${body}</text>`;
}

function pillPhone(x, y, w, h, body) {
  const sx = x + 18;
  const sy = y + 18;
  const sw = w - 36;
  const sh = h - 36;
  return `
    <g filter="url(#shadow)">
      ${rect(x, y, w, h, 48, "#131313")}
      ${rect(x + 5, y + 5, w - 10, h - 10, 44, "#d8d8d8")}
      ${rect(sx, sy, sw, sh, 36, "#ffffff")}
      ${rect(x + w / 2 - 48, y + 28, 96, 28, 14, "#111111")}
      ${text(sx + 30, sy + 36, "9:41", 14, 700, navy)}
      ${text(sx + sw - 64, sy + 36, "•••", 14, 800, "#9ca3af")}
      ${body(sx, sy, sw, sh)}
    </g>
  `;
}

function bottomTabs(sx, sy, sw, sh, active = 1) {
  const y = sy + sh - 48;
  const items = [sx + 62, sx + sw / 2, sx + sw - 62];
  return `
    <line x1="${sx}" y1="${y - 26}" x2="${sx + sw}" y2="${y - 26}" stroke="#f2f3f4" stroke-width="2"/>
    ${items
      .map((cx, i) => {
        const c = i === active ? brand : "#9ca3af";
        if (i === 0) {
          return `<g stroke="${c}" stroke-width="4" stroke-linecap="round"><line x1="${cx - 10}" y1="${y + 7}" x2="${cx + 10}" y2="${y + 7}"/><line x1="${cx - 8}" y1="${y - 2}" x2="${cx + 8}" y2="${y - 2}"/><line x1="${cx - 5}" y1="${y - 11}" x2="${cx + 5}" y2="${y - 11}"/></g>`;
        }
        if (i === 1) {
          return `<path d="M${cx - 15} ${y + 7}V${y - 10}L${cx} ${y - 23}L${cx + 15} ${y - 10}V${y + 7}Z" fill="${c}"/>`;
        }
        return `<g fill="${c}"><rect x="${cx - 16}" y="${y - 2}" width="7" height="22" rx="3"/><rect x="${cx - 3}" y="${y - 18}" width="7" height="38" rx="3"/><rect x="${cx + 10}" y="${y - 32}" width="7" height="52" rx="3"/></g>`;
      })
      .join("")}
    <rect x="${sx + sw / 2 - 46}" y="${sy + sh - 15}" width="92" height="5" rx="3" fill="#111111"/>
  `;
}

function featureOne(frame) {
  const t = frame / (FRAMES - 1);
  const tap = ease((t - 0.22) / 0.22);
  const checked = ease((t - 0.42) / 0.2);
  const pulse = Math.sin(t * Math.PI * 4) * 0.5 + 0.5;
  return svg(`
    ${pillPhone(315, 42, 330, 636, (sx, sy, sw, sh) => `
      ${text(sx + 24, sy + 78, "Saturday, June 6", 24, 800)}
      ${text(sx + sw - 44, sy + 78, "☰", 22, 800, "#374151")}
      ${rect(sx + 24, sy + 110, 118, 96, 18, "#f8fbfc", line, 1.5)}
      ${text(sx + 44, sy + 145, "Dose", 14, 700, muted)}
      ${text(sx + 44, sy + 183, "10", 30, 800)}
      ${text(sx + 88, sy + 183, "mg", 17, 700, muted)}
      ${rect(sx + 154, sy + 110, 166, 96, 18, checked > 0.98 ? "#fff7ed" : "#fff8ef", "#ffd19a", 2)}
      ${text(sx + 176, sy + 145, "Dose", 14, 800, brandDark)}
      ${text(sx + 176, sy + 183, checked > 0.92 ? "Checked" : "Check in", 22, 800, checked > 0.92 ? "#15803d" : brandDark)}
      ${rect(sx + 284, sy + 130, 22, 22, 5, checked > 0.3 ? brand : "transparent", brand, 3)}
      ${checked > 0.3 ? `<path d="M${sx + 289} ${sy + 141}L${sx + 294} ${sy + 147}L${sx + 303} ${sy + 136}" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity="${checked}"/>` : ""}
      ${rect(sx + 24, sy + 230, 96, 86, 16, "#f8fbfc", line, 1.5)}
      ${rect(sx + 132, sy + 230, 84, 86, 16, "#f8fbfc", line, 1.5)}
      ${rect(sx + 228, sy + 230, 92, 86, 16, "#f8fbfc", line, 1.5)}
      ${text(sx + 40, sy + 263, "Schedule", 13, 700, muted)}
      ${text(sx + 40, sy + 292, "Every Other", 14, 800)}
      ${text(sx + 148, sy + 263, "Reminder", 13, 700, muted)}
      ${text(sx + 148, sy + 292, "10:00 PM", 17, 800)}
      ${text(sx + 244, sy + 263, "Skin", 13, 700, muted)}
      ${text(sx + 244, sy + 292, "9:00 PM", 17, 800)}
      ${rect(sx + 24, sy + 342, 296, 66, 18, "#fff8ef", "#ffe2bd", 1.5)}
      ${text(sx + 42, sy + 374, "Total", 13, 800, brandDark)}
      ${text(sx + 42, sy + 399, "22,970 mg", 21, 800)}
      ${text(sx + 150, sy + 374, "Last month", 13, 700, muted)}
      ${text(sx + 150, sy + 399, "300 mg", 18, 800)}
      ${text(sx + 24, sy + 448, "How's your skin today?", 18, 800)}
      ${rect(sx + 24, sy + 468, 88, 72, 16, "#f8fbfc")}
      ${rect(sx + 124, sy + 468, 88, 72, 16, "#f8fbfc")}
      ${rect(sx + 224, sy + 468, 96, 72, 16, "#f8fbfc")}
      ${text(sx + 68, sy + 501, "✦", 24, 800, "#fbbf24", "middle")}
      ${text(sx + 168, sy + 502, "☺", 24, 700, "#f59e0b", "middle")}
      ${text(sx + 72, sy + 525, "Clear", 12, 700, navy, "middle")}
      ${text(sx + 168, sy + 525, "Hydrated", 12, 700, navy, "middle")}
      ${text(sx + 272, sy + 525, "Note", 12, 700, navy, "middle")}
      ${bottomTabs(sx, sy, sw, sh)}
    `)}
    <g opacity="${clamp(1 - tap) * 0.95}">
      <circle cx="${607}" cy="${190}" r="${16 + pulse * 8}" fill="${brand}" opacity="${0.08 + pulse * 0.12}"/>
    </g>
    <circle cx="${607}" cy="${190}" r="${lerp(4, 34, tap)}" fill="none" stroke="${brand}" stroke-width="4" opacity="${clamp(1 - tap)}"/>
    ${checked > 0.8 ? `<g filter="url(#soft)" opacity="${checked}">
      ${rect(196, 520, 238, 64, 18, "#ffffff")}
      ${text(230, 558, "Dose logged", 20, 800, navy)}
      <circle cx="390" cy="550" r="14" fill="#dcfce7"/>
      <path d="M383 550L388 555L398 543" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>` : ""}
  `);
}

function featureTwo(frame) {
  const t = frame / (FRAMES - 1);
  const slide = ease((t - 0.12) / 0.28);
  const ring = Math.sin(t * Math.PI * 6) * 0.5 + 0.5;
  const noteY = lerp(46, 132, slide);
  const noteOpacity = clamp((t - 0.05) / 0.2) * clamp((0.94 - t) / 0.12);
  return svg(`
    ${pillPhone(340, 62, 300, 586, (sx, sy, sw, sh) => `
      ${text(sx + 24, sy + 76, "Dose reminders", 24, 800)}
      ${rect(sx + 24, sy + 112, 236, 86, 18, "#fff8ef", "#ffd19a", 2)}
      ${text(sx + 46, sy + 147, "Next dose", 14, 800, brandDark)}
      ${text(sx + 46, sy + 178, "10:00 PM", 28, 800)}
      ${rect(sx + 24, sy + 224, 236, 86, 18, "#f8fbfc", line, 1.5)}
      ${text(sx + 46, sy + 257, "Schedule", 14, 700, muted)}
      ${text(sx + 46, sy + 288, "Every Other Day", 22, 800)}
      ${rect(sx + 24, sy + 336, 236, 112, 22, "#ffffff", line, 1.5)}
      ${text(sx + 46, sy + 376, "Notification", 14, 700, muted)}
      ${text(sx + 46, sy + 410, "Enabled", 24, 800, "#15803d")}
      <rect x="${sx + 186}" y="${sy + 378}" width="50" height="28" rx="14" fill="#ff6b35"/>
      <circle cx="${sx + 222}" cy="${sy + 392}" r="11" fill="#ffffff"/>
      ${bottomTabs(sx, sy, sw, sh)}
    `)}
    <g filter="url(#soft)" opacity="${noteOpacity}">
      ${rect(235, noteY, 385, 92, 24, "#ffffff")}
      <circle cx="282" cy="${noteY + 46}" r="25" fill="#fff0e6"/>
      <path d="M282 ${noteY + 32}c-12 0-18 8-18 19v8h36v-8c0-11-6-19-18-19Z" stroke="${brand}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M273 ${noteY + 63}h18" stroke="${brand}" stroke-width="4" stroke-linecap="round"/>
      <path d="M275 ${noteY + 29}c-18 8-28 22-28 40" stroke="${brand}" stroke-width="3" stroke-linecap="round" opacity="${0.2 + ring * 0.5}"/>
      <path d="M289 ${noteY + 29}c18 8 28 22 28 40" stroke="${brand}" stroke-width="3" stroke-linecap="round" opacity="${0.2 + ring * 0.5}"/>
      ${text(330, noteY + 42, "Dose reminder", 17, 700, muted)}
      ${text(330, noteY + 70, "Time for 10 mg", 28, 800, navy)}
    </g>
    <g opacity="0.9">
      <circle cx="728" cy="438" r="${70 + ring * 20}" fill="${brand}" opacity="${0.03 + ring * 0.04}"/>
    </g>
  `);
}

function featureThree(frame) {
  const t = frame / (FRAMES - 1);
  const p = ease((t - 0.12) / 0.62);
  const holdPulse = Math.sin(t * Math.PI * 4) * 0.5 + 0.5;
  const dose = fmt(5940 + (22970 - 5940) * p);
  return svg(`
    ${pillPhone(318, 44, 330, 636, (sx, sy, sw, sh) => `
      ${text(sx + 24, sy + 88, "Total dosage", 20, 700, muted)}
      ${text(sx + 24, sy + 148, dose, 50, 800)}
      ${text(sx + 182, sy + 148, "mg", 25, 800, "#9ca3af")}
      ${text(sx + 24, sy + 184, "vs last 1Y  -440mg (6.9%)", 18, 800, "#3b82f6")}
      <clipPath id="chartClip"><rect x="${sx + 24}" y="${sy + 222}" width="${296 * p}" height="172"/></clipPath>
      <path d="M${sx + 24} ${sy + 290} C${sx + 72} ${sy + 240}, ${sx + 116} ${sy + 322}, ${sx + 166} ${sy + 280} S${sx + 242} ${sy + 244}, ${sx + 292} ${sy + 350}" stroke="${brand}" stroke-width="5" fill="none" stroke-linecap="round" clip-path="url(#chartClip)"/>
      <path d="M${sx + 24} ${sy + 290} C${sx + 72} ${sy + 240}, ${sx + 116} ${sy + 322}, ${sx + 166} ${sy + 280} S${sx + 242} ${sy + 244}, ${sx + 292} ${sy + 350} L${sx + 292} ${sy + 394} L${sx + 24} ${sy + 394}Z" fill="url(#orangeFade)" clip-path="url(#chartClip)"/>
      ${text(sx + 24, sy + 430, "Treatment summary", 22, 800)}
      ${rect(sx + 24, sy + 458, 296, 104, 22, "#f8fbfc")}
      ${text(sx + 48, sy + 496, "Cumulative dosage", 16, 700, muted)}
      ${text(sx + 48, sy + 534, "22,970 mg", 30, 800)}
      ${text(sx + 48, sy + 558, "Goal 25,000mg", 15, 700, muted)}
      ${rect(sx + 172, sy + 545, 108, 10, 5, "#e5e7eb")}
      ${rect(sx + 172, sy + 545, 108 * (0.08 + 0.84 * p), 10, 5, brand)}
      ${text(sx + 284, sy + 532, `${Math.round(92 * p)}%`, 20, 800, brandDark, "end")}
      <rect x="${sx + sw / 2 - 46}" y="${sy + sh - 15}" width="92" height="5" rx="3" fill="#111111"/>
    `)}
    <g filter="url(#soft)">
      ${rect(636, 505, 170, 96, 22, "#ffffff")}
      ${text(662, 540, "Goal progress", 15, 700, muted)}
      ${text(662, 575, `${Math.round(92 * p)}%`, 36, 800, navy)}
      ${rect(662, 587, 110, 9, 5, "#e5e7eb")}
      ${rect(662, 587, 110 * (0.08 + 0.84 * p), 9, 5, brand)}
    </g>
    <circle cx="700" cy="558" r="${18 + holdPulse * 7}" fill="${brand}" opacity="${p > 0.95 ? 0.08 : 0}"/>
  `);
}

const videos = [
  ["dose-logging", featureOne],
  ["smart-reminders", featureTwo],
  ["dose-progress", featureThree],
];

await rm(TMP_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });
await mkdir(TMP_DIR, { recursive: true });

for (const [name, render] of videos) {
  const frameDir = path.join(TMP_DIR, name);
  await mkdir(frameDir, { recursive: true });

  for (let i = 0; i < FRAMES; i += 1) {
    const frame = path.join(frameDir, `frame-${String(i).padStart(4, "0")}.png`);
    await sharp(Buffer.from(render(i))).png().toFile(frame);
  }

  await sharp(Buffer.from(render(Math.floor(FRAMES * 0.6))))
    .png()
    .toFile(path.join(OUT_DIR, `${name}-poster.png`));

  const output = path.join(OUT_DIR, `${name}.mp4`);
  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      String(FPS),
      "-i",
      path.join(frameDir, "frame-%04d.png"),
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      "-crf",
      "24",
      "-preset",
      "medium",
      output,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`ffmpeg failed for ${name}`);
  }
}

await writeFile(path.join(OUT_DIR, "README.md"), "Generated IsoLog feature loop videos.\n");
await rm(TMP_DIR, { recursive: true, force: true });
