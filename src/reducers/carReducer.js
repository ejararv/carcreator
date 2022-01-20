const SET_CAR_MODEL = "SET_CAR_MODEL";
const SET_CAR_COLOR = "SET_CAR_COLOR";
const SET_BUDGET = "SET_BUDGET";
const SET_PRICE = "SET_PRICE";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_CAR_ENGINE = "SET_CAR_ENGINE";
const SET_CARS = "SET_CARS";
const SET_CAR_GEARBOX = "SET_CAR_GEARBOX";
const BUY_CAR = "BUY_CAR";

const defaultState = {
  data: {
    user: {
      money: 1000,
    },
    cars: [
      {
        id: 1,
        modelName: "MuscleCar",
        cost: 6000,
        engines: [
          { modelName: "5.2L 532BHP", cost: 5600 },
          { modelName: "4.2L 443BHP", cost: 4000 },
          { modelName: "3.6L 374BHP", cost: 2500 },
          { modelName: "2.0L 116BHP", cost: 1500 },
        ],
        automaticGearbox: "Yes",
      },
      {
        id: 2,
        modelName: "Porsche 911",
        cost: 5000,
        engines: [
          { modelName: "4.2L 443BHP", cost: 4000 },
          { modelName: "3.6L 374BHP", cost: 2500 },
          { modelName: "2.0L 116BHP", cost: 1500 },
        ],
        automaticGearbox: "Yes",
      },
      {
        id: 3,
        modelName: "GMC",
        cost: 3000,
        engines: [
          { modelName: "3.6L 374BHP", cost: 2500 },
          { modelName: "2.0L 116BHP", cost: 1500 },
        ],
        automaticGearbox: "No",
      },
      {
        id: 4,
        cost: 1000,
        modelName: "Fiat",
        engines: [{ modelName: "2.0L 116BHP", cost: 1500 }],
        automaticGearbox: "No",
      },
    ],
  },
  currentCar: {},
  myCars: [],
  carModel: "",
  carEngine: "",
  carGearBox: "",
  budget: 1000,
  color: "#000000",
  carPrice: 0,
};

export default function carReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CAR_MODEL:
      return {
        ...state,
        carModel: action.payload,
        carEngine: "",
        carGearBox: "",
      };
    case SET_CAR_COLOR:
      return { ...state, color: action.payload };
    case SET_BUDGET:
      return { ...state, budget: action.payload };
    case SET_PRICE:
      return { ...state, carPrice: action.payload };
    case SET_CARS:
      return { ...state, cars: action.payload };
    case SET_CURRENT_CAR:
      return { ...state, currentCar: action.payload };
    case SET_CAR_ENGINE:
      return {
        ...state,
        carEngine: action.payload,
      };
    case SET_CAR_GEARBOX:
      return {
        ...state,
        carGearBox: action.payload,
      };

    case BUY_CAR:
      return {
        ...state,
        myCars: [...state.myCars, action.payload],
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

export const setCarGearBox = (gearBox) => ({
  type: SET_CAR_GEARBOX,
  payload: gearBox,
});
export const buyCar = (car) => ({
  type: BUY_CAR,
  payload: car,
});
