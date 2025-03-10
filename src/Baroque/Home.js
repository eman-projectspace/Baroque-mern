import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "../Component/Button.css"

function Home({ products }) {
const navigate = useNavigate();

  return (
    <div>
                                                  {/* Main Baroque Banner */}
      <div>
        <img 
        className="-mt h-96 md:h-auto md:w-auto"
        src="https://baroque.pk/cdn/shop/files/website_2.jpg?v=1741333367&width=2000" alt="Main Banner"/></div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                                                {/*STITCHED & UNSTITCHED BUTTON */}
      <button className=" 
      bg-white text-black md:px-6 md:py-2 w-40 md:mt-40 border-white border-2 h-12 mb-28
     hover:!bg-transparent hover:!border-white hover:!border-2 hover:!text-white hover:!duration-500 ease-in-out"
      onClick={() => navigate("/stitched")}>STITCHED</button>
      <button className="bg-black text-white md:px-6 md:py-2 w-40 md:mt-40 h-12
      hover:!bg-transparent hover:!border-black hover:!border-2  hover:!text-black hover:!duration-500 ease-in-out"
       onClick={() => navigate("/unstitched")}>UNSTITCHED</button>
       </div>
                                     {/* Category Section (Ready to Wear, Chantelle, Shawls) */}
      <div className="md:flex md:justify-center mt-20 ml-5 mr-5 md:space-x-12 mb-28">
        <div>
          <img 
            className="md:w-[350px] md:h-[500px] md:object-cover
            transition-transform duration-100 hover:animate-pulse cursor-pointer " 
            src="https://baroque.pk/cdn/shop/files/02_Banner242.jpg?v=1738845059&width=800"alt="Ready to Wear"/>
          <p className="text-center text-2xl font-serif md:mt-2 mt-4  ">READY TO WEAR</p>
          <button
            className="bg-black text-white md:px-6 py-2 w-40 h-12 border-2  md:mt-7 md:mb-2 mb-5 mt-2 md:ml-20 ml-56
              hover:!bg-transparent hover:!border-black hover:!border-2
             hover:!text-black hover:!duration-500 ease-in-out"
            onClick={() => navigate("/readytowear")}>SHOP NOW</button>
        </div>

        <div>
          <img 
            className="md:w-[350px] md:h-[500px]  md:object-cover
             transition-transform duration-100 hover:animate-pulse cursor-pointer" 
            src="https://baroque.pk/cdn/shop/files/02_Banner240.jpg?v=1738051357&width=800" 
            alt="Chantelle"  onClick={() => navigate("/chantelle")}/>
          <p className="text-center text-2xl font-serif md:mt-2 mt-4">CHANTELLE</p>
          <button
            className="bg-black text-white md:px-6 py-2 w-40  md:mt-7 md:mb-2 mb-5 mt-2
              hover:!bg-transparent hover:!border-black hover:!border-2 h-12 border-2 
             hover:!text-black hover:!duration-500 ease-in-out md:ml-20 ml-56"
            onClick={() => navigate("/chantelle")}>SHOP NOW</button>
        </div>

        <div>
          <img 
            className="md:w-[350px] md:h-[500px] object-cover
             transition-transform duration-100 hover:animate-pulse cursor-pointer" 
            src="https://baroque.pk/cdn/shop/files/02_Banner239.jpg?v=1738051379&width=800" 
            alt="Shawls" 
            onClick={() => navigate("/shawls")} />
          <p className="text-center text-2xl font-serif md:mt-2 mt-4">INTERMIX</p>
          <button
            className="bg-black text-white md:px-6 py-2 w-40  md:mt-7 md:mb-2 mb-5 mt-2
              hover:!bg-transparent hover:!border-black hover:!border-2 h-12 border-2 
             hover:!text-black hover:!duration-500 ease-in-out md:ml-24 ml-60"
            onClick={() => navigate("/shawls")}>SHOP NOW</button>
        </div>
      </div>
<hr/>
                                                     {/*SHOP THE LOOK  */}
       <br/><br/><br/>
 <div className="text-center text-4xl font-light mb-20 ">
   <u>SHOP THE LOOK</u></div>
   {/*Carousel start  */}
   <Carousel data-bs-theme="dark" className="md:ml-32 md:mr-32 h-auto w-auto mb-56">
       <Carousel.Item >
         <div className='flex'>
         <img
           className=" md:w-2/4 md:h-full md:mr-20 "
            src="https://baroque.pk/cdn/shop/files/Shop_The_Look92.jpg?v=1738051812" alt="First slide"/>
           {/* SMALL IMG 1 */}
         <div className="md:h-96 md:w-56 md:mt-20">
        <img src="https://baroque.pk/cdn/shop/files/65_889fa37c-e256-48fc-84b2-52a924288dc7.jpg?v=1737462104&width=600" alt=""></img>
        <div className='font-serif md:w-52 md:mt-2'>EMBROIDERED CHIFFON PR-1056</div>
       
        <div className='font-serif'>PKR 29,900.00</div>
        <button className='md:w-44 md:h-12 md:mt-3
          bg-black text-white    hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out'>VIEW PRODUCT</button>
         </div>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <img
         className=" md:w-2/4 md:h-full md:mr-20 "
          src="https://baroque.pk/cdn/shop/files/Shop_The_Look90.jpg?v=1736336986" alt="Second slide"/>
       {/* SMALL IMG 2 */}
       <div className="md:h-96 md:w-56 md:mt-20">
        <img src="https://baroque.pk/cdn/shop/files/88_a84d6f90-d659-4fab-9637-d77cfe27f98a.jpg?v=1735813514" alt=""></img>
        <div className='font-serif md:w-52 md:mt-2'>EMBROIDERED CHIFFON PR-1056</div>
        <div className='font-serif'>PKR 10,900.00</div>
        <button className='bg-black md:w-44 md:h-12 text-white md:mt-3
          hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out'>VIEW PRODUCT</button>
  </div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <img
          className=" md:w-2/4 md:h-full  md:mr-20"
          src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt="Third slide"/>
         {/* SMALL IMG 3 */}
         <div className="md:h-96 md:w-56 md:mt-20">
          <img src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt=""></img>
          <div className='font-serif md:w-52 md:mt-2'>EMBROIDERED CHIFFON PR-1056</div>
        <div className='font-serif'>PKR 29,900.00</div>
        <button className='md:w-44 md:h-12 md:mt-3
        h-20 w-20
        text-white
          hover:!bg-transparent hover:!border-black border-2 hover:!text-black bg-black hover:!duration-500 ease-in-out"'>VIEW PRODUCT</button>
</div>
    </div>
      </Carousel.Item>
    </Carousel>
                                                   {/* BE INSPIRED */}
  <br/><br/><br/>
  <hr/>
  <br/><br/><br/>
  <div className="text-center text-4xl font-serif font-thin mb-20 ">BE INSPIRED</div>
  <div className="flex flex-col md:flex-row md:space-x-7 md:ml-16 ml-5 mr-5 ">
  <div>
    <video className="md:h-[500px] md:w-[350px] mb-16
     cursor-pointer object-cover"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/66c69f47322c49cfb73d44220fc567fc/66c69f47322c49cfb73d44220fc567fc.HD-1080p-2.5Mbps-40062159.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted  />
       <div className="absolute -mt-44 ml-48  md:-mt-36 md:ml-20 ">
      <button className=" 
      bg-black text-white  w-40  h-12
     hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
      onClick={() => navigate("/")}>CLIENT LOVE</button></div>
  </div>
  <div>
    <video className="md:h-[500px] md:w-[350px] mb-16 cursor-pointer object-cover"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/8335de5a5387470494ab6c998865d268/8335de5a5387470494ab6c998865d268.HD-1080p-2.5Mbps-40062160.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted />
  <div className="absolute -mt-40 ml-52 md:-mt-36 md:ml-20">
      <button className=" 
      bg-black text-white  w-40  h-12 
     hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
      onClick={() => navigate("/stitched")}>CELEBERITY STYLE</button>
  </div></div>
  <div>
    <video className="md:h-[500px] md:w-[350px] cursor-pointer object-cover"  
      src="https://baroque.pk/cdn/shop/videos/c/vp/3398a9dc34404ca78f8621b87f59e445/3398a9dc34404ca78f8621b87f59e445.HD-1080p-2.5Mbps-40062158.mp4?v=0"
      type="video/mp4" playsInline autoPlay loop muted  />
  <div className="absolute -mt-20 ml-52 md:-mt-20 md:ml-20 ">
      <button className=" 
      bg-black text-white  w-40  h-12 mr-20
     hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out"
      onClick={() => navigate("/stitched")}>STYLE SPOTTED</button>
  </div>  </div>
</div>

<br/><br/><br/><br/>
<hr/>
<br/><br/><br/><br/>
              <div className="text-center text-1xl font-sans ">SUBSCRIBE FOR NEWSLETTER</div>
<br/>
<div className="flex mb-24">
<div className="flex-col md:flex-row flex ml-36">
  <input placeholder="E-mail" className="md:ml-72 border 1 h-12 w-80 "/>&nbsp;
   <button  className="bg-black  h-12 w-80  text-white
   hover:!bg-transparent hover:!border-black hover:!border-2
  hover:!text-black hover:!duration-500 ease-in-out">SUBSCRIBE</button></div>
</div>
                            {/* Features Section */}
          <div className="flex md:flex-row flex-col md:gap-3 ml-10 mr-10 mb-5">
            <p className="text-xl mb-2 font-thin"><span className="font-semibold">Priority Stitching</span><br/>
            Receive your stitched orders more quickly in a timeline of 2 weaks.</p>
            <br/> <br/>
            <p className="text-xl mb-2 font-thin "><span className="font-semibold">Custom Size</span><br/>
            Get your outfit tailored to perfection as per your desired measurements</p>
            <br/> <br/>
            <p className="text-xl mb-2 font-thin "><span className="font-semibold">Free Shipping</span><br/>
            We provide free shipping all across Pakistan on all of our orders</p>
            <br/> <br/>
            <p className="text-xl mb-2 font-thin"><span className="font-semibold">Order Exchange</span><br/>
            For a hassle-free exchange service, fill out the exchange form</p>
  {/* {[
    { title: "Priority Stitching", desc: "Receive your stitched orders more quickly in a timeline of 2 weeks" },
    { title: "Custom Size", desc: "Get your outfit tailored to perfection as per your desired measurements" },
    { title: "Free Shipping", desc: "We provide free shipping all across Pakistan on all of our orders" },
    { title: "Order Exchange", desc: "For a hassle-free exchange service, fill out the exchange form" },
  ].map((feature, index) => (
    <div key={index} className="text-center max-w-[200px]">
      <p className="font-serif text-lg font-medium">{feature.title}</p>
      <p className="text-sm mt-2">{feature.desc}</p>
    </div>
  ))} */}
</div>
</div>

   )
 }
 export default Home