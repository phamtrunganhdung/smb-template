export interface ContentPopular {
  label: string;
  img?: string;
  subLabel?: string;
}

export interface ContentTypeList {
  label: string;
  children: ContentPopular[];
}
