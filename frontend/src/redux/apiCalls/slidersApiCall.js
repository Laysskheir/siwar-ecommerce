import { sliderActions } from "../slices/sliderSlice";
import axios from "axios";

export function getSliders() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/`);
        const data = response.data; // Use response.data instead of response.json()
  
        dispatch(sliderActions.setSliders(data.sliders));
        dispatch(sliderActions.setCategories(data.categories)) // Access the sliders array from the data object
      } catch (error) {
        console.error(error);
      }
    };
  }
  

 