export const getDrinkKey = (mealId: string, drinkId: string) => {
  return `${mealId}-${drinkId}`;
};
