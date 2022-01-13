import { hideLoader, showLoader } from "../reducers/appReducer";
import { setCars } from "../reducers/carReducer";

const API_URL = "/api/cars";

export function getCars() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      let url = `${API_URL}`;
      const response = await fetch(url).then((response) => response.json());

      await dispatch(setCars(response));
      dispatch(hideLoader());
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(hideLoader());
    }
  };
}
