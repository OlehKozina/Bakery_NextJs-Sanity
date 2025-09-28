export type JoinBakeryType = {
  heading?: string;
  form?: {
    name?: string;
    fields?: {
      label?: string;
      name?: string;
      required?: boolean;
    }[];
  };
  direction?: string;
};
