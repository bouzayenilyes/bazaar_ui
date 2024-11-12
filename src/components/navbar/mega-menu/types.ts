export type Nav = {
  title: string;
  url: string;
};

export type NavWithChild = {
  title: string;
  child: Nav[];
};
