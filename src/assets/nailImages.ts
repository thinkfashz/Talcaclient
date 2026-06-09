const cloudinaryImage = (publicId: string) =>
  `https://res.cloudinary.com/disghf6xc/image/upload/f_auto,q_auto,w_900/${publicId}.jpg`;

const svgData = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

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
  // Imágenes reales extraídas de la colección Cloudinary enviada por el usuario.
  // Se sirven con f_auto/q_auto/w_900 para que Cloudflare cargue rápido en Android/iPhone.
  hero: cloudinaryImage('tgozqa'),
  permanent: cloudinaryImage('omgyuw'),
  softgel: cloudinaryImage('yw65us'),
  kapping: cloudinaryImage('yae5aj'),
  combo: cloudinaryImage('nrtfuq'),
  promo: cloudinaryImage('ninmez'),
  gallery1: cloudinaryImage('b1bgrc'),
  gallery2: cloudinaryImage('omgyuw'),
  gallery3: cloudinaryImage('za5iop'),
  gallery4: cloudinaryImage('ninmez'),
  gallery5: cloudinaryImage('qaeuln'),
  gallery6: cloudinaryImage('nrtfuq'),
  gallery7: cloudinaryImage('j7aqgs'),
  gallery8: cloudinaryImage('tgozqa'),
};
