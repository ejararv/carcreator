const SET_CAR_MODEL = "SET_CAR_MODEL";
const SET_CAR_COLOR = "SET_CAR_COLOR";

const defaultState = {
  color: "#000000",
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CAR_MODEL:
      return { ...state, car: action.payload };
    case SET_CAR_COLOR:
      return { ...state, color: action.payload };

    default:
      return state;
  }
}

export const setFiles = (carModel) => ({
  type: SET_CAR_MODEL,
  payload: carModel,
});

export const setColor = (carColor) => ({
  type: SET_CAR_MODEL,
  payload: carColor,
});
