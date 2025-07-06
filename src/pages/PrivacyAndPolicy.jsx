import React from 'react';
import {
    Box,
    Container,
    Typography,
    Divider,
    Paper,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

function PrivacyAndPolicy() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    Bookmybai.com Privacy Policy
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                    Last Updated: 05-05-2025
                </Typography>
                <Divider sx={{ my: 3, borderWidth: 2 }} />

                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mt: 4, fontWeight: 'bold' }}>
                    Introduction
                </Typography>
                <Typography variant="body1" paragraph>
                    Bookmybai.com offers various services to help its users find, coordinate, and maintain quality care. Bookmybai.com's Privacy Policy ("Privacy Policy") is designed to provide a clear understanding of the information we collect and how we use it to provide our services and give users a better experience. It applies to any users of www.Bookmybai.com and any US affiliated websites, web pages, mobile applications and mobile websites operated by Bookmybai.com (the "Site"), including those who are seeking to find a service provider through Bookmybai.com ("Employers") as well as those who are looking to promote their services through Bookmybai.com ("Jobseekers/Maid or any other individual"), and any users of any of the various services that Bookmybai.com provides through the Site or any other channels, including over the telephone ("Services"). For purposes of this Agreement, the terms "Bookmybai.com," "we," "us," and "our" refer to Bookmybai.com, Inc. "You" refers to you, as a visitor or user or the Site or the Services. Please note that our subsidiaries have separate privacy policies. In addition, this Privacy Policy does not apply to third party entities that may use the Bookmybai.com Site or Services. Such entities' use of the Bookmybai.com Site and Services are subject to separate terms that they agreed when they registered with Bookmybai.com.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    By using the Site and/or the Services, you consent to our collection, storage, use and disclosure of your personal information and other information as described in this Privacy Policy.
                </Typography>

                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mt: 6, fontWeight: 'bold' }}>
                    Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                    We collect both "Personal Information" and "Non Personal Information" about our users. In this policy, Personal Information is information that can be used to contact or identify you, such as your full name and email address, and information that is linked to such information. "Non Personal Information" is information that cannot be used to contact or identify you and is not linked to information that can be used to contact or identify you and includes passively collected information about your activities on our Site, such as usage data, to the extent that information is not linked to your Personal Information. Site Visitors can access and browse certain portions of the Site without disclosing Personal Information, although, like most websites, we passively collect certain information from your computer, such as your IP address and web browser user agent, when you browse the Site. Visitors who access and browse the Site without registering are "Site Visitors". In order to utilize some of the Services offered by Bookmybai.com, you must register with Bookmybai.com. All users who register with Bookmybai.com are "Registered Users".
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', mt: 4, fontWeight: 'bold' }}>
                    Information you provide
                </Typography>
                <Typography variant="body1" paragraph>
                    Regardless of whether you are a Site Visitor or a Registered User, all Personal Information that you provide to us when registering, posting a job, posting a profile, communicating through the Site, discussing care options over the phone, utilizing our mobile applications or that you otherwise provide on the Site or by phone, email or postal mail, will be stored by us. You represent and warrant to us that you have the right and authority to provide us all Personal Information you provide about yourself or others. You may provide us this Personal Information in various ways, including:
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold', textDecoration: 'underline' }}>
                    When registering
                </Typography>
                <Typography variant="body1" paragraph>
                    When you register directly through Bookmybai.com, we will collect and store the information that you provide to us directly on our online registration forms. This may include, among other information:
                </Typography>
                <List dense sx={{ pl: 4,  listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your first and last name" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your email address" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your home address" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your gender" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your birthday" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="your phone number" />
                    </ListItem>
                </List>
                <Typography variant="body1" paragraph>
                    Some users may have the opportunity to register with Bookmybai.com by connecting through Facebook's application programming interface (API). Please see Section I.B.4 below to learn about the information we access, collect and store if you register for Bookmybai.com through Facebook.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
                    If you register for a Service that requires you to pay a fee, Bookmybai.com will also collect your credit card type, number, expiration date, and security code as well as your billing address for payment purposes and your birthday, if not previously provided.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold', textDecoration: 'underline' }}>
                    When posting a job
                </Typography>
                <Typography variant="body1" paragraph>
                    If you are a Employer, we collect and store all of the additional information that you provide to us on your job posting or that is otherwise included in an auto-generated job posting. This may include, among other information:
                </Typography>
                <List dense sx={{ pl: 4,  listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="the type of care you are looking for, your schedule, location, hourly rate, number of children and ages (if applicable), narrative job description, requirements for a Jobseeker (such as ability to drive)" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="pictures you choose to provide" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="health information, if you choose to provide it" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="any other information you choose to include in your job posting" />
                    </ListItem>
                </List>

                {/* Continue with all other sections in similar fashion */}

                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mt: 6, fontWeight: 'bold' }}>
                    How We Use Information
                </Typography>
                <Typography variant="body1" paragraph>
                    Personal Information
                </Typography>
                <Typography variant="body1" paragraph>
                    In general, the Personal Information we collect is used (1) to improve our Services and enhance your experience with Bookmybai.com, (2) to enable us to provide a safer community for all of our Registered Users, and (3) to help us communicate with you. For example, we may use your Personal Information to:
                </Typography>
                <List dense sx={{ pl: 4,  listStylePosition: 'inside' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="register and service your account." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="include in Employers job postings and Jobseeker profiles." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="contact you in response to questions and solicit feedback and input from you." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="enable Employers and Jobseekers/Maid or any other individual to search based on the Personal Information the other has made available on the Site, and the information others have provided about them." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary="connect Employers with Jobseekers/Maid or any other individual that appear to meet their needs and preferences." />
                    </ListItem>
                </List>

                {/* Continue with all remaining sections */}

                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mt: 6, fontWeight: 'bold' }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions on our Privacy Policy, you can contact us via email at contact@Bookmybai.com
                </Typography>
            </Paper>
        </Container>
    );
}

export default PrivacyAndPolicy;