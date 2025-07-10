import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    question: "What if I have a complaint or issue with a service provider or client?",
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
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Frequently Asked Questions
      </Typography>
      <Box sx={{ px: { xs: 1, sm: 2, md: 6, lg: 12 } }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
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
