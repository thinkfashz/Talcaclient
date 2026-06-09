export type TabType = 'home' | 'gallery' | 'customize' | 'promos' | 'agenda' | 'loyalty';

export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag?: string;
}

export interface Enhancement {
  id: string;
  name: string;
  price: number;
  icon: string;
}
