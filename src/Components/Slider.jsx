import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slider.css';

const Slider = () => {
    return (
        <div className="lg:pt-5 bg-yellow-800">

      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >


        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LdxJsFz/Dhaka-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold" data-aos="zoom-in" data-aos-duration="2000">Discover the Wonders of Asia!</h1>
      <p className="mb-5">Embark on an unforgettable journey through six captivating Asian countries. From the vibrant streets of Tokyo to the ancient temples of Angkor Wat, let us guide you through the rich tapestry of culture, history, and natural beauty that Asia has to offer.</p>
      <button className="btn btn-outline btn-warning">Explore Asia Now</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Jq9h4wg/thailand.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Experience the Diversity of Asia</h1>
      <p className="mb-5">Dive into a melting pot of cultures, cuisines, and landscapes across six unique Asian destinations. Whether you crave the bustling markets of Bangkok or the serene tranquility of Bali, our expertly crafted tours ensure an immersive experience like no other.</p>
      <button className="btn btn-outline btn-warning">Start Your Adventure</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/T0cpcV0/7.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Uncover Hidden Gems in Asia</h1>
      <p className="mb-5">Unlock the secrets of Asia's hidden treasures with our exclusive tours to six enchanting destinations. Traverse off-the-beaten-path trails, encounter local traditions, and forge unforgettable memories in the heart of Asia's most captivating landscapes.</p>
      <button className="btn btn-outline btn-warning">Discover Hidden Gems</button>
    </div>
  </div>
</div></SwiperSlide>

        
      </Swiper>


        </div>
    );
};

export default Slider;