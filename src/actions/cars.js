import { hideLoader, showLoader } from "../reducers/appReducer";
import { setCars } from "../reducers/carReducer";
import axios from "axios";

const API_URL = "/api/cars";

export function getCars() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      let url = `${API_URL}`;
      const response = await fetch(url).then((response) => response.json()); //Simple example with native fetch

      await dispatch(setCars(response));
      dispatch(hideLoader());
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(hideLoader());
    }
  };
}

export const postCar = (car) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}api/car`, {
        //example with axios
        car,
      });
      alert(response.data.message);
    } catch (error) {
      // alert(error?.response?.data?.message);
      alert("You bought " + car.carModel);
    }
  };
};
