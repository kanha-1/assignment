import React from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import plusTag from "../assets/plus-tag.jpg";
import practocare from "../assets/dweb_practo_care.jpg";
import dweb_hero_banner from "../assets/dweb_hero_banner.jpg";
import first from "../assets/dweb_find_doctors.jpg";
import second from "../assets/dweb_instant_video_consulation.jpg";
import third from "../assets/dweb_medicines.jpg";
import fourth from "../assets/dweb_lab_tests.png";
import fifth from "../assets/dweb_surgeries.jpg";
import Slider from "./Slider";
import SliderTwo from "./SliderTwo";

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
const ConsultData = [
  {
    image: first,
    imageText: "Instant Video",
    imageDes: "Connect within 60 secs",
  },
  {
    image: second,
    imageText: "Find Doctors Near",
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
    imageText: "Confirmed",
    imageDes: "Safe and trusted surgery centers",
  },
  {
    image: fourth,
    imageText: "tests",
    imageDes: "Sample pickup at your home",
  },
];

const Content = () => {
  return (
    <Grid container>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            size="small"
            id="outlined-adornment-amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search doctors, clinics, hospitals, etc."
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <img src={plusTag} alt="plus-tag" style={{ height: 50 }} />
        </Grid>
      </Grid>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 6,
          mb: 6,
          bgcolor: "primary.card",
          borderRadius: 5,
          width: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <CardContent>
            <img
              src={practocare}
              alt="practocare"
              style={{ height: 50, width: 235 }}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff" }}
              component="div"
            >
              Choose the experts in end to end surgical care.
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }} component="div">
              You are in safe hands
            </Typography>
            <Button
              sx={{ borderRadius: 2, mt: 3 }}
              color="inherit"
              variant="contained"
            >
              Know more
            </Button>
          </CardContent>
        </Box>
        <Box sx={{ width: "50%", position: "relative" }}>
          <img
            src={dweb_hero_banner}
            alt="practocare"
            style={{
              top: -36,
              position: "absolute",
              height: `calc(100% + 36px)`,
            }}
          />
        </Box>
      </Card>
      <Grid container spacing={2} alignItems="center">
        {cardData.map((data, index) => (
          <Grid item key={index} xs={6} sm={4} md={2}>
            <Card
              sx={{
                borderRadius: 5,
                minHeight: 300,
                maxHeight: 300,
              }}
            >
              <CardMedia
                component="img"
                height="150"
                sx={{
                  height: 160,
                  bgcolor: "primary.main",
                }}
                image={data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.imageText}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.imageDes}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        sx={{ mt: 4 }}
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" component="h2" sx={{ color: "#414146" }}>
            <Box fontWeight="fontWeightBold">
              Consult top doctors online for any health concern
            </Box>
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Private online consultations with verified doctors in all
            specialists
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button size="large" variant="outlined">
            View All Specialities
          </Button>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 3 }} container spacing={2}>
        {ConsultData.map((data, index) => (
          <Grid container item key={index} xs={6} sm={4} md={2} justifyContent="center" alignItems="center" >
            <Card
              elevation={0}
              sx={{ minHeight: 250, textAlign: "center", }} >
              <Box display="flex" justifyContent={"center"}>
                <Avatar
                  alt="green iguana"
                  src={data.image}
                  sx={{ width: 120, height: 120 }}
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="body" component="div">
                  <Box fontWeight="fontWeightBold">{data.imageText}</Box>
                </Typography>
                <Button size="small" sx={{ fontSize: 13 }} variant="text">
                  CONSULT NOW
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2" sx={{ color: "#414146" }}>
          <Box fontWeight="fontWeightBold">
            Consult top doctors online for any health concern
          </Box>
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          Private online consultations with verified doctors in all specialists
        </Typography>
      </Grid>
      <Slider />
      <Box mt={2}></Box>
      <Divider />
      {/* <Box mt={2}></Box> */}
      <Grid item xs={12}>
        <Box mt={4} mb={2} textAlign="center" fontWeight="Bold" fonrSize="20px">What our users have to say</Box>
        <SliderTwo />
      </Grid>
      <Divider />
      <Box mt={2}></Box>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>hello</Grid>
          <Grid item xs={6}>hello</Grid>
        </Grid>
      </Grid>
    </Grid >
  );
};

export default Content;
