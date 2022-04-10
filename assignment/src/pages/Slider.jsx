import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import first from "../assets/dweb_find_doctors.jpg";
import second from "../assets/dweb_instant_video_consulation.jpg";
import third from "../assets/dweb_medicines.jpg";
import fourth from "../assets/dweb_lab_tests.png";
import fifth from "../assets/dweb_surgeries.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Box } from "@mui/system";
const cardData = [
  {
    image: first,
    imageText: "Instant Video Consultation",
    imageDes: "Connect within 60 secs",
  },
  {
    image: second,
    imageText: "Find Doctors Near You",
    imageDes: "Confirmed appointments",
  },
  {
    image: third,
    imageText: "Medicines",
    imageDes: "Essentials at your doorstep",
  },
  {
    image: fourth,
    imageText: "Lap Tests",
    imageDes: "Sample pickup at your home",
  },
  {
    image: fifth,
    imageText: "Confirmed appointments",
    imageDes: "Safe and trusted surgery centers",
  },
  {
    image: fourth,
    imageText: "Lap Tests",
    imageDes: "Sample pickup at your home",
  },
];
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cardData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{ borderRadius: 5, minHeight: 200, maxHeight: 300, width: "400px", border: "1px solid gray" }}>
              <CardMedia>
                <img src={data.image} height="150px" width="100%" alt="" />
              </CardMedia>
              <CardContent style={{ height: "50px" }}>
                <Box fontSize="15px" fontWeight="bold">
                  {data.imageText}
                </Box>
                <Box fontSize="12px">
                  {data.imageDes}
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
