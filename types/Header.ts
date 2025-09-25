export type Header = {
  navigation?: {
    title?: string;
    sectionId?: string;
  }[];
  phone?: string;
  address?: {
    name?: string;
    link?: string;
  };
  email?: string;
};
