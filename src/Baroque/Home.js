import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "../Component/Button.css"

function Home({ products }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Main Banner */}
      <div>
        <img
          className="w-full h-64 md:h-auto object-cover"
          src="https://baroque.pk/cdn/shop/files/essential_banner_1.jpg?v=1744492537&width=2000"
          alt="Main Banner"
        />
      </div>
      <div className="text-center mt-[-40px] md:absolute md:top-3/4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <button
          className="bg-black text-white px-6 py-2 hover:translate-x-1 transition-all duration-700"
          onClick={() => navigate("/unstitched")}
        >
          SHOP NOW
        </button>
      </div>

      {/* Category Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-16 px-4">
        {[{
          img: "https://baroque.pk/cdn/shop/files/11111_1.jpg?v=1744714701&width=1000",
          label: "UNSTITCHED",
          path: "/unstitched",
        }, {
          img: "https://baroque.pk/cdn/shop/files/02_Banner240.jpg?v=1738051357&width=800",
          label: "CHANTELLE",
          path: "/chantelle",
        }, {
          img: "https://baroque.pk/cdn/shop/files/02_Banner239.jpg?v=1738051379&width=800",
          label: "INTERMIX",
          path: "/shawls",
        }].map((item, idx) => (
          <div key={idx} className="text-center">
            <img
              src={item.img}
              className="w-full md:w-[350px] md:h-[500px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              alt={item.label}
              onClick={() => navigate(item.path)}
            />
            <p className="text-2xl font-serif mt-4">{item.label}</p>
            <button
              className="button-slide mt-3 px-6 py-2"
              onClick={() => navigate(item.path)}
            >SHOP NOW</button>
          </div>
        ))}
      </div>

      {/* Shop the Look */}
      <div className="text-center text-4xl font-light my-20">
        <u>SHOP THE LOOK</u>
      </div>

      <Carousel className="mx-auto w-full md:w-4/5 mb-24">
        {[{
          img: "https://baroque.pk/cdn/shop/files/Shop_The_Look92.jpg?v=1738051812",
          thumb: "https://baroque.pk/cdn/shop/files/65_889fa37c-e256-48fc-84b2-52a924288dc7.jpg?v=1737462104&width=600",
          title: "EMBROIDERED CHIFFON PR-1056",
          price: "PKR 29,900.00",
        }, {
          img: "https://baroque.pk/cdn/shop/files/Shop_The_Look90.jpg?v=1736336986",
          thumb: "https://baroque.pk/cdn/shop/files/88_a84d6f90-d659-4fab-9637-d77cfe27f98a.jpg?v=1735813514",
          title: "EMBROIDERED CHIFFON PR-1056",
          price: "PKR 10,900.00",
        }, {
          img: "https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562",
          thumb: "https://baroque.pk/cdn/shop/files/27_44117e97-c365-4b12-9d32-17b4a9d77f7f.jpg?v=1733309562",
          title: "EMBROIDERED CHIFFON PR-1056",
          price: "PKR 29,900.00",
        }].map((item, idx) => (
          <Carousel.Item key={idx}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <img className="md:w-1/2 w-full object-cover" src={item.img} alt="carousel slide" />
              <div className="w-72 text-center">
                <img src={item.thumb} alt="product thumbnail" />
                <div className="font-serif mt-2">{item.title}</div>
                <div className="font-serif">{item.price}</div>
                <button className="button-slide mt-3 w-full h-12">VIEW PRODUCT</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Be Inspired Section */}
      <div className="text-center text-4xl font-thin font-serif my-20">BE INSPIRED</div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
        {[{
          src: "https://baroque.pk/cdn/shop/videos/c/vp/66c69f47322c49cfb73d44220fc567fc/66c69f47322c49cfb73d44220fc567fc.HD-1080p-2.5Mbps-40062159.mp4?v=0",
          label: "CLIENT LOVE",
          path: "/",
        }, {
          src: "https://baroque.pk/cdn/shop/videos/c/vp/8335de5a5387470494ab6c998865d268/8335de5a5387470494ab6c998865d268.HD-1080p-2.5Mbps-40062160.mp4?v=0",
          label: "CELEBRITY STYLE",
          path: "/stitched",
        }, {
          src: "https://baroque.pk/cdn/shop/videos/c/vp/3398a9dc34404ca78f8621b87f59e445/3398a9dc34404ca78f8621b87f59e445.HD-1080p-2.5Mbps-40062158.mp4?v=0",
          label: "STYLE SPOTTED",
          path: "/stitched",
        }].map((item, idx) => (
          <div key={idx} className="relative">
            <video
              className="w-full md:w-[350px] h-[400px] object-cover"
              src={item.src}
              type="video/mp4"
              playsInline
              autoPlay
              loop
              muted
            />
            <div className="absolute bottom-6 w-full flex justify-center">
              <button className="button-slide w-40 h-12" onClick={() => navigate(item.path)}>
                {item.label}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="my-16 text-center">
        <h2 className="text-xl font-sans mb-4">SUBSCRIBE FOR NEWSLETTER</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="E-mail"
            className="border h-12 w-80 px-4"
          />
          <button className="button-slide h-12 w-80 md:w-auto px-6">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
        {[{
          title: "Priority Stitching",
          desc: "Receive your stitched orders more quickly in a timeline of 2 weeks."
        }, {
          title: "Custom Size",
          desc: "Get your outfit tailored to perfection as per your desired measurements."
        }, {
          title: "Free Shipping",
          desc: "We provide free shipping all across Pakistan on all of our orders."
        }, {
          title: "Order Exchange",
          desc: "For a hassle-free exchange service, fill out the exchange form."
        }].map((f, i) => (
          <div key={i} className="text-center">
            <p className="text-xl font-semibold">{f.title}</p>
            <p className="text-base mt-2 font-thin">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
