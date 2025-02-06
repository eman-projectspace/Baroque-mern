import React from 'react'

function Home() {
  return (
    <div>
       <div className='mt-2'>
      <div className='w-10/12 h-2'></div>
      <img  className="-mt-20" src="https://baroque.pk/cdn/shop/files/MAin_BAnner93.jpg?v=1738051250&width=2000 " alt=""/>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
      <button className="bg-white text-black px-6 py-2 w-40 ">STITCHED</button>
    <button className="bg-black text-white px-6 py-2 w-40 ">UNSTITCHED</button>
      </div>
      </div>
      <div class="flex my-5">
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

<div class="flex">
  <div class="ms-20 text-3xl font-serif">CHANTELLE</div>
  <div class="ms-60 text-3xl font-serif">READY TO WEAR</div>
  <div class="ms-60 text-3xl font-serif">SHAWLS</div>
</div>
<div class="flex">
<div class="ms-20"><button class="bg-black w-40">SHOP NOW</button></div>
<div class="ml-80"><button  class="bg-black w-40">SHOP NOW</button></div>
<div class="ms-64 me-8"><button  class="bg-black w-40">SHOP NOW</button></div>
</div>
<br/><br/><br/><br/>
<hr/>
<br/><br/><br/>
<div class="ml-96 text-4xl ">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>SHOP&nbsp;&nbsp; THE &nbsp;&nbsp;LOOK</u></div>
  <br/><br/><br/>
  <div class="flex mx-40" >
    <div class="mx-8"><img src="./Images/flex-4.webp" alt=""></img></div>
    <div class="size-80 h-20 my-20"><img src="./Images/flex-5.webp" alt=""></img>
    <div className="text-1xl bold">&nbsp;&nbsp;&nbsp;&nbsp;DIGITAL PRINTED KHADDAR<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UF-4019<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PKR 6,400.00</div>
    <button class="bg-black mx-8">VIEW PRODUCT</button>
    </div></div>
  <br/><br/><br/>
  <hr/>
  <br/><br/><br/>
  <div class="ml-96 text-4xl italic ">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BE&nbsp;INSPIRED&nbsp;&nbsp;</div>
  <br></br>
  <div class="flex my-5">
  <div class="flex mx-5" >


  </div>
  <div class="flex mx-5">
  <img src="./Images/flex-2video.mp4" alt=""/>
  </div>
  <div class="flex mx-5">
  <img src="./Images/flex-3video.mp4" alt=""/>
  </div>
</div>

<div class="flex my-5">
  <div class="flex mx-5" >
    <video  src="/public/Images/flex-1video.mp4" type="video/mp4" controls alt=""/>
  
  </div>
  <div class="flex mx-5">
  <video src="/public/Images/flex-2video.mp4" type="video/mp4" controls alt=""/>
  </div>
  <div class="flex mx-5">
  <video src="/public/Images/flex-3video.mp4" type="video/mp4" controls alt=""/>
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