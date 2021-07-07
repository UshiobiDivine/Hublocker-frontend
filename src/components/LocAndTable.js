// import React, { useState, useEffect, useContext } from "react";
// import classes from "../css/LocAndTable.module.css";
// import Location from "./Location";
// import Table from "./Table";
// import Select from "react-select";
// import LockerContext from "../store/location-context";
// import { LockerContextProvider } from "../store/location-context";




// // const LockerContext = React.createContext();


// function LocAndTable() {
//   const lockerCtx = useContext(LockerContext);

//   const [loadedLocations, setloadedLocations] = useState([]);

//   const allLockers = lockerCtx.lockers;
//   console.log(`THIS IS IN THE LOCANDTABLE USING CONTEXT ${allLockers}`);

//   return (
//     <div className={classes.container}>
//       <div className={classes.item1}>
//           {/* <Location /> */}
//       </div>
//       <div className={classes.item2}>
//         <div className={classes.item22}>
//           <div>
//             <select style={{ width: "280px" }} class={classes.standardSelect}>
//               <option class={classes.option} value="Option 1">
//                 Small
//               </option>
//               <option value="" disabled selected hidden>
//                 Featured
//               </option>
//               <option class={classes.option} value="Option 2">
//                 Medium
//               </option>
//               <option class={classes.option} value="Option 2">
//                 Large
//               </option>
//             </select>
//           </div>
//           <div className={classes.atag}>
//             <a href="#">View the guide size</a>
//           </div>
//         </div>
//           {/* <Table /> */}
//       </div>
//     </div>
//   );
// }

// export default LocAndTable;
