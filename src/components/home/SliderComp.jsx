import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    infinite: true,
    //dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat, ad rem veniam explicabo obcaecati animi nemo similique
              fuga dolorem exercitationem beatae sed nesciunt commodi. Atque
              iusto et eos quam.
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
                İncele
              </div>
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quaerat, ad rem veniam explicabo obcaecati animi nemo similique
              fuga dolorem exercitationem beatae sed nesciunt commodi. Atque
              iusto et eos quam.
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
                İncele
              </div>
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/67031162-9cc5-481d-8ffe-7ada8f3d78bd/custom-nike-air-force-1-high-by-you-shoes.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
