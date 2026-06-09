const svgData = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const xml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const nailSvg = (
  id: string,
  title: string,
  subtitle: string,
  base = '#ff477e',
  accent = '#fcd5ce',
  dark = '#090708'
) => svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100" role="img" aria-label="${xml(title)}">
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${dark}" offset="0"/><stop stop-color="#1b1117" offset="0.48"/><stop stop-color="#050505" offset="1"/></linearGradient>
    <radialGradient id="glow-${id}" cx="72%" cy="14%" r="52%"><stop stop-color="${base}" stop-opacity="0.48" offset="0"/><stop stop-color="${accent}" stop-opacity="0.16" offset="0.42"/><stop stop-color="transparent" offset="1"/></radialGradient>
    <linearGradient id="nail-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}" offset="0"/><stop stop-color="${base}" offset="0.62"/><stop stop-color="#ffffff" offset="1"/></linearGradient>
    <linearGradient id="skin-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffaf4"/><stop offset="0.55" stop-color="#efe8df"/><stop offset="1" stop-color="#d8cfc5"/></linearGradient>
    <filter id="shadow-${id}" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000000" flood-opacity="0.42"/></filter>
  </defs>
  <rect width="900" height="1100" fill="url(#bg-${id})"/>
  <rect width="900" height="1100" fill="url(#glow-${id})"/>
  <circle cx="760" cy="125" r="150" fill="${base}" opacity="0.16"/>
  <circle cx="140" cy="950" r="210" fill="#ffffff" opacity="0.045"/>
  <g filter="url(#shadow-${id})" transform="translate(0 22)">
    <ellipse cx="450" cy="760" rx="302" ry="188" fill="url(#skin-${id})"/>
    <g fill="url(#skin-${id})">
      <rect x="176" y="380" width="108" height="358" rx="54" transform="rotate(-18 230 559)"/>
      <rect x="310" y="318" width="116" height="438" rx="58" transform="rotate(-8 368 537)"/>
      <rect x="438" y="292" width="124" height="466" rx="62"/>
      <rect x="574" y="318" width="116" height="438" rx="58" transform="rotate(8 632 537)"/>
      <rect x="708" y="380" width="108" height="358" rx="54" transform="rotate(18 762 559)"/>
    </g>
    <g>
      <rect x="198" y="404" width="62" height="118" rx="31" fill="url(#nail-${id})"/>
      <rect x="337" y="346" width="66" height="140" rx="33" fill="url(#nail-${id})"/>
      <rect x="467" y="320" width="70" height="150" rx="35" fill="url(#nail-${id})"/>
      <rect x="601" y="346" width="66" height="140" rx="33" fill="url(#nail-${id})"/>
      <rect x="731" y="404" width="62" height="118" rx="31" fill="url(#nail-${id})"/>
      <g fill="#ffffff" opacity="0.50"><rect x="219" y="422" width="16" height="82" rx="8" transform="rotate(-10 227 463)"/><rect x="360" y="365" width="16" height="92" rx="8" transform="rotate(-7 368 411)"/><rect x="491" y="341" width="16" height="96" rx="8"/><rect x="624" y="365" width="16" height="92" rx="8" transform="rotate(7 632 411)"/><rect x="752" y="422" width="16" height="82" rx="8" transform="rotate(10 760 463)"/></g>
    </g>
  </g>
  <g transform="translate(70 80)"><text x="0" y="0" dominant-baseline="hanging" font-family="Georgia, serif" font-size="56" font-weight="800" fill="#ffffff">${xml(title)}</text><text x="0" y="82" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="5" fill="${accent}" opacity="0.9">${xml(subtitle)}</text></g>
  <g transform="translate(70 975)"><rect width="360" height="62" rx="31" fill="#000000" opacity="0.42" stroke="#ffffff" stroke-opacity="0.12"/><text x="28" y="40" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="#ffffff">DHARYNAILS · TALCA</text></g>
</svg>`);

export const DHARYNAILS_LOGO = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" role="img" aria-label="Dharynails recreated logo">
  <rect width="420" height="420" rx="210" fill="#f5f2ee"/>
  <path d="M128 132 L168 88 L203 132 L242 88 L286 132 L270 162 L143 162 Z" fill="none" stroke="#050505" stroke-width="12" stroke-linejoin="round"/>
  <path d="M151 162 H270" stroke="#050505" stroke-width="12" stroke-linecap="round"/>
  <text x="100" y="304" font-family="Georgia, serif" font-size="188" font-weight="900" fill="#050505">D</text>
  <text x="190" y="304" font-family="Georgia, serif" font-size="188" font-weight="900" fill="#050505">N</text>
  <path d="M176 176 C226 178 250 205 246 238 C242 276 207 294 166 294" fill="none" stroke="#050505" stroke-width="12" stroke-linecap="round"/>
  <path d="M185 196 L230 230 L185 266 Z" fill="#050505" opacity="0.9"/>
</svg>`);

export const BRAND_AVATAR = DHARYNAILS_LOGO;

export const NAIL_IMAGES = {
  hero: nailSvg('hero','Experiencia Premium','MANICURA · SPA · DISEÑO','#ff477e','#fcd5ce'),
  permanent: nailSvg('permanent','Manicura Rusa','ESMALTADO PREMIUM','#ff477e','#fcd5ce'),
  softgel: nailSvg('softgel','Soft Gel Luxe','SISTEMA ESCULPIDO','#e45d93','#ffffff'),
  kapping: nailSvg('kapping','Kapping Gel','TRATAMIENTO FUERZA','#dfb24c','#fcd5ce'),
  combo: nailSvg('combo','Combo Glow Spa','MANOS Y PIES VIP','#ff477e','#dfb24c'),
  promo: nailSvg('promo','Especial VIP','CLUB PREMIERE','#dfb24c','#ffffff'),
  gallery1: nailSvg('g1','Perla Francesa','MINIMALISTA','#ffffff','#fcd5ce'),
  gallery2: nailSvg('g2','Flora Pastel','FLORAL','#ff9fbd','#fcd5ce'),
  gallery3: nailSvg('g3','Oro Rosa','GEOMÉTRICO','#dfb24c','#fcd5ce'),
  gallery4: nailSvg('g4','Carmesí Dulce','LUXE','#ff477e','#ffffff'),
  gallery5: nailSvg('g5','Mármol Blush','ABSTRACTO','#fcd5ce','#ffffff'),
  gallery6: nailSvg('g6','Esmeralda Glow','ESTACIONAL','#4dd8a6','#fcd5ce'),
  gallery7: nailSvg('g7','Lámina Gold','LUXE','#dfb24c','#ffffff'),
  gallery8: nailSvg('g8','Ombré Sunset','DEGRADADO','#ff477e','#dfb24c'),
};
