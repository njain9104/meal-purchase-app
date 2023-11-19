import { FC, ReactNode, createContext, useContext, useState } from "react";

export enum PassengerIds {
  psg1 = "psg1",
  psg2 = "psg2",
}

export type PassengerSelectionDetails = {
  meals: Set<string>;
  drinks: Set<string>;
};

export type PassengerSelections = Record<
  PassengerIds,
  PassengerSelectionDetails
>;

const INIT_PASSENGER_SELECTION: PassengerSelections = {
  [PassengerIds.psg1]: {
    meals: new Set(),
    drinks: new Set(),
  },
  [PassengerIds.psg2]: {
    meals: new Set(),
    drinks: new Set(),
  },
};

const Context = createContext({
  currentPassenger: PassengerIds.psg1,
  currentPassengerSelection: { meals: new Set(), drinks: new Set() },
  passengerSelections: INIT_PASSENGER_SELECTION,
  updateCurrentPassenger: () => {},
  onSelectMeal: () => {},
  onSelectDrink: () => {},
} as {
  currentPassengerSelection: PassengerSelectionDetails;
  passengerSelections: PassengerSelections;
  updateCurrentPassenger: (id: PassengerIds) => void;
  currentPassenger: PassengerIds;
  onSelectMeal: (selectedIds: string[], unselectedIds: string[]) => void;
  onSelectDrink: (selectedIds: string[], unselectedIds: string[]) => void;
});

export const useOrderContext = () => useContext(Context);

const OrderContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [passengerSelections, setPassengerSelections] =
    useState<PassengerSelections>(INIT_PASSENGER_SELECTION);

  const [currentPassenger, setCurrentPassenger] = useState<PassengerIds>(
    PassengerIds.psg1
  );

  const onSelectMeal = (selectedIds: string[], unselectedIds: string[]) => {
    setPassengerSelections((prev) => {
      const meals = new Set(prev[currentPassenger].meals);
      selectedIds.forEach((id) => {
        meals.add(id);
      });
      unselectedIds.forEach((id) => {
        meals.delete(id);
      });
      return {
        ...prev,
        [currentPassenger]: { meals, drinks: prev[currentPassenger].drinks },
      };
    });
  };

  const onSelectDrink = (selectedIds: string[], unselectedIds: string[]) => {
    setPassengerSelections((prev) => {
      const drinks = new Set(prev[currentPassenger].drinks);
      selectedIds.forEach((id) => {
        drinks.add(id);
      });
      unselectedIds.forEach((id) => {
        drinks.delete(id);
      });
      return {
        ...prev,
        [currentPassenger]: {
          drinks,
          meals: prev[currentPassenger].meals,
        },
      };
    });
  };

  const updateCurrentPassenger = (id: PassengerIds) => {
    setCurrentPassenger(id);
  };

  return (
    <Context.Provider
      value={{
        currentPassenger,
        currentPassengerSelection: passengerSelections[currentPassenger],
        passengerSelections,
        updateCurrentPassenger,
        onSelectMeal,
        onSelectDrink,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default OrderContext;
