
// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate(); // Hook to navigate
//   return (
//     <div>
//        <div>
//       <div className='w-10/12 h-2 mt-2'></div>
//       <img  className="-mt-20" src="https://baroque.pk/cdn/shop/files/MAin_BAnner94.jpg?v=1738656243&width=2000 " alt=""/>
//       <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
//       {/* BUTTON */}
//      <button className=" 
//      bg-white text-black px-6 py-2 w-40  mt-20 border-white border-2
//      hover:!bg-transparent hover:!border-white hover:!border-2 hover:!text-white hover:!duration-500 ease-in-out"
//       onClick={() => navigate("/stitched")}>STITCHED</button>
//       <button
//        className="bg-black text-white px-6 py-2 w-40  mt-20
//        hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
//        onClick={() => navigate("/unstitched")}>UNSTITCHED</button>
//       </div>
//       </div>
//       <div className="flex mt-24 mb-3">
//   <div className="flex mx-5" >
//     <img  src="https://baroque.pk/cdn/shop/files/02_Banner242.jpg?v=1738845059&width=800" alt=""/>
//   </div>
//   <div className="flex mx-5">
//   <img src="https://baroque.pk/cdn/shop/files/02_Banner240.jpg?v=1738051357&width=800" alt=""/>
//   </div>
//   <div className="flex mx-5">
//   <img src="https://baroque.pk/cdn/shop/files/02_Banner239.jpg?v=1738051379&width=800" alt=""/>
//   </div>
// </div>

// <div className="flex mb-3 ml-20 space-x-48">
//   <div className="mr-20 text-2xl font-serif font-light">READY TO WEAR</div>
//   <div className=" text-2xl font-serif font-light">CHANTELLE</div>
//   <div className=" text-2xl font-serif font-light"><p className='ml-28'>SHAWLS</p></div>
// </div>
// <div className="flex">
// <div><button className="bg-black w-40 h-12 text-white ml-24 mr-72
//  hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out "
//   onClick={() => navigate("/readytowear")}>SHOP NOW</button></div>
// <div><button  className="bg-black w-40 h-12 text-white mr-5
//  hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
//   onClick={() => navigate("/chantelle")}>SHOP NOW</button></div>
// <div><button  className="bg-black w-40 h-12 text-white ml-64 mr-20
//  hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
//   onClick={() => navigate("/shawls")}>SHOP NOW</button></div>
// </div>
// <br/><br/><br/><br/>
// <hr/>
// <br/><br/><br/>
// <div className="ml-14 text-4xl font-light mb-20 ">
//   <u>SHOP THE LOOK</u></div>

//   <Carousel data-bs-theme="dark">
//       <Carousel.Item >
//         <div className='flex'>
//         <img
//           className=" w-50 h-full ml-36 mr-20"
//            src="https://baroque.pk/cdn/shop/files/Shop_The_Look92.jpg?v=1738051812" alt="First slide"/>
//            {/* SMALL IMG 1 */}
//          <div className="h-96 w-56 mt-20">
//         <img src="https://baroque.pk/cdn/shop/files/65_889fa37c-e256-48fc-84b2-52a924288dc7.jpg?v=1737462104&width=600" alt=""></img>
//         <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
//         <div className='font-serif'>PKR 29,900.00</div>
//         <button className='bg-black w-44 h-12 text-white mt-3
//           hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"'>VIEW PRODUCT</button>
//          </div>
//     </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className='flex'>
//         <img
//           className=" w-50 h-full ml-36 mr-20"
//           src="https://baroque.pk/cdn/shop/files/Shop_The_Look90.jpg?v=1736336986" alt="Second slide"/>
//        {/* SMALL IMG 2 */}
//        <div className="h-96 w-56 mt-20">
//         <img src="https://baroque.pk/cdn/shop/files/88_a84d6f90-d659-4fab-9637-d77cfe27f98a.jpg?v=1735813514" alt=""></img>
//         <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
//         <div className='font-serif'>PKR 10,900.00</div>
//         <button className='bg-black w-44 h-12 mt-3 text-white
//          hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out'>VIEW PRODUCT</button>
//   </div>
//     </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className='flex'>
//         <img
//           className=" w-50 h-full ml-36 mr-20"
//           src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt="Third slide"/>
//          {/* SMALL IMG 3 */}
//          <div className="h-96 w-56 mt-20">
//           <img src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt=""></img>
//           <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
//         <div className='font-serif'>PKR 29,900.00</div>
//        <button className='bg-black w-44 h-12 text-white mt-3
//          hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"'>VIEW PRODUCT</button>
// </div>
//     </div>
//       </Carousel.Item>
//     </Carousel>

