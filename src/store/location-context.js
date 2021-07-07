import { createContext, useState } from "react";


const LockerContext = createContext({
  lockers: [],
  getLockers: (location) => {},
});


export function LockerContextProvider(props) {
  // 

  const [loadedLocations, setloadedLocations] = useState([]);

  function fetchLockers(location) {
    fetch(`http://localhost:8080/api/locker/${location}`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setloadedLocations(data);
      });
  }

  const context = {
    lockers: loadedLocations,
    getLockers: fetchLockers,
  };

  

  return (
    <LockerContext.Provider value={context}>
      {props.children}
    </LockerContext.Provider>
  );
}
export default LockerContext;
