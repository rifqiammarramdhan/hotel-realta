import {
  GET_LIST_PROVINCE,
  ADD_PROVINCE,
  DELETE_PROVINCE,
  UPDATE_PROVINCE,
  GET_DETAIL_PROVINCE,
} from "../../../actions/master/locationAction";

const initialState = {
  getListProvincesResult: false,
  getListRProvincesLoading: false,
  getLisProvincesError: false,

  addProvinceResult: false,
  addProvinceLoading: false,
  addProvinceError: false,

  deleteProvinceResult: false,
  deleteProvinceLoading: false,
  deleteProvinceError: false,

  updateProvinceResult: false,
  updateProvinceLoading: false,
  updateProvinceError: false,

  getDetailProvinceResult: false,
  getDetailProvinceLoading: false,
  getDetailProvinceError: false,
};

const provinces = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_PROVINCE:
      return {
        ...state,
        getListProvincesResult: action.payload.data,
        getListRProvincesLoading: action.payload.loading,
        getLisProvincesError: action.payload.errorMessage,
      };

    case ADD_PROVINCE:
      return {
        ...state,
        addProvinceResult: action.payload.data,
        addProvinceLoading: action.payload.loading,
        addProvinceError: action.payload.errorMessage,
      };

    case DELETE_PROVINCE:
      return {
        ...state,
        deleteProvinceResult: action.payload.data,
        deleteProvinceLoading: action.payload.loading,
        deleteProvinceError: action.payload.errorMessage,
      };

    case UPDATE_PROVINCE:
      return {
        ...state,
        updateProvinceResult: action.payload.data,
        updateProvinceLoading: action.payload.loading,
        updateProvinceError: action.payload.errorMessage,
      };

    case GET_DETAIL_PROVINCE:
      return {
        ...state,
        getDetailProvinceResult: action.payload.data,
        getDetailProvinceLoading: action.payload.loading,
        getDetailProvinceError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default provinces;
