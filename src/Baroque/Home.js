import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
       <div>
      <div className='w-10/12 h-2 mt-2'></div>
      <img  className="-mt-20" src="https://baroque.pk/cdn/shop/files/MAin_BAnner94.jpg?v=1738656243&width=2000 " alt=""/>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
      <button className="bg-white text-black px-6 py-2 w-40 mt-20 h-12">STITCHED</button>
      <button className="bg-black text-white px-6 py-2 w-40  mt-20">UNSTITCHED</button>
      </div>
      </div>
      <div class="flex mt-24 mb-3">
  <div class="flex mx-5" >
    <img  src="./Images/flex-1.webp" alt=""/>

  </div>
  <div class="flex mx-5">
  <img src="./Images/flex-2.webp" alt=""/>
  </div>
  <div class="flex mx-5">
  <img src="./Images/flex-3.webp" alt=""/>
  </div>
</div>

<div class="flex mb-3">
  <div class="ms-20 text-3xl font-serif">CHANTELLE</div>
  <div class="ms-60 text-3xl font-serif">READY TO WEAR</div>
  <div class="ms-60 text-3xl font-serif">SHAWLS</div>
</div>
<div class="flex">
<div><button class="bg-black w-40 h-12 text-white ml-24 mr-72">SHOP NOW</button></div>
<div><button  class="bg-black w-40 h-12 text-white mr-5">SHOP NOW</button></div>
<div><button  class="bg-black w-40 h-12 text-white ml-64 mr-20">SHOP NOW</button></div>
</div>
<br/><br/><br/><br/>
<hr/>
<br/><br/><br/>
<div class="ml-14 text-4xl font-light mb-20 ">
  <u>SHOP THE LOOK</u></div>

  <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <div className='flex'>
        <img
          className=" w-50 h-full ml-36 mr-20"
           src="https://baroque.pk/cdn/shop/files/Shop_The_Look92.jpg?v=1738051812" alt="First slide"/>
           {/* SMALL IMG 1 */}
         <div className="h-96 w-56 mt-20">
        <img src="https://baroque.pk/cdn/shop/files/65_889fa37c-e256-48fc-84b2-52a924288dc7.jpg?v=1737462104&width=600" alt=""></img>
        <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
        <div className='font-serif'>PKR 29,900.00</div>
        <button className='bg-black w-44 h-12 text-white mt-3'>VIEW PRODUCT</button>
         </div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <img
          className=" w-50 h-full ml-36 mr-20"
          src="https://baroque.pk/cdn/shop/files/Shop_The_Look90.jpg?v=1736336986" alt="Second slide"/>
       {/* SMALL IMG 2 */}
       <div className="h-96 w-56 mt-20">
        <img src="https://baroque.pk/cdn/shop/files/88_a84d6f90-d659-4fab-9637-d77cfe27f98a.jpg?v=1735813514" alt=""></img>
        <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
        <div className='font-serif'>PKR 10,900.00</div>
        <button className='bg-black w-44 h-12 mt-3 text-white'>VIEW PRODUCT</button>
  </div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex'>
        <img
          className=" w-50 h-full ml-36 mr-20"
          src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt="Third slide"/>
         {/* SMALL IMG 3 */}
         <div className="h-96 w-56 mt-20">
          <img src="https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562" alt=""></img>
          <div className='font-serif w-52 mt-2'>EMBROIDERED CHIFFON PR-1056</div>
        <div className='font-serif'>PKR 29,900.00</div>
       <button className='bg-black w-44 h-12 text-white mt-3'>VIEW PRODUCT</button>
</div>
    </div>
      </Carousel.Item>
    </Carousel>

  <br/><br/><br/>
  <hr/>
  <br/><br/><br/>
  <div class="text-center text-4xl font-serif font-thin mb-20 ">BE INSPIRED</div>
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
<div class=" ml-96 text-1xl italic ">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBSCRIBE FOR NEWSLETTER</div>
<br/>
<div class="flex mb-10">
<div class="ms-20"><input placeholder="E-mail" class="ms-80 border 1 h-10 w-60"></input>&nbsp;
<button  class="bg-black mb-10 w-60">SUBSCRIBE</button></div>
</div>
<div class="flex mb-10">
 
  <div class="ms-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priority Stitching<br/>Receive your stitched orders more<br/> quickly in a timeline of 2 weeks</div>
  <div class="ms-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom SIze<br/>Get your outfit tailored to<br/>perfection as per your desired<br/>measurements</div>
  <div class="ms-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free Shipping<br/>We provide free shipping all<br/>across Pakistan on all of our<br/>orders</div>
  <div class="ms-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ORDER EXCHANGE<br/>For a hassle free exchange service,<br/>fill out the exchange form<br/></div>
</div>
<br></br> <br></br> <br></br>
    </div>
  )
}

export default Home