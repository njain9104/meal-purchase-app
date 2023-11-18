import { FC, ReactNode, createContext, useContext, useState } from "react";

export enum PassengerIds {
  psg1 = "psg1",
  psg2 = "psg2",
}

const Context = createContext({
  passengerSelections: {},
  updateCurrentPassenger: () => {},
  currentPassenger: PassengerIds.psg1,
} as {
  passengerSelections: unknown;
  updateCurrentPassenger: (id: PassengerIds) => void;
  currentPassenger: PassengerIds;
});

export const useOrderContext = () => useContext(Context);

const OrderContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [passengerSelections, setPassengerSelections] = useState({
    psg1: {},
    psg2: {},
  });
  const [currentPassenger, setCurrentPassenger] = useState<PassengerIds>(
    PassengerIds.psg1
  );

  const updateSelection = () => {
    setPassengerSelections((prev) => {
      return { ...prev, [currentPassenger]: {} };
    });
  };

  const updateCurrentPassenger = (id: PassengerIds) => {
    setCurrentPassenger(id);
    updateSelection();
  };

  return (
    <Context.Provider
      value={{ passengerSelections, updateCurrentPassenger, currentPassenger }}
    >
      {children}
    </Context.Provider>
  );
};

export default OrderContext;
