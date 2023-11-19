import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import getMeals, { Labels, Meals } from "../apiMocks/getMeals";

type FetchMealItemsCB = ({
  pageNo,
  filters,
}: {
  pageNo?: number;
  filters?: string[];
}) => Promise<void>;

type ResponseStatus = "INIT" | "LOADING" | "DONE";

type MealItemsResponse = {
  meals: Meals;
  totalCount: number;
  status: ResponseStatus;
};

const MEAL_ITEMS_RESPONSE_INIT_STATE: MealItemsResponse = {
  meals: [],
  totalCount: 0,
  status: "INIT",
};

const Context = createContext({
  mealItemsResponse: MEAL_ITEMS_RESPONSE_INIT_STATE,
  fetchMealItems: async () => {},
  labels: [],
} as {
  mealItemsResponse: MealItemsResponse;
  fetchMealItems: FetchMealItemsCB;
  labels: Labels;
});

export const useMealContext = () => useContext(Context);

const MealContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [mealItemsResponse, setMealItemsResponse] = useState<MealItemsResponse>(
    MEAL_ITEMS_RESPONSE_INIT_STATE
  );
  const [labels, setLabels] = useState<Labels>([]);

  const filtersSelected = useRef<string[]>([]);

  const fetchMealItems: FetchMealItemsCB = async ({ pageNo, filters }) => {
    setMealItemsResponse((prev) => {
      return { ...prev, status: "LOADING" };
    });
    if (filters !== undefined) {
      filtersSelected.current = [...filters];
    }
    const response = await getMeals({
      pageNo: pageNo || 1,
      filters: filtersSelected.current,
    });

    setMealItemsResponse({
      meals: response.data,
      totalCount: response.totalCount,
      status: "DONE",
    });
    setLabels(response.labels);
  };

  return (
    <Context.Provider value={{ mealItemsResponse, fetchMealItems, labels }}>
      {children}
    </Context.Provider>
  );
};

export default MealContext;
