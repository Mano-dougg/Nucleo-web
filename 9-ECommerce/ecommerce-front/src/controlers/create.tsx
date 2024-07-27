type CreateFn = {
  stateFn: (elemento: string) => void;
  item: string;
};

export const createFn = ({ stateFn, item }: CreateFn) => {
  stateFn(item);
};

export default createFn;
