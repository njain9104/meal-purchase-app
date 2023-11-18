import { FC, ReactNode, createContext, useContext, useState } from "react";
import getMeals, { Meals } from "../apiMocks/getMeals";

const Context = createContext({
  mealItems: [],
  fetchMealItems: async () => {
    //
  },
} as {
  mealItems: Meals;
  fetchMealItems: (pageno?: number, size?: number) => Promise<void>;
});

export const useMealContext = () => useContext(Context);

const MealContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [mealItems, setMealItems] = useState<Meals>([]);

  const fetchMealItems = async (pageno = 1, size = 3) => {
    const response = await getMeals(pageno, size);
    setMealItems(response.data);
  };

  return (
    <Context.Provider value={{ mealItems, fetchMealItems }}>
      {children}
    </Context.Provider>
  );
};

export default MealContext;