//   <br/><br/><br/>
//   <hr/>
//   <br/><br/><br/>
//   <div className="text-center text-4xl font-serif font-thin mb-20 ">BE INSPIRED</div>
//   <div className="flex space-x-8 ml-20">
//   <div>
//     <video className="h-[500px] w-[350px] cursor-pointer"  
//       src="https://baroque.pk/cdn/shop/videos/c/vp/66c69f47322c49cfb73d44220fc567fc/66c69f47322c49cfb73d44220fc567fc.HD-1080p-2.5Mbps-40062159.mp4?v=0"
//       type="video/mp4" playsInline autoPlay loop muted  />
//   </div>
//   <div>
//     <video className="h-[500px] w-[350px] cursor-pointer"  
//       src="https://baroque.pk/cdn/shop/videos/c/vp/8335de5a5387470494ab6c998865d268/8335de5a5387470494ab6c998865d268.HD-1080p-2.5Mbps-40062160.mp4?v=0"
//       type="video/mp4" playsInline autoPlay loop muted />
//   </div>
//   <div>
//     <video className="h-[500px] w-[350px] cursor-pointer"  
//       src="https://baroque.pk/cdn/shop/videos/c/vp/3398a9dc34404ca78f8621b87f59e445/3398a9dc34404ca78f8621b87f59e445.HD-1080p-2.5Mbps-40062158.mp4?v=0"
//       type="video/mp4" playsInline autoPlay loop muted  />
//   </div>
// </div>

// <br/><br/><br/><br/>
// <hr/>
// <br/><br/><br/><br/>
// <div className="text-center text-1xl font-serif ">SUBSCRIBE FOR NEWSLETTER</div>
// <br/>
// <div className="flex mb-24">
// <div className="ms-20"><input placeholder="E-mail" className="ml-72 border 1 h-12 w-72"></input>&nbsp;
// <button  className="bg-black  h-12 w-72 text-white
//  hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out">SUBSCRIBE</button></div>
// </div>
// <div className="flex mb-10 ml-20 space-x-14">
//   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Priority Stitching</p><br/>Receive your stitched orders more<br/> quickly in a timeline of 2 weeks</div>
//   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Custom SIze</p><br/>Get your outfit tailored to<br/>perfection as per your desired<br/>measurements</div>
//   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Free Shipping</p><br/>We provide free shipping all<br/>across Pakistan on all of our<br/>orders</div>
//   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>ORDER EXCHANGE</p><br/>For a hassle free exchange service,<br/>fill out the exchange form<br/></div>
// </div>
// <br></br> <br></br> <br></br>
//     </div>
//   )
// }

// export default Home

import { useNavigate } from "react-router-dom";

