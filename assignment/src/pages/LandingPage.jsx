import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Drawer,
  Divider,
  // Card,
  // CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import practo1 from "../assets/practo1.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Content from "./Content";
import Footer from "./Footer";

const pages = ["For Corporates", "For Providers", "Security & help"];
const pages2 = ["Find Doctor", "Video Conssult", "Medicine", "Lab Test"];
const LandingPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Find Doctor", "Video Conssult", "Medicine", "Lab Test"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src={practo1} alt="practo1" style={{ height: 60, width: 110 }} />
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "none", lg: "flex", xl: "flex" }, justifyContent: "space-around", }}>
              {pages2.map((page) => (
                // <Button size="small" key={page} sx={{ my: 2, color: "#41416F" }} >
                //   {page}
                // </Button>
                <Box fontWeight="bold">
                  {page}
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <img src={practo1} alt="practo1" style={{ height: 60, width: 110 }} />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  size="small"
                  key={page}
                  sx={{ my: 2, color: "#41416F" }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box>
              <Button size="small" variant="outlined" style={{ color: "gray", border: "1px solid gray" }}>
                login / Signup
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container maxWidth="lg">
        <Box component="main" sx={{ p: 3, }}>
          <Content />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
