import { workoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(workoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
