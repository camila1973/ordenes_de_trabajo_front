import { CityList } from "./city-list.model";

export interface Company {
  name: String;
  email:String;
  phone:String;
  address:String;
  city: CityList;
}
