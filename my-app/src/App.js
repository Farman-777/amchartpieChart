// import ProductCart from "./component/ProductCart";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import Navabar from "./component/Navbar";
// import Dropdown from "./component/Dropdown";
// import RandomNum from "./practice/RandomNum";

// function App() {
//   // const [data, setData] = useState([]);
//   // const getData = () => {
//   //   axios
//   //     .get("https://fakestoreapi.com/products")
//   //     .then((result) => {
//   //       setData(result.data);
//   //       console.log(result.data);
//   //     })
//   //     .catch((error) => console.log(error));
//   // };

//   // useEffect(() => {
//   //   getData();
//   // }, []);
//   return (
//     <div className="App">
//       {/* <Navabar />
//       <div className="main-container">
//         {data.map((data) => (
//           <ProductCart 
//           id={data.id}
//            image={data.image}
//             title={data.title}
//             price={data.price}
//             rating={data.rating.rate}
//             />
//         ))}
//       </div> */}
//       {/* <Dropdown /> */}
//       <RandomNum />
   
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import NewChart from "./NewChart";



function App() {
  return (
    <div className="App">
      {/* <NewArray /> */}
<NewChart />
    </div>
  );
}

export default App;

