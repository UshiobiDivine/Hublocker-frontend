import BaseUrl from "./BaseUrl";
import axios from "axios";


const LocationApis = {
  getAllLockersByLocation:  (searchLoc) => {
    const lockers =  axios.get(
      `${BaseUrl}/api/locker/${searchLoc}`,
    ).then(response =>{return response.data}).catch(console.log)

    return lockers;
  },
}
export default LocationApis;
