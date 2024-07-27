type DeleteFn = {
  array: string[];
  index: number;
  stateFn: (newArray: string[]) => any;
};

export const deleteFn = ({ array, index, stateFn }: DeleteFn) => {
  const newSizes = array.filter((_, i) => i !== index);
  stateFn(newSizes);
};

export default deleteFn;
