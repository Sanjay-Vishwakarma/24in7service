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
                    Kaamwalibais.com
                </Typography>

                <Typography variant="body1" paragraph>
                    These Terms and Conditions ("Agreement") govern the relationship between Kaamwalibais.com (hereinafter referred to as "the Company", "We", "Our") and the Client (hereinafter referred to as "You" or "the Client") engaging in our placement consultancy services. By utilizing the services provided by Kaamwalibais.com, you agree to be bound by these terms and conditions. If you do not agree to these terms, you must refrain from using our services.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    1. Introduction
                </Typography>
                <Typography variant="body1" paragraph>
                    1.1 Kaamwalibais.com is a placement consultancy agency operating across all major metro cities in India. We offer various placement services, which includes Housemaids, Cooks, Babysitters, Nannies, Patient Caregivers, Elder Caregivers, Japa Maids, and more. These services are subject to the following terms and conditions, which govern the responsibilities, obligations, and liabilities of both parties.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    2. Service Fee and Payment Terms
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="2.1 We charge a service fee equivalent to one month's salary of the Candidate, plus 18% Goods and Services Tax (GST). This fee is for the placement services rendered by us and does not include the salary of the Candidate, which is to be paid directly by the Client" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2.2 The service fee is due at the time of registration. A 50% payment of the total service fee is required to confirm your registration, and the remaining 50% is due upon finalization of the Candidate's placement. Alternatively, 100% of the service fee can be paid upfront." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2.3 The service fee covers a period of one year from the date of registration, during which you are eligible for up to three replacements if needed, as per the availability of candidates." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2.4 In the event that you wish to continue employing the same Candidate beyond one year, a renewal of the contract must be agreed upon with us." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    3. Salary and Employment of Candidates
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="3.1 You, as the Client, are solely responsible for paying the salary to the Candidate directly and on time." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3.2 If there are any outstanding salary issues with any previous or current Candidate, we will not process any replacement requests until all such issues are resolved." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3.3 The Company is not liable for any disputes or issues regarding the Candidate's salary or employment during or after the placement period." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    4. Replacement and Contract Renewal
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="4.1 The Client is eligible for up to three replacements of a Candidate during the contract term, subject to availability." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="4.2 If you wish to retain a Candidate beyond the initial one-year period, a new contract must be executed with Kaamwalibais.com." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="4.3 If the Candidate resigns, leaves, or is terminated, we will provide a replacement subject to availability, within the constraints of these terms." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    5. Cancellation Policy
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="5.1 Cancellation: The Client may cancel services by providing reasonable prior written notice. However, all service fees paid are non-refundable, except as expressly provided in subsection 5.2 below." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5.2 Limited Refund for Non-Delivery of Profile Leads: A refund, limited to fifty percent (50%) of the advance payment done initially at the time of agreement, shall be issued if the Company fails to provide the Client with candidate profile leads for the requested position within seven (7) business days from the date of receipt of the initial payment. It is important to note that this does not mean the candidate should reach the workplace within 7 days." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5.3 Clarification of Service Delivery: For the avoidance of doubt, the Company's obligation under subsection (b) is limited to the provision of candidate profile leads for interview purposes within the specified seven (7) business day timeframe. This obligation does not extend to ensuring that a candidate commences employment within that timeframe or any other specific timeframe." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5.4 Exclusive Refund Policy: Except as expressly provided in subsection 5.2 above, all service fees are non-refundable under any circumstances." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="5.5 Website Refund Policy: For further details regarding the Company's refund policy, please refer to the complete refund policy. The website policy is incorporated into this agreement by reference and shall prevail in case of any conflict with this section." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    6. Candidate Verification and Documentation
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="6.1 Kaamwalibais.com shall provide you with the necessary documentation related to the Candidate, but we strongly advise the Client to conduct police verification and medical test of the Candidate independently for your safety and peace of mind. We are not responsible for any criminal activity or misconduct by the Candidate." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="6.2 The Client must thoroughly inspect the Candidate's belongings (e.g., bags, items) at the time of arrival and departure, to ensure there are no discrepancies or thefts." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    7. Misconduct, Theft, and Liability Disclaimer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="7.1 Kaamwalibais.com expressly disclaims any and all liability for the actions or omissions of any Candidate provided to the Client. The Client is responsible for all issues arising from misconduct, theft, damage, or any other issue involving the Candidate." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="7.2 Any financial or personal losses incurred due to the actions of the Candidate, including theft, property damage, or any misconduct, shall not be the responsibility of Kaamwalibais.com." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="7.3 You agree to hold Kaamwalibais.com harmless from any legal claims or disputes arising from such issues, and you will not hold the Company liable in any manner for damages or losses." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    8. Vicarious Liability Disclaimer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="8.1 Kaamwalibais.com is a maid recruitment agency that connects clients with potential candidates. By using our services, clients acknowledge and agree that:" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="8.1.1. Candidate Employment Status: The candidate(s) introduced to the client through our platform will be considered employees of the client, and not employees of Kaamwalibais.com" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="8.1.2. No Vicarious Liability: Kaamwalibais.com shall not be held responsible or liable under the doctrine of vicarious liability for any actions, omissions, or wrongdoing of the candidate(s) employed by the client." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="8.1.3. Client Responsibility: The client acknowledges that they are solely responsible for the supervision, management, and control of the candidate(s) employed by them, and for ensuring compliance with all applicable laws and regulations." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    9. Confidentiality
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="9.1 All terms and conditions which includes pricing, contractual arrangements, and Candidate details, are strictly confidential. The Client agrees not to share, disclose, or communicate these details to any third party without the express written consent of Kaamwalibais.com." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    10. Client's Responsibility
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="10.1 You are responsible for providing complete and accurate details of your requirements before hiring any Candidate. Any changes in requirements after the contract initiation may result in an additional fee or cancellation of the service." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="10.2 You must ensure that the tasks outlined in your service request align with the Candidate's qualifications and experience." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="10.3 You must review all documents, references, and information provided by Kaamwalibais.com regarding the Candidate." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    11. Medical and Safety Recommendations
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="11.1 The Company recommends that the Client, at their own expense, consider conducting a medical examination of the Candidate, especially in cases involving sensitive roles such as caregiving." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="11.2 Kaamwalibais.com is not responsible for any health, safety, or other risks associated with employing a Candidate." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    12. Arbitration and Dispute Resolution
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="12.1 Any disputes arising out of or related to this Agreement shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996, or any statutory modification thereof. The arbitration shall be conducted in Mumbai, India, and the language of arbitration shall be English." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="12.2 A sole arbitrator shall be appointed by mutual agreement of both parties." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    13. Grievance Officer
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="13.1 In case of any complaints or grievance the client may contact our Grievance Officer." />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="13.2 Contact Number: +918767078888" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary="13.3 The Grievance officer shall resolve the complaints or grievance within a reasonable time frame." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    14. Limitation of Liability
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="14.1 Under no circumstances will Kaamwalibais.com be held liable for any indirect, consequential, or punitive damages arising from the Client's use of our services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="14.2 The Company's total liability to the Client, whether in contract, tort, or otherwise, shall be limited to the amount of the service fee paid by the Client to Kaamwalibais.com." />
                    </ListItem>
                </List>

                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    15. Agreement
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="15.1 These Terms and Conditions constitute the entire Agreement between the parties regarding the services provided by Kaamwalibais.com. Any modifications to this Agreement must be made in writing and agreed upon by both parties." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="15.2 By accepting these Terms and Conditions, clients release and hold harmless Kaamwalibais.com, its officers, directors, employees, and agents from any and all claims, demands, or liabilities arising from or related to the employment of candidate(s) introduced through our platform." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="15.3 By accepting these Terms and Conditions, clients release and hold harmless Kaamwalibais.com, its officers, directors, employees, and agents from any and all claims, demands, or liabilities arising from or related to the employment of candidate(s) introduced through our platform." />
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