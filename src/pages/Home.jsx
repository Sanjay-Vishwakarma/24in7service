import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Modal,
} from "@mui/material";
import jobImg from "../assets/images/job.png";
import mgHome from "../assets/images/1mg.webp";
import marketImg from "../assets/images/market.png";
import wrhImg from "../assets/images/we-are-hiring.png";
import ContactUs from "./ContactUs";

const cardData = [
  {
    id: 1,
    title: "I need a Job/ मुझे नौकरी चाहिए",
    image: jobImg,
    link: "https://theworkinglady.in/job-list",
    description: `Submit your applications easily and stay updated on new job openings.`,
    hindi: `अपना आवेदन आसानी से जमा करें और नई नौकरी के अवसरों के बारे में अपडेट रहें।`,
    isExternal: true,
  },
  // {
  //   id: 2,
  //   title: "I'm Hiring/ मैं नियुक्ति कर रहा हूँ",
  //   image: wrhImg,
  //   link: "#", // Add actual modal or routing
  //   description: `Post job listings and connect with skilled professionals.`,
  //   hindi: `नौकरी की लिस्टिंग पोस्ट करें और कुशल पेशेवरों से जुड़ें।`,
  //   isExternal: false,
  // },
  {
    id: 3,
    title: "JOIN US AS A HIRING PARTNER/ हमसे जुड़ें",
    image: marketImg,
    description: `If you're a local maid agency and align with our vision, join us.`,
    hindi: `यदि आप एक स्थानीय एजेंसी हैं और हमारे मिशन से जुड़ते हैं, तो हमसे जुड़ें।`,
    isExternal: false,
    isContactUs: true,
  },
];

function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  const handleOpenContactModal = () => {
    setOpenContactModal(true);
  };

  const handleCloseContactModal = () => {
    setOpenContactModal(false);
  };

  return (
    <Box sx={{ flexGrow: 1, px: 2, py: 4 }}>
      {/* Contact Us Modal */}
      <Modal
        open={openContactModal}
        onClose={handleCloseContactModal}
        aria-labelledby="contact-us-modal"
        aria-describedby="contact-us-form"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "60%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <ContactUs onClose={handleCloseContactModal} />
        </Box>
      </Modal>

      {/* Hero Image Carousel */}
      <Box
        component="img"
        src={mgHome}
        alt="Hero"
        sx={{
          width: "100%",
          height: { xs: 600, md: 800 },
          objectFit: "contain",
          borderRadius: 2,
          mb: 4,
        }}
      />

      {/* Section Title */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h6" color="primary">
          The working lady
        </Typography>
        <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
          A perfect solution
        </Typography>
        {/* <Typography variant="h5" color="text.secondary" fontStyle="italic">
          I need a Job
        </Typography> */}
      </Box>

      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%", backgroundColor: "#f3e5f5" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 180, objectFit: "contain", p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontStyle: "italic", color: "text.secondary" }}
                >
                  {item.hindi}
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={item.isExternal ? item.link : undefined}
                    target={item.isExternal ? "_blank" : undefined}
                    onClick={item.isContactUs ? handleOpenContactModal : undefined}
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;