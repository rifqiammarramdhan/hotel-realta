import {
  GET_LIST_CITY,
  ADD_CITY,
  DELETE_CITY,
  UPDATE_CITY,
  GET_DETAIL_CITY,
} from "../../../actions/master/locationAction";

const initialState = {
  getListCitiesResult: false,
  getListRCitiesLoading: false,
  getLisCitiesError: false,

  addCityResult: false,
  addCityLoading: false,
  addCityError: false,

  deleteCityResult: false,
  deleteCityLoading: false,
  deleteCityError: false,

  updateCityResult: false,
  updateCityLoading: false,
  updateCityError: false,

  getDetailCityResult: false,
  getDetailCityLoading: false,
  getDetailCityError: false,
};

const cities = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_CITY:
      return {
        ...state,
        getListCitiesResult: action.payload.data,
        getListRCitiesLoading: action.payload.loading,
        getLisCitiesError: action.payload.errorMessage,
      };

    case ADD_CITY:
      return {
        ...state,
        addCityResult: action.payload.data,
        addCityLoading: action.payload.loading,
        addCityError: action.payload.errorMessage,
      };

    case DELETE_CITY:
      return {
        ...state,
        deleteCityResult: action.payload.data,
        deleteCityLoading: action.payload.loading,
        deleteCityError: action.payload.errorMessage,
      };

    case UPDATE_CITY:
      return {
        ...state,
        updateCityResult: action.payload.data,
        updateCityLoading: action.payload.loading,
        updateCityError: action.payload.errorMessage,
      };

    case GET_DETAIL_CITY:
      return {
        ...state,
        getDetailCityResult: action.payload.data,
        getDetailCityLoading: action.payload.loading,
        getDetailCityError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default cities;
