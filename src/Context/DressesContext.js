// import { createContext, useState, useContext } from "react";

// // Create Context
// const DressesContext = createContext();

// // Provider Component
// export const DressesProvider = ({ children }) => {
//   const [dresses, setDresses] = useState([
//     {
//       id: 1,
//       name: "Embroidered Chiffon PR-1056",
//       price: "PKR 29,900.00",
//       img: "https://baroque.pk/cdn/shop/files/65_889fa37c-e256-48fc-84b2-52a924288dc7.jpg?v=1737462104&width=600",
//     },
//     {
//       id: 2,
//       name: "Embroidered Chiffon PR-1057",
//       price: "PKR 10,900.00",
//       img: "https://baroque.pk/cdn/shop/files/88_a84d6f90-d659-4fab-9637-d77cfe27f98a.jpg?v=1735813514",
//     },
//     {
//       id: 3,
//       name: "Embroidered Net PR-1060",
//       price: "PKR 34,500.00",
//       img: "https://baroque.pk/cdn/shop/files/Shop_The_Look90.jpg?v=1736336986",
//     },
//     {
//       id: 4,
//       name: "Luxury Chiffon PR-1049",
//       price: "PKR 18,900.00",
//       img: "https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562",
//     },
//   ]);

//   return (
//     <DressesContext.Provider value={{ dresses, setDresses }}>
//       {children}
//     </DressesContext.Provider>
//   );
// };

// // Custom Hook to Use Context
// export const useDresses = () => useContext(DressesContext);
