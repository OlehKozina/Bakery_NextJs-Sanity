export type JoinBakeryType = {
  heading?: string;
  form?: FormType;
  direction?: string;
};

export type FormType = {
  name?: string;
  buttonLabel?: string;
  fields?: {
    label?: string;
    name?: string;
    required?: boolean;
    type?: string;
  }[];
};
