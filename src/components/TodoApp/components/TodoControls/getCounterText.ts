export const getCounterText = (todoCount: number) => {
  if (todoCount === 0) return "No items";
  if (todoCount === 1) return "1 item left";
  if (todoCount >= 100) return "99+ items left";
  return `${todoCount} items left`;
};
