// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const DressDetails = () => {
//   const { id } = useParams();
//   const [dress, setDress] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8888/api/dresses/${id}`)
//       .then((res) => res.json())
//       .then((data) => setDress(data));
//   }, [id]);

//   if (!dress) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{dress.name}</h2>
//       <img src={dress.image} alt={dress.name} />
//       <p>{dress.description}</p>
//       <p>Price: ${dress.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default DressDetails;
