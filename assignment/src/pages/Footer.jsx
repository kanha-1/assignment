import React from "react";
import { Box, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={8} p={8} bgcolor="primary.card">
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">For patients</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">For doctors</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">Help</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">For hospitals</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">More</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box fontWeight="bold" fontSize="18px" color="white">Social</Box>
          <Box>
            <Link href="#">contach</Link>
          </Box>
          <Box>
            <Link href="#">cprivaery</Link>
          </Box>
          <Box>
            <Link href="#">polisy</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
