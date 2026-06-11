import { spawnSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
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
const ink = "#111827";
const muted = "#64748b";
const line = "#e7edf3";
const screen = "#fbfcff";
const teal = "#0f9f8f";
const blue = "#2563eb";
const green = "#16a34a";

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

function svg(content) {
  return `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${defs()}
      ${background()}
      ${content}
    </svg>
  `;
}

function defs() {
  return `
    <defs>
      <linearGradient id="canvasBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="56%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#fff4eb"/>
      </linearGradient>
      <linearGradient id="screenGlass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>
        <stop offset="45%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#dbeafe" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="metalEdge" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="46%" stop-color="#2a2f3a"/>
        <stop offset="100%" stop-color="#070b12"/>
      </linearGradient>
      <linearGradient id="brandFill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff8f2"/>
        <stop offset="100%" stop-color="#ffe6d5"/>
      </linearGradient>
      <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff6b35" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="#ff6b35" stop-opacity="0"/>
      </linearGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48 0H0V48" stroke="#e7edf3" stroke-width="1" opacity="0.55"/>
      </pattern>
      <filter id="phoneShadow" x="-28%" y="-16%" width="156%" height="136%">
        <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.22"/>
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#ffffff" flood-opacity="0.9"/>
      </filter>
      <filter id="cardShadow" x="-22%" y="-22%" width="144%" height="150%">
        <feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#0f172a" flood-opacity="0.12"/>
      </filter>
    </defs>
  `;
}

function background() {
  return `
    <rect width="${W}" height="${H}" fill="url(#canvasBg)"/>
    <rect width="${W}" height="${H}" fill="url(#grid)" opacity="0.45"/>
    <path d="M0 560C156 506 280 526 426 580C574 634 726 665 960 586V720H0Z" fill="#fff0e4" opacity="0.72"/>
    <path d="M0 612C176 560 332 594 488 632C642 670 790 682 960 620V720H0Z" fill="#e0f2fe" opacity="0.5"/>
    <path d="M620 88L1020 -18V88L620 194Z" fill="#fff7ed" opacity="0.92"/>
    <path d="M-82 90L220 16V78L-82 152Z" fill="#ecfeff" opacity="0.64"/>
  `;
}

function rect(x, y, w, h, r, fill, stroke = "none", sw = 1, extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
}

function text(
  x,
  y,
  body,
  size,
  weight = 600,
  color = ink,
  anchor = "start",
  extra = "",
) {
  return `<text x="${x}" y="${y}" font-family="Inter, Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}" letter-spacing="0" ${extra}>${body}</text>`;
}

function centerText(x, y, body, size, weight = 700, color = ink, extra = "") {
  return text(
    x,
    y,
    body,
    size,
    weight,
    color,
    "middle",
    `dominant-baseline="middle" ${extra}`,
  );
}

function card(x, y, w, h, r = 24, fill = "#ffffff", stroke = line) {
  return rect(x, y, w, h, r, fill, stroke, 1.5, 'filter="url(#cardShadow)"');
}

function checkPath(cx, cy, color = "#ffffff", size = 1, opacity = 1) {
  return `<path d="M${cx - 7 * size} ${cy}L${cx - 1.5 * size} ${cy + 5.5 * size}L${cx + 8 * size} ${cy - 7 * size}" stroke="${color}" stroke-width="${3.2 * size}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`;
}

function phoneStatus(sx, sy, sw) {
  return `
    ${text(sx + 22, sy + 32, "9:41", 13, 800, ink)}
    <g fill="${ink}" opacity="0.82">
      <rect x="${sx + sw - 66}" y="${sy + 22}" width="4" height="10" rx="2"/>
      <rect x="${sx + sw - 60}" y="${sy + 18}" width="4" height="14" rx="2"/>
      <rect x="${sx + sw - 54}" y="${sy + 14}" width="4" height="18" rx="2"/>
      <rect x="${sx + sw - 42}" y="${sy + 18}" width="28" height="14" rx="4" fill="none" stroke="${ink}" stroke-width="1.8"/>
      <rect x="${sx + sw - 38}" y="${sy + 21}" width="18" height="8" rx="2" fill="${ink}"/>
    </g>
  `;
}

function bottomNav(sx, sy, sw, sh, active = 0) {
  const y = sy + sh - 58;
  const items = [sx + 64, sx + sw / 2, sx + sw - 64];
  return `
    <line x1="${sx + 22}" y1="${y - 24}" x2="${sx + sw - 22}" y2="${y - 24}" stroke="#e9eef5" stroke-width="1.5"/>
    ${items
      .map((cx, i) => {
        const c = i === active ? brand : "#94a3b8";
        if (i === 0) {
          return `<g stroke="${c}" stroke-width="3.3" stroke-linecap="round"><line x1="${cx - 12}" y1="${y + 9}" x2="${cx + 12}" y2="${y + 9}"/><line x1="${cx - 8}" y1="${y}" x2="${cx + 8}" y2="${y}"/><line x1="${cx - 4}" y1="${y - 9}" x2="${cx + 4}" y2="${y - 9}"/></g>`;
        }
        if (i === 1) {
          return `<path d="M${cx - 15} ${y + 9}V${y - 8}L${cx} ${y - 21}L${cx + 15} ${y - 8}V${y + 9}Z" fill="${c}"/>`;
        }
        return `<g fill="${c}"><rect x="${cx - 16}" y="${y + 1}" width="7" height="20" rx="3"/><rect x="${cx - 3}" y="${y - 14}" width="7" height="35" rx="3"/><rect x="${cx + 10}" y="${y - 27}" width="7" height="48" rx="3"/></g>`;
      })
      .join("")}
    <rect x="${sx + sw / 2 - 42}" y="${sy + sh - 14}" width="84" height="5" rx="3" fill="${ink}" opacity="0.9"/>
  `;
}

function phoneMockup(x, y, w, h, body, activeTab = 0) {
  const sx = x + 18;
  const sy = y + 18;
  const sw = w - 36;
  const sh = h - 36;
  return `
    <defs>
      <clipPath id="screenClip">
        <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="42"/>
      </clipPath>
    </defs>
    <g opacity="0.9">
      ${rect(x - 9, y + 108, 7, 72, 4, "#111827")}
      ${rect(x - 9, y + 206, 7, 58, 4, "#111827")}
      ${rect(x + w + 2, y + 174, 7, 104, 4, "#111827")}
    </g>
    <g filter="url(#phoneShadow)">
      ${rect(x, y, w, h, 55, "url(#metalEdge)")}
      ${rect(x + 3, y + 3, w - 6, h - 6, 52, "#333842", "#ffffff", 1.2, 'opacity="0.55"')}
      ${rect(sx - 4, sy - 4, sw + 8, sh + 8, 46, "#05070c")}
      <g clip-path="url(#screenClip)">
        ${rect(sx, sy, sw, sh, 42, screen)}
        <path d="M${sx} ${sy}H${sx + sw}V${sy + 180}C${sx + sw - 78} ${sy + 140} ${sx + 76} ${sy + 164} ${sx} ${sy + 116}Z" fill="#ffffff" opacity="0.72"/>
        ${body(sx, sy, sw, sh)}
        ${bottomNav(sx, sy, sw, sh, activeTab)}
        <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="url(#screenGlass)"/>
      </g>
      ${rect(sx, sy, sw, sh, 42, "none", "#ffffff", 1.4, 'opacity="0.42"')}
      ${rect(x + w / 2 - 43, y + 26, 86, 25, 13, "#05070c")}
      ${rect(x + w / 2 - 12, y + 34, 24, 4, 2, "#1f2937")}
    </g>
  `;
}

function featureOne(frame) {
  const t = frame / (FRAMES - 1);
  const tap = ease((t - 0.16) / 0.2);
  const checked = ease((t - 0.36) / 0.24);
  const settle = ease((t - 0.56) / 0.22);
  const pulse = Math.sin(t * Math.PI * 4) * 0.5 + 0.5;

  return svg(`
    ${phoneMockup(325, 34, 310, 652, (sx, sy, sw) => {
      const buttonY = sy + 252;
      const progress = 0.38 + checked * 0.44;
      return `
        ${phoneStatus(sx, sy, sw)}
        ${text(sx + 24, sy + 84, "Today", 30, 850)}
        ${text(sx + 24, sy + 112, "Saturday, Jun 6", 15, 700, muted)}
        ${rect(sx + sw - 78, sy + 74, 54, 28, 14, "#eefaf8", "#b7eee5", 1)}
        ${centerText(sx + sw - 51, sy + 89, "Day 48", 12, 800, teal)}

        ${card(sx + 22, sy + 138, sw - 44, 276, 30, "url(#brandFill)", "#ffd8bd")}
        ${text(sx + 48, sy + 184, "Today's dose", 16, 800, brandDark)}
        ${text(sx + 48, sy + 238, "10", 58, 850, ink)}
        ${text(sx + 128, sy + 238, "mg", 25, 800, muted)}
        ${rect(sx + 48, buttonY, sw - 96, 70, 22, checked > 0.58 ? green : brand, "none")}
        ${centerText(sx + sw / 2 + 14, buttonY + 36, checked > 0.58 ? "Dose logged" : "Log dose", 22, 850, "#ffffff")}
        <circle cx="${sx + 72}" cy="${buttonY + 36}" r="18" fill="#ffffff" opacity="${checked > 0.58 ? 0.23 : 0.18}"/>
        ${checked > 0.58 ? checkPath(sx + 72, buttonY + 36, "#ffffff", 1, checked) : `<path d="M${sx + 64} ${buttonY + 36}H${sx + 80}M${sx + 72} ${buttonY + 28}V${buttonY + 44}" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>`}
        <circle cx="${sx + sw / 2}" cy="${buttonY + 36}" r="${lerp(8, 88, tap)}" fill="none" stroke="#ffffff" stroke-width="5" opacity="${clamp(1 - tap) * 0.8}"/>
        <circle cx="${sx + sw / 2}" cy="${buttonY + 36}" r="${26 + pulse * 6}" fill="#ffffff" opacity="${checked < 0.3 ? 0.08 : 0}"/>

        ${card(sx + 22, sy + 440, sw - 44, 108, 26)}
        ${text(sx + 48, sy + 478, "Course progress", 15, 750, muted)}
        ${text(sx + 48, sy + 516, "18,420 mg", 29, 850, ink)}
        ${rect(sx + 48, sy + 530, sw - 96, 10, 5, "#e8edf3")}
        ${rect(sx + 48, sy + 530, (sw - 96) * progress, 10, 5, checked > 0.58 ? green : brand)}
        ${centerText(sx + sw - 72, sy + 492, `${Math.round(progress * 100)}%`, 22, 850, checked > 0.58 ? green : brandDark)}
        ${settle > 0 ? `<g opacity="${settle}">
          ${rect(sx + 48, sy + 342, sw - 96, 38, 16, "#ecfdf5", "#bbf7d0", 1.2)}
          <circle cx="${sx + 72}" cy="${sy + 361}" r="11" fill="${green}"/>
          ${checkPath(sx + 72, sy + 361, "#ffffff", 0.62, settle)}
          ${centerText(sx + sw / 2 + 18, sy + 362, "Logged at 9:41 PM", 14, 850, "#166534", `opacity="${settle}"`)}
        </g>` : ""}
      `;
    }, 1)}
  `);
}

function featureTwo(frame) {
  const t = frame / (FRAMES - 1);
  const slide = ease((t - 0.1) / 0.34);
  const pulse = Math.sin(t * Math.PI * 5) * 0.5 + 0.5;
  const enabled = ease((t - 0.46) / 0.22);

  return svg(`
    ${phoneMockup(330, 38, 300, 644, (sx, sy, sw) => {
      const noteY = lerp(sy - 92, sy + 130, slide);
      return `
        ${phoneStatus(sx, sy, sw)}
        ${text(sx + 24, sy + 86, "Reminders", 29, 850)}
        ${text(sx + 24, sy + 113, "A quiet backup for busy days", 14, 700, muted)}

        <g opacity="${clamp((t - 0.04) / 0.18) * clamp((0.95 - t) / 0.15)}">
          ${rect(sx + 16, noteY, sw - 32, 88, 28, "#ffffff", "#d8eefb", 1.4, 'filter="url(#cardShadow)"')}
          <circle cx="${sx + 52}" cy="${noteY + 44}" r="${20 + pulse * 4}" fill="#fff3e8"/>
          <path d="M${sx + 52} ${noteY + 28}c-10 0-16 7-16 18v8h32v-8c0-11-6-18-16-18Z" stroke="${brand}" stroke-width="3.6" stroke-linecap="round" fill="none"/>
          <path d="M${sx + 44} ${noteY + 59}h16" stroke="${brand}" stroke-width="3.6" stroke-linecap="round"/>
          ${text(sx + 84, noteY + 38, "Dose reminder", 14, 800, muted)}
          ${text(sx + 84, noteY + 66, "10 mg at 10:00 PM", 20, 850, ink)}
        </g>

        ${card(sx + 22, sy + 246, sw - 44, 154, 30, "#ffffff", "#d8eefb")}
        ${text(sx + 48, sy + 290, "Next dose", 15, 800, blue)}
        ${text(sx + 48, sy + 344, "10:00", 49, 850, ink)}
        ${text(sx + 183, sy + 344, "PM", 19, 850, muted)}
        ${rect(sx + 48, sy + 362, 118, 26, 13, "#fff7ed", "#fed7aa", 1)}
        ${centerText(sx + 107, sy + 376, "Every other day", 12, 850, brandDark)}
        ${rect(sx + sw - 94, sy + 304, 48, 48, 16, "#eff6ff", "#bfdbfe", 1.2)}
        <path d="M${sx + sw - 70} ${sy + 317}v20l14 8" stroke="${blue}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

        ${card(sx + 22, sy + 430, sw - 44, 112, 28, "#f8fffd", "#b7eee5")}
        ${text(sx + 48, sy + 474, "Notifications", 15, 800, teal)}
        ${text(sx + 48, sy + 510, enabled > 0.45 ? "Enabled" : "Ready", 28, 850, enabled > 0.45 ? green : ink)}
        <rect x="${sx + sw - 106}" y="${sy + 476}" width="62" height="34" rx="17" fill="${enabled > 0.45 ? brand : "#cbd5e1"}"/>
        <circle cx="${lerp(sx + sw - 88, sx + sw - 62, enabled)}" cy="${sy + 493}" r="13" fill="#ffffff"/>
      `;
    }, 1)}
  `);
}

function featureThree(frame) {
  const t = frame / (FRAMES - 1);
  const p = ease((t - 0.1) / 0.66);
  const total = fmt(5940 + (22970 - 5940) * p);
  const percent = Math.round(92 * p);
  const circumference = 2 * Math.PI * 76;
  const pulse = Math.sin(t * Math.PI * 4) * 0.5 + 0.5;

  return svg(`
    ${phoneMockup(325, 34, 310, 652, (sx, sy, sw) => {
      const ringCx = sx + sw / 2;
      const ringCy = sy + 220;
      return `
        ${phoneStatus(sx, sy, sw)}
        ${text(sx + 24, sy + 86, "Progress", 30, 850)}
        ${text(sx + 24, sy + 113, "Cumulative dose tracking", 14, 700, muted)}

        ${card(sx + 22, sy + 140, sw - 44, 232, 32)}
        <circle cx="${ringCx}" cy="${ringCy}" r="76" stroke="#e8edf3" stroke-width="18"/>
        <circle cx="${ringCx}" cy="${ringCy}" r="76" stroke="${brand}" stroke-width="18" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${circumference * (1 - percent / 100)}" transform="rotate(-90 ${ringCx} ${ringCy})"/>
        <circle cx="${ringCx}" cy="${ringCy}" r="${88 + pulse * 6}" stroke="${brand}" stroke-width="2" opacity="${p > 0.94 ? 0.16 : 0}"/>
        ${centerText(ringCx, ringCy - 6, `${percent}%`, 50, 850, ink)}
        ${centerText(ringCx, ringCy + 42, "of goal", 15, 750, muted)}

        ${card(sx + 22, sy + 398, sw - 44, 124, 28, "url(#brandFill)", "#ffd8bd")}
        ${text(sx + 48, sy + 440, "Total taken", 15, 800, brandDark)}
        ${text(sx + 48, sy + 488, total, 39, 850, ink)}
        ${text(sx + 198, sy + 488, "mg", 22, 850, muted)}
        ${rect(sx + 48, sy + 502, sw - 96, 9, 5, "#f4d8c5")}
        ${rect(sx + 48, sy + 502, (sw - 96) * (0.08 + 0.84 * p), 9, 5, brand)}
        ${text(sx + 48, sy + 520, "Goal", 14, 800, muted)}
        ${text(sx + 92, sy + 521, "25,000 mg", 21, 850, blue)}
      `;
    }, 2)}
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

  await sharp(Buffer.from(render(Math.floor(FRAMES * 0.68))))
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
      "19",
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

await rm(TMP_DIR, { recursive: true, force: true });
