import { combineReducers } from "redux";
import RegionsReducer from "./master/regions";
import CountriesReducer from "./master/countries";
import ProvincesReducer from "./master/provinces";
import CitiesReducer from "./master/cities";
import PoliciesReducer from "./master/policies";
import CategoriesReducer from "./master/categories";
import PriceItemsReducer from "./master/priceitems";
import ServiceTasksReducer from "./master/servicetasks";
import list from "./HR";
import { vendorReducers, stockReducers, galleryReducers, orderReducers, orderDataReducers } from "./purchasing";

export default combineReducers({
  vendorReducers,
  stockReducers,
  galleryReducers,
  orderReducers,
  orderDataReducers,
  RegionsReducer,
  CountriesReducer,
  ProvincesReducer,
  CitiesReducer,
  PoliciesReducer,
  CategoriesReducer,
  PriceItemsReducer,
  ServiceTasksReducer,
  list
});
