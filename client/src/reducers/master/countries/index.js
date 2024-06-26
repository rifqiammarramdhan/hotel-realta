import {
  GET_LIST_COUNTRY,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  UPDATE_COUNTRY,
  GET_DETAIL_COUNTRY,
} from "../../../actions/master/locationAction";

const initialState = {
  getListCountriesResult: false,
  getListRCountriesLoading: false,
  getLisCountriesError: false,

  addCountryResult: false,
  addCountryLoading: false,
  addCountryError: false,

  deleteCountryResult: false,
  deleteCountryLoading: false,
  deleteCountryError: false,

  updateCountryResult: false,
  updateCountryLoading: false,
  updateCountryError: false,

  getDetailCountryResult: false,
  getDetailCountryLoading: false,
  getDetailCountryError: false,
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COUNTRY:
      return {
        ...state,
        getListCountriesResult: action.payload.data,
        getListRCountriesLoading: action.payload.loading,
        getLisCountriesError: action.payload.errorMessage,
      };

    case ADD_COUNTRY:
      return {
        ...state,
        addCountryResult: action.payload.data,
        addCountryLoading: action.payload.loading,
        addCountryError: action.payload.errorMessage,
      };

    case DELETE_COUNTRY:
      return {
        ...state,
        deleteCountryResult: action.payload.data,
        deleteCountryLoading: action.payload.loading,
        deleteCountryError: action.payload.errorMessage,
      };

    case UPDATE_COUNTRY:
      return {
        ...state,
        updateCountryResult: action.payload.data,
        updateCountryLoading: action.payload.loading,
        updateCountryError: action.payload.errorMessage,
      };

    case GET_DETAIL_COUNTRY:
      return {
        ...state,
        getDetailCountryResult: action.payload.data,
        getDetailCountryLoading: action.payload.loading,
        getDetailCountryError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default countries;
