const SET_CAR_MODEL = "SET_CAR_MODEL";
const SET_CAR_COLOR = "SET_CAR_COLOR";
const SET_BUDGET = "SET_BUDGET";
const SET_PRICE = "SET_PRICE";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_CAR_ENGINE = "SET_CAR_ENGINE";
const SET_CARS = "SET_CARS";

const defaultState = {
  cars: {
    user: {
      money: 1000,
    },
    cars: [
      {
        id: 1,
        modelName: "PRO RS3",
        engines: ["5.2L 532BHP", "4.2L 443BHP", "3.6L 374BHP", "2.0L 116BHP"],
        automaticGearbox: "Yes",
      },
      {
        id: 2,
        modelName: "UBER RS2",
        engines: ["4.2L 443BHP", "3.6L 374BHP", "2.0L 116BHP"],
        automaticGearbox: "Yes",
      },
      {
        id: 3,
        modelName: "STANDART",
        engines: ["3.6L 374BHP", "2.0L 116BHP"],
        automaticGearbox: "No",
      },
      {
        id: 4,
        modelName: "WK",
        engines: ["2.0L 116BHP"],
        automaticGearbox: "No",
      },
    ],
    colors: [" #000000", "#0d4671", "#63803a", "#841210", "#a09e9f"],
  },
  currentCar: {},
  carModel: "",
  
  budget: 1000,
  color: "#000000",
  price: 0,
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CAR_MODEL:
      return { ...state, carModel: action.payload };
    case SET_CAR_COLOR:
      return { ...state, color: action.payload };
    case SET_BUDGET:
      return { ...state, budget: action.payload };
    case SET_PRICE:
      return { ...state, price: action.payload };
    case SET_CARS:
      return { ...state, cars: action.payload };
    case SET_CURRENT_CAR:
      return { ...state, currentCar: action.payload };
    case SET_CAR_ENGINE:
      return {
        ...state,
        currentCar: [...state.currentCar.engine, action.payload],
      };

    default:
      return state;
  }
}

export const setModel = (carModel) => ({
  type: SET_CAR_MODEL,
  payload: carModel,
});
export const setCurrentCar = (currentCar) => ({
  type: SET_CURRENT_CAR,
  payload: currentCar,
});

export const setColor = (carColor) => ({
  type: SET_CAR_COLOR,
  payload: carColor,
});
export const setBudget = (budget) => ({
  type: SET_BUDGET,
  payload: budget,
});
export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});

export const setCars = (cars) => ({
  type: SET_CARS,
  payload: cars,
});
export const setCarEngine = (engine) => ({
  type: SET_CAR_ENGINE,
  payload: engine,
});
