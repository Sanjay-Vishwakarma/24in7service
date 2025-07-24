import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const faqs = [
  {
    question: "How do I register as a service provider?",
    answer:
      "To register as a service provider, simply sign up on our platform, fill out your profile, and upload any necessary credentials or references. Once your profile is approved, you can start applying for jobs or receive job offers.",
  },
  {
    question: "What services can I offer on the platform?",
    answer:
      "You can offer a wide range of household services including house cleaning, laundry, babysitting, cooking, pet care, elderly care, and more. You can also select the specific areas in which you specialize.",
  },
  {
    question: "How do clients find a service provider?",
    answer:
      "Clients can browse through available service providers on our platform, view profiles, and read reviews. They can directly contact the service provider, or you may receive a job offer based on your skills and availability.",
  },
  {
    question:
      "What if I have a complaint or issue with a service provider or client?",
    answer:
      "If you encounter any issues, please contact our support team. We will investigate the matter and help resolve any disputes between service providers and clients as quickly as possible.",
  },
  {
    question: "How do I get paid for my services?",
    answer:
      "Payments are processed through our secure platform. Once a job is completed and confirmed by the client, the payment will be transferred to your account. You can set up your preferred payment method during registration.",
  },
  {
    question: "Is there a fee to use 24In7 Maid Service platform?",
    answer:
      "For service providers, there are no registration fees. We charge a small commission on each job completed, which is deducted after payment. Clients are charged service fees to hire a service provider through the platform.",
  },
];

function Faq() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 8,
        mb: 8,
        animation: `${fadeIn} 0.6s ease-out`,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{
          fontWeight: 700,
          color: theme.palette.primary.main,
          mb: 6,
          fontSize: isMobile ? "2rem" : "2.5rem",
          "&:hover": {
            animation: `${pulse} 1s ease infinite`,
          },
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          px: { xs: 1, sm: 2, md: 6, lg: 12 },
          "& > *": {
            mb: 2,
            animation: `${fadeIn} 0.5s ease-out forwards`,
            opacity: 0,
          },
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "12px !important",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:before": {
                display: "none",
              },
              "&:hover": {
                boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                transform: "translateY(-2px)",
              },
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "1.8rem",
                  }}
                />
              }
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
              sx={{
                backgroundColor: theme.palette.grey[50],
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                },
                "&.Mui-expanded": {
                  backgroundColor: theme.palette.grey[100],
                  borderBottom: `1px solid ${theme.palette.divider}`,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: isMobile ? "1rem" : "1.1rem",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: theme.palette.background.paper,
                padding: "24px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default Faq;
