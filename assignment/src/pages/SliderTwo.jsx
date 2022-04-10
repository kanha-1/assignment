import React from 'react'
import { Typography, Card, CardContent, CardMedia, Grid, Paper, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Navigation } from "swiper";
function SliderTwo() {
    const cardData = [
        {
            describe: "Instant Video Consultation Instant Video ConsultationInstant Video ConsultationInstant Video Consultation vInstant Video Consultation Instant Video Consultation",
            user: "Dr. Rajesh",
        },
        {
            describe: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
            user: "Dr. Rajesh",
        },
        {
            describe: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
            user: "Dr. Rajesh",
        },
        {
            describe: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
            user: "Dr. Rajesh",
        },

    ]
    return (
        // <Grid>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="swiper-slide">
            {cardData.map((item, index) => (
                <SwiperSlide key={index}>
                    <Box justifyContent="center" sx={{ width: "400px" }}>
                        <Box>{item.describe}</Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box sx={{ marginTop: "6px" }}><AccountCircleIcon /></Box>
                            <Box>{item.user}</Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default SliderTwo