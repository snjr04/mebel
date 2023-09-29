

import {useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const ProductSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product__slider">
            <Swiper

                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="data:image/jpeg;base64,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" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.dealer.com/graphics/2021/Toyota/V9_16x9/2021-Corolla-Hybrid-Sedan_01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1siWRofPzSrb3Jr2P5F7EmAzAmnBY3RB3yw&usqp=CAU" />
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={15}
                slidesPerView={4}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="data:image/jpeg;base64,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" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.dealer.com/graphics/2021/Toyota/V9_16x9/2021-Corolla-Hybrid-Sedan_01.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1siWRofPzSrb3Jr2P5F7EmAzAmnBY3RB3yw&usqp=CAU" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ProductSlider;