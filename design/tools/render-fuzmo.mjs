// Renders every Fuzmo mood to a standalone SVG in design/fuzmo/.
// Source of truth for the shapes: design/character-sheet/Fuzmo.dc.html (keep the two in step).
// Usage: node design/tools/render-fuzmo.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'fuzmo');

const base = {
  stalk: 'M100 46 C 96 32, 104 20, 100 10', bx: 100, by: 8, bulb: '#FFE45C', glow: 0.35, shine: 0.9,
  lidHalf: 0, lidClosed: 0, pupils: 1, px: 0, py: 0, ps: 1, spiral: 0,
  mouth: 'M84 148 Q100 164 116 148', mouthFill: 'none', tongue: 0, teeth: 0, glasses: 0, zzz: 0,
  sweat: 0, tears: 0, crack: 0, drool: 0, cheek: 0.5, sparkle: 0,
};

const moods = {
  sharp: { glow: 0.5, mouth: 'M78 144 Q100 176 122 144 Z', mouthFill: '#2A0F4D', tongue: 1, cheek: 0.8, py: -2 },
  fine: { stalk: 'M100 46 C 97 32, 107 22, 105 12', bx: 105, by: 10, bulb: '#FFDA4A', glow: 0.25 },
  foggy: { stalk: 'M100 46 C 100 32, 114 22, 125 30', bx: 128, by: 34, bulb: '#CBB676', glow: 0.1, shine: 0.5, lidHalf: 1, py: 4, mouth: 'M88 154 L112 154', cheek: 0.25 },
  cooked: { stalk: 'M100 46 C 104 32, 128 30, 133 48', bx: 134, by: 56, bulb: '#7E7567', glow: 0, shine: 0, lidHalf: 1, px: -4, py: 5, mouth: 'M80 156 q5 -6 10 0 q5 6 10 0 q5 -6 10 0 q5 6 10 0', sweat: 1, cheek: 0.15 },
  rotted: { stalk: 'M100 46 C 108 36, 134 36, 138 64', bx: 138, by: 72, bulb: '#3B3442', glow: 0, shine: 0, pupils: 0, spiral: 1, mouth: 'M84 148 Q100 172 116 148 Z', mouthFill: '#2A0F4D', drool: 1, crack: 1, cheek: 0 },
  sleepy: { stalk: 'M100 46 C 100 34, 112 26, 120 32', bx: 123, by: 36, bulb: '#E8CF6A', glow: 0.12, lidClosed: 1, pupils: 0, mouth: 'M95 154 a5 6 0 1 0 10 0 a5 6 0 1 0 -10 0', mouthFill: '#2A0F4D', zzz: 1, cheek: 0.4 },
  genius: { glasses: 1, glow: 0.55, mouth: 'M86 150 Q102 160 118 144', cheek: 0.5, py: -1, px: 2 },
  gremlin: { stalk: 'M100 46 L94 36 L106 26 L98 16', bx: 98, by: 12, px: 6, py: 1, mouth: 'M76 142 Q100 172 124 142 Z', mouthFill: '#2A0F4D', teeth: 1, cheek: 0.6 },
  drama: { stalk: 'M100 46 C 92 36, 84 30, 76 30', bx: 72, by: 28, ps: 1.15, py: -3, mouth: 'M92 154 a8 11 0 1 0 16 0 a8 11 0 1 0 -16 0', mouthFill: '#2A0F4D', tears: 1, cheek: 0.7 },
  unhinged: { stalk: 'M100 46 c -12 -4, 12 -10, 0 -14 c -12 -4, 12 -10, 0 -14', bx: 100, by: 14, bulb: '#FF8A5C', glow: 0.45, ps: 0.45, mouth: 'M78 150 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6', cheek: 0.3 },
  legendary: { bulb: '#FFC83D', glow: 0.75, sparkle: 1, mouth: 'M80 146 Q100 170 120 146 Z', mouthFill: '#2A0F4D', tongue: 1, cheek: 0.8 },
  silhouette: {},
};

