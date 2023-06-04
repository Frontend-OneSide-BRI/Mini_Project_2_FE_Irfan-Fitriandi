import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ data }) => {
  return (
    <Carousel
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      stopOnHover={true}
      swipeable={true}
    >
      {data.map((data, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.35),
                  rgba(0, 0, 0, 0.35)
                ), url(${data.img})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
          className="h-96 flex flex-col justify-center items-center text-white space-y-4"
        >
          <span className="font-semibold antialiased capitalize text-2xl lg:text-4xl">
            {data.label}
          </span>
          <p className="text-xs lg:text-base max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            enim quas doloribus atque facilis minima dolorum, porro eos adipisci
            eius.
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