function Home({ products }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Main Banner */}
      <div>
        <img 
        className="-mt-20 w-full"
        src="https://baroque.pk/cdn/shop/files/MAin_BAnner94.jpg?v=1738656243&width=2000" alt="Main Banner"/></div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
       {/*STITCHED & UNSTITCHED BUTTON */}
      <button className=" 
      bg-white text-black px-6 py-2 w-40  mt-20 border-white border-2
     hover:!bg-transparent hover:!border-white hover:!border-2 hover:!text-white hover:!duration-500 ease-in-out"
      onClick={() => navigate("/stitched")}>STITCHED</button>
      <button
        className="bg-black text-white px-6 py-2 w-40  mt-20
      hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
       onClick={() => navigate("/unstitched")}>UNSTITCHED</button>
       </div>
      {/* Category Section (Ready to Wear, Chantelle, Shawls) */}
      <div className="flex justify-center mt-10 space-x-12">
        <div>
          <img 
            className="w-[350px] h-[400px] object-cover" 
            src="https://baroque.pk/cdn/shop/files/02_Banner242.jpg?v=1738845059&width=800" 
            alt="Ready to Wear" 
          />
          <p className="text-center text-2xl font-serif mt-2">READY TO WEAR</p>
          <button
            className="bg-black w-40 h-12 text-white block mx-auto mt-2 hover:bg-transparent hover:border-black hover:border-2 hover:text-black transition duration-500"
            onClick={() => navigate("/readytowear")}
          >
            SHOP NOW
          </button>
        </div>

        <div>
          <img 
            className="w-[350px] h-[400px] object-cover" 
            src="https://baroque.pk/cdn/shop/files/02_Banner240.jpg?v=1738051357&width=800" 
            alt="Chantelle" 
          />
          <p className="text-center text-2xl font-serif mt-2">CHANTELLE</p>
          <button
            className="bg-black w-40 h-12 text-white block mx-auto mt-2 hover:bg-transparent hover:border-black hover:border-2 hover:text-black transition duration-500"
            onClick={() => navigate("/chantelle")}
          >
            SHOP NOW
          </button>
        </div>

        <div>
          <img 
            className="w-[350px] h-[400px] object-cover" 
            src="https://baroque.pk/cdn/shop/files/02_Banner239.jpg?v=1738051379&width=800" 
            alt="Shawls" 
          />
          <p className="text-center text-2xl font-serif mt-2">SHAWLS</p>
          <button
            className="bg-black w-40 h-12 text-white block mx-auto mt-2 hover:bg-transparent hover:border-black hover:border-2 hover:text-black transition duration-500"
            onClick={() => navigate("/shawls")}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-3 gap-8 p-8">
     {(products || []).map((product) => (
            <div key={product.id} className="product-card p-4 shadow-lg rounded-lg">
            <img className="w-full h-96 object-cover" src={product.image} alt={product.name} />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">PKR {product.price}</p>
            <button
              className="bg-black text-white px-4 py-2 mt-2 w-full hover:bg-transparent hover:border hover:border-black hover:text-black"
              onClick={() => navigate(`/${product.category.toLowerCase().replace(/\s+/g, '')}`)}
            >
              View Product
            </button>
          </div>
            ))}
            

     {/* <br/>
      <hr/>
   <br/>
   <div className="text-center text-4xl font-serif font-thin mb-20 ">BE INSPIRED</div>
   <div className="flex space-x-8 ml-20">
   <div>
     <video className="h-[500px] w-[350px] cursor-pointer"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/66c69f47322c49cfb73d44220fc567fc/66c69f47322c49cfb73d44220fc567fc.HD-1080p-2.5Mbps-40062159.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted  />
  </div>
  <div>
    <video className="h-[500px] w-[350px] cursor-pointer"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/8335de5a5387470494ab6c998865d268/8335de5a5387470494ab6c998865d268.HD-1080p-2.5Mbps-40062160.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted />
  </div>
  <div>
    <video className="h-[500px] w-[350px] cursor-pointer"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/3398a9dc34404ca78f8621b87f59e445/3398a9dc34404ca78f8621b87f59e445.HD-1080p-2.5Mbps-40062158.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted  />
  </div>
</div>

<br/><br/><br/><br/>
<hr/>
             <br/><br/><br/><br/>
 <div className="text-center text-1xl font-serif ">SUBSCRIBE FOR NEWSLETTER</div>
 <br/>
 <div className="flex mb-24"> <div className="ms-20"><input placeholder="E-mail" className="ml-72 border 1 h-12 w-72"></input>&nbsp;
 <button  className="bg-black  h-12 w-72 text-white
  hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out">SUBSCRIBE</button></div>
 </div>
 <div className="flex mb-10 ml-20 space-x-14">
   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Priority Stitching</p><br/>Receive your stitched orders more<br/> quickly in a timeline of 2 weeks</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Custom SIze</p><br/>Get your outfit tailored to<br/>perfection as per your desired<br/>measurements</div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>Free Shipping</p><br/>We provide free shipping all<br/>across Pakistan on all of our<br/>orders</div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='font-serif -m-4'>ORDER EXCHANGE</p><br/>For a hassle free e xchange service,<br/>fill out the exchange form<br/></div>
 </div>
 <br></br> <br></br> <br></br> */}
     </div>
</div>
   )
 }
 export default Home