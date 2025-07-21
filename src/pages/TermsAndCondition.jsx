import React from 'react';
import {
    Box,
    Container,
    Typography,
    Divider,
    Paper,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

function TermsAndCondition() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                    24inmaidservice.in
                </Typography>

                <Typography variant="body1" paragraph>
                    These Terms and Conditions ("Agreement") govern the relationship between 24inmaidservice.in (hereinafter referred to as "the Company", "We", "Our") and the Client (hereinafter referred to as "You" or "the Client") engaging in our placement consultancy services. By utilizing the services provided by 24inmaidservice.in, you agree to be bound by these terms and conditions. If you do not agree to these terms, you must refrain from using our services.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    1. Introduction
                </Typography>
                <Typography variant="body1" paragraph>
                    1.1 24inmaidservice.in is a placement consultancy agency operating across all major metro cities in India. We offer various placement services, which includes Housemaids, Cooks, Babysitters, Nannies, Patient Caregivers, Elder Caregivers, Japa Maids, and more. These services are subject to the following terms and conditions, which govern the responsibilities, obligations, and liabilities of both parties.
                </Typography>


                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    2. Salary and Employment of Candidates
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="2.1 You, as the Client, are solely responsible for paying the salary to the Candidate directly and on time." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2.2 If there are any outstanding salary issues with any previous or current Candidate, we will not process any replacement requests until all such issues are resolved." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2.3 The Company is not liable for any disputes or issues regarding the Candidate's salary or employment during or after the placement period." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    3. Replacement and Contract Renewal
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="3.1 The Client is eligible for up to three replacements of a Candidate during the contract term, subject to availability." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3.2 If you wish to retain a Candidate beyond the initial one-year period, a new contract must be executed with 24inmaidservice.in." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3.3 If the Candidate resigns, leaves, or is terminated, we will provide a replacement subject to availability, within the constraints of these terms." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                4. Refund / Cancellation Policy
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="This refund and cancellation policy outlines how you can cancel or seek a refund for the services that you have purchased through the Platform. Under this policy:" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="A. The subscription charge of Rs. 999/- is refundable in the case where the customer pays the subscription charge but chooses not to take any interviews of the candidate due to any reason. (The Application money will be refunded for a 24 hours worker booking only if 24IN MAID SERVICE is unable to line up a minimum of one candidate for interview within 10 working days of paying the advance money due to the limitations of our team. Processing fee of Rs.300 will be deducted.)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="B. The application money of Rs. 999/- may be refunded only if 24IN MAID SERVICE is unable to line up any candidates for interview due to the non-availability of required HELP within 15 working days of giving us application money. (No Refund will be made in any case where the Conference call process has started i.e. the client has done at least one conference call interview with a worker)." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="C. Since the salary expectation of maid keep changing it might not be possible to find a maid in the same salary as your previous maid in case of replacement. NO REFUND claims will be entertained if you cannot revise your salary budget according to on-going market rate. However we will try it level best to try and find a new maid in same salary." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="D. The Client agrees that the maid will be not be tortured, harmed mentally or physically. Also the Client cannot increase the work or reduce the salary of the maid other than what was discussed during the interview and mentioned in the agreement, without informing 24IN MAID SERVICE and mutual agreement with the Househelp. If the maid leaves due to any such reason, 24IN MAID SERVICE will not replace the maid and NO REFUND will be initiated." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="E. Conditions to Meet for Placement Fee Refund:" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="• If Zero Replacements are used at the time of raising the refund request (hired just one candidate with trial done): 50% of Placement Fee Between 1- 15 days of placement; 25% of Placement Fee Between 15 days - 30 days of placement; 0% of Placement Fee post 30 days of Placement." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="• Under no circumstance a refund request will be entertained where the client has not paid the salary dues in full for the worker hired through 24IN MAID SERVICE." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="• 24IN MAID SERVICE does not accept cancellation requests where the process of hiring a candidate has started." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="• NO REFUND claims will be entertained if you cannot revise your salary budget according to on-going market rate for the replacements." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="• However, the refund / replacement can be made in alliance with the cause mentioned in point E." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="F. In case of receipt of non-satisfied services, please report to our customer service team. The request would be entertained after successful verification of the case. This should be reported within 15 days of application. In case you feel that the service received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 15 days of application. The customer service team after looking into your complaint will take an appropriate decision." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="G. In case of complaints regarding the services that come with the candidate, please refer the issue to them before reaching out to us." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="H. In case of any refunds approved by 24IN MAID SERVICE, it will take 7 days for the refund to be processed to you." />
                    </ListItem>
                </List>


                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    5. Candidate Verification and Documentation
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="5.1 24inmaidservice.in shall provide you with the necessary documentation related to the Candidate, but we strongly advise the Client to conduct police verification and medical test of the Candidate independently for your safety and peace of mind. We are not responsible for any criminal activity or misconduct by the Candidate." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5.2 The Client must thoroughly inspect the Candidate's belongings (e.g., bags, items) at the time of arrival and departure, to ensure there are no discrepancies or thefts." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    6. Misconduct, Theft, and Liability Disclaimer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="6.1 24inmaidservice.in expressly disclaims any and all liability for the actions or omissions of any Candidate provided to the Client. The Client is responsible for all issues arising from misconduct, theft, damage, or any other issue involving the Candidate." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="6.2 Any financial or personal losses incurred due to the actions of the Candidate, including theft, property damage, or any misconduct, shall not be the responsibility of 24inmaidservice.in." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="6.3 You agree to hold 24inmaidservice.in harmless from any legal claims or disputes arising from such issues, and you will not hold the Company liable in any manner for damages or losses." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    7. Vicarious Liability Disclaimer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="7.1 24inmaidservice.in is a maid recruitment agency that connects clients with potential candidates. By using our services, clients acknowledge and agree that:" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="7.1.1. Candidate Employment Status: The candidate(s) introduced to the client through our platform will be considered employees of the client, and not employees of 24inmaidservice.in" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="7.1.2. No Vicarious Liability: 24inmaidservice.in shall not be held responsible or liable under the doctrine of vicarious liability for any actions, omissions, or wrong doing of the candidate(s) employed by the client." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="7.1.3. Client Responsibility: The client acknowledges that they are solely responsible for the supervision, management, and control of the candidate(s) employed by them, and for ensuring compliance with all applicable laws and regulations." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    8. Confidentiality
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="8.1 All terms and conditions which includes pricing, contractual arrangements, and Candidate details, are strictly confidential. The Client agrees not to share, disclose, or communicate these details to any third party without the express written consent of 24inmaidservice.in." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    9. Client's Responsibility
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="9.1 You are responsible for providing complete and accurate details of your requirements before hiring any Candidate. Any changes in requirements after the contract initiation may result in an additional fee or cancellation of the service." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="9.2 You must ensure that the tasks outlined in your service request align with the Candidate's qualifications and experience." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="9.3 You must review all documents, references, and information provided by 24inmaidservice.in regarding the Candidate." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    10. Medical and Safety Recommendations
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="10.1 The Company recommends that the Client, at their own expense, consider conducting a medical examination of the Candidate, especially in cases involving sensitive roles such as caregiving." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="10.2 24inmaidservice.in is not responsible for any health, safety, or other risks associated with employing a Candidate." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    11. Arbitration and Dispute Resolution
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="11.1 Any disputes arising out of or related to this Agreement shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996, or any statutory modification thereof. The arbitration shall be conducted in Mumbai, India, and the language of arbitration shall be English." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="11.2 A sole arbitrator shall be appointed by mutual agreement of both parties." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    12. Grievance Officer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="12.1 In case of any complaints or grievance the client may contact our Grievance Officer." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="12.2 Contact Number: +91 9082295602" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="12.3 The Grievance officer shall resolve the complaints or grievance within a reasonable time frame." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    13. Limitation of Liability
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="13.1 Under no circumstances will 24inmaidservice.in be held liable for any indirect, consequential, or punitive damages arising from the Client's use of our services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="13.2 The Company's total liability to the Client, whether in contract, tort, or otherwise, shall be limited to the amount of the service fee paid by the Client to 24inmaidservice.in." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    14. Agreement
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="14.1 These Terms and Conditions constitute the entire Agreement between the parties regarding the services provided by 24inmaidservice.in. Any modifications to this Agreement must be made in writing and agreed upon by both parties." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="14.2 By accepting these Terms and Conditions, clients release and hold harmless 24inmaidservice.in, its officers, directors, employees, and agents from any and all claims, demands, or liabilities arising from or related to the employment of candidate(s) introduced through our platform." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="14.3 By accepting these Terms and Conditions, clients release and hold harmless 24inmaidservice.in, its officers, directors, employees, and agents from any and all claims, demands, or liabilities arising from or related to the employment of candidate(s) introduced through our platform." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    15. Zero tolerance policy for client misconduct
                </Typography>

                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="We maintain a zero-tolerance policy towards any form of misbehavior, harassment, or disrespect directed at our maids."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="All our domestic helpers deserve to work in a safe, dignified, and respectful environment."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={`If any client is found to have misbehaved with the maid "whether reported by the maid or discovered without prior notification to the company" the service agreement will be terminated immediately, and no refund will be issued under any circumstances.`}
                        />
                    </ListItem>

                </List>



                <Box sx={{ mt: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant="body1" paragraph align="center" sx={{ fontWeight: 'bold' }}>
                        I acknowledge that I have read, understood, and accepted the Terms and Conditions outlined above.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default TermsAndCondition;