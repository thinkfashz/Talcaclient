const host = 'https://res.cloudinary.com/disghf6xc/image/upload/';
const opt = 'f_auto,q_auto:good,w_900,c_limit/';
const p = (...parts: string[]) => `${host}${opt}${parts.join('')}`;

export const DHARYNAILS_LOGO = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420"><rect width="420" height="420" rx="210" fill="#f5f2ee"/><text x="100" y="304" font-family="Georgia,serif" font-size="188" font-weight="900" fill="#050505">D</text><text x="190" y="304" font-family="Georgia,serif" font-size="188" font-weight="900" fill="#050505">N</text></svg>`)}`;
export const BRAND_AVATAR = DHARYNAILS_LOGO;

const C = {
  eqdarh: p('v1781040394/8f8e','ab848a591993437f','8a796410811a_eqdarh.jpg'),
  ninmez: p('v1781040394/4afe','bf68a27ee9c1df8a','ef0edfd4bcd7_ninmez.jpg'),
  yae5aj: p('v1781040393/63e1','6c69e1191c46f22b','b271d66f8940_yae5aj.jpg'),
  tgozqa: p('v1781040393/f96b','6ab3e5eebbaac2d9','cb7aed8bcdf1_tgozqa.jpg'),
  nrtfuq: p('v1781040393/bdade','62d68cdf5d6ed2179','b887e0519d_nrtfuq.jpg'),
  yw65us: p('v1781040392/3606','c27ebbc4e79e7155','99a3bd90e82a_yw65us.jpg'),
  b1bgrc: p('v1781040392/b312','e95e4af1d7b3f605','f6f14ef9b743_b1bgrc.jpg'),
  za5iop: p('v1781040392/60f5','d1a2f6464bcf3ea1','9fad37f35c6c_za5iop.jpg'),
  j7aqgs: p('v1781040392/d05f','75d831d34fac96ed','50cd53ccdc73_j7aqgs.jpg'),
  omgyuw: p('v1781040394/30a3','af89eb2c8cbd8de2','e6d06f9470ce_omgyuw.jpg'),
};

export const NAIL_IMAGES = {
  hero: C.tgozqa,
  permanent: C.omgyuw,
  softgel: C.yw65us,
  kapping: C.yae5aj,
  combo: C.nrtfuq,
  promo: C.ninmez,
  gallery1: C.eqdarh,
  gallery2: C.omgyuw,
  gallery3: C.za5iop,
  gallery4: C.ninmez,
  gallery5: C.yae5aj,
  gallery6: C.nrtfuq,
  gallery7: C.j7aqgs,
  gallery8: C.b1bgrc,
};