function render(mood) {
  const c = { ...base, ...moods[mood] };
  const sil = mood === 'silhouette';
  const black = '#141018';
  if (sil) Object.assign(c, { glow: 0, shine: 0, cheek: 0, pupils: 0, tongue: 0, mouthFill: black, mouth: 'M86 150 Q100 160 114 150' });
  const body = sil ? black : '#7B3FE4';
  const ink = sil ? black : '#2A0F4D';
  const belly = sil ? black : '#C7B0FF';
  const white = sil ? black : '#FFFFFF';
  const feet = sil ? black : '#5B2BB8';
  const bulb = sil ? black : c.bulb;
  const { bx, by } = c;
  const lpx = 78 + c.px, lpy = 110 + c.py, rpx = 124 + c.px, rpy = 112 + c.py;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -16 200 236" role="img" aria-label="Fuzmo, ${mood}">
<ellipse cx="76" cy="206" rx="16" ry="8" fill="${feet}" stroke="${ink}" stroke-width="3"/>
<ellipse cx="124" cy="206" rx="16" ry="8" fill="${feet}" stroke="${ink}" stroke-width="3"/>
<path d="M100 44 C 150 44, 172 110, 172 160 C 172 196, 140 206, 100 206 C 60 206, 28 196, 28 160 C 28 110, 50 44, 100 44 Z" fill="${body}" stroke="${ink}" stroke-width="3.5"/>
<ellipse cx="100" cy="174" rx="46" ry="26" fill="${belly}"/>
<ellipse cx="60" cy="140" rx="9" ry="5" fill="#FF8FC7" opacity="${c.cheek}"/>
<ellipse cx="142" cy="140" rx="8" ry="5" fill="#FF8FC7" opacity="${c.cheek}"/>
<circle cx="78" cy="110" r="20" fill="${white}" stroke="${ink}" stroke-width="3"/>
<circle cx="124" cy="112" r="15" fill="${white}" stroke="${ink}" stroke-width="3"/>
<g opacity="${c.pupils}"><circle cx="${lpx}" cy="${lpy}" r="${9 * c.ps}" fill="${ink}"/><circle cx="${rpx}" cy="${rpy}" r="${7 * c.ps}" fill="${ink}"/><circle cx="${lpx + 3}" cy="${lpy - 4}" r="2.6" fill="#FFFFFF"/><circle cx="${rpx + 2.5}" cy="${rpy - 3}" r="2" fill="#FFFFFF"/></g>
<g opacity="${c.spiral}" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round"><path d="M78 110 m-2 0 a2 2 0 1 1 4 0 a5 5 0 1 1 -10 0 a8 8 0 1 1 16 0 a11 11 0 1 1 -22 0"/><path d="M124 112 m-2 0 a2 2 0 1 1 4 0 a5 5 0 1 1 -10 0 a8 8 0 1 1 16 0"/></g>
<g opacity="${c.lidHalf}"><path d="M57 111 A21 21 0 0 1 99 111 Z" fill="${body}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><path d="M108 113 A16 16 0 0 1 140 113 Z" fill="${body}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/></g>
<g opacity="${c.lidClosed}"><circle cx="78" cy="110" r="22" fill="${body}"/><circle cx="124" cy="112" r="17" fill="${body}"/><path d="M62 112 Q78 124 94 112" fill="none" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M112 113 Q124 122 136 113" fill="none" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/></g>
<g opacity="${c.glasses}" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"><circle cx="78" cy="110" r="24"/><circle cx="124" cy="112" r="19"/><path d="M102 111 L105 111"/><path d="M54 106 L40 100"/><path d="M143 110 L158 102"/></g>
<path d="${c.mouth}" fill="${c.mouthFill}" stroke="${ink}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M90 159 Q100 151 110 159 Q100 169 90 159 Z" fill="#FF7AA8" opacity="${c.tongue}"/>
<g opacity="${c.teeth}" fill="#FFFFFF" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"><path d="M86 147 L94 147 L90 155 Z"/><path d="M106 147 L114 147 L110 155 Z"/></g>
<path d="M66 130 q-5 9 0 14 q5 -5 0 -14 Z" fill="#7FD3FF" stroke="${ink}" stroke-width="1.5" opacity="${c.tears}"/>
<path d="M152 84 q-5 9 0 14 q5 -5 0 -14 Z" fill="#7FD3FF" stroke="${ink}" stroke-width="1.5" opacity="${c.sweat}"/>
<path d="M112 160 q3 10 -1 18" fill="none" stroke="#9FE3FF" stroke-width="3" stroke-linecap="round" opacity="${c.drool}"/>
<circle cx="${bx}" cy="${by}" r="18" fill="${bulb}" opacity="${c.glow}"/>
<path d="${c.stalk}" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="${bx}" cy="${by}" r="9" fill="${bulb}" stroke="${ink}" stroke-width="3"/>
<circle cx="${bx - 3}" cy="${by - 3}" r="2.4" fill="#FFFFFF" opacity="${c.shine}"/>
<path d="M${bx - 5} ${by - 6} l4 5 l-3 4 l4 3" fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="${c.crack}"/>
<g opacity="${c.sparkle}" fill="#FFE45C" stroke="${ink}" stroke-width="1.2" stroke-linejoin="round"><path d="M${bx + 20} ${by - 10} l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z"/><path d="M${bx - 22} ${by + 6} l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 z"/></g>
<g opacity="${c.zzz}" fill="#C7B0FF" font-family="system-ui, sans-serif" font-weight="800"><text x="146" y="66" font-size="14">z</text><text x="160" y="50" font-size="18">z</text><text x="176" y="32" font-size="22">Z</text></g>
</svg>
`;
}

mkdirSync(outDir, { recursive: true });
for (const mood of Object.keys(moods)) {
  writeFileSync(join(outDir, `${mood}.svg`), render(mood));
}
console.log(`Wrote ${Object.keys(moods).length} SVGs to ${outDir}`);
