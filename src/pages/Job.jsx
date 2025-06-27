import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider
} from '@mui/material';

import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";


const Job = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    category: '',
    maritalStatus: '',
    age: '',
    religion: '',
    gender: '',
    passport: '',
    education: '',
    workingHours: '',
    address: '',
    workLocation: '',
    expectedSalary: '',
    experience: '',
    languages: [],
    aadharCard: null,
    image: null
  });

  const categories = [
    'Maid', 'Cook', 'Baby Sitter', 'Baby Massage',
    'Patient Care', 'Elder Care', 'Driver', 'Nursing',
    'Japa Maid', 'Delivery boy', 'Security Guard',
    'Housekeeping', 'Office Support'
  ];

  const religions = ['Hindu', 'Muslim', 'Catholic', 'Other'];
  const educationLevels = ['<5th', '>5th', '>10th', 'Graduate', 'Post Graduate'];
  const workingHoursOptions = Array.from({ length: 12 }, (_, i) => `${i + 1} Hour${i > 0 ? 's' : ''}`).concat(['24 Hours']);
  const salaryOptions = Array.from({ length: 30 }, (_, i) => (i + 1) * 1000);
  const experienceOptions = Array.from({ length: 21 }, (_, i) => i);
  const languages = ['Hindi', 'English', 'Marathi'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Add the JSON data as a string
      const jsonData = {
        fullName: formData.fullName,
        mobile: formData.mobile,
        category: formData.category,
        maritalStatus: formData.maritalStatus,
        age: formData.age,
        religion: formData.religion,
        gender: formData.gender,
        passport: formData.passport,
        education: formData.education,
        workingHours: formData.workingHours,
        address: formData.address,
        workLocation: formData.workLocation,
        expectedSalary: formData.expectedSalary,
        experience: formData.experience,
        languages: formData.languages
      };

      // Append as Blob to ensure proper formatting
      const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      formDataToSend.append('data', jsonBlob);

      // Append files
      if (formData.aadharCard) {
        formDataToSend.append('aadharCard', formData.aadharCard);
      }
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      // Debug: Log FormData contents
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      // Send the request
      const response = await axiosInstance.post(
        API_ENDPOINTS.JOB_APPLICATION,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: (data) => data, // Important: prevent axios from transforming FormData
        }
      );

      // Handle success
      showToast('Thank you for applying for the job! We will contact you soon.', 'success');

      // Reset form
      setFormData({
        fullName: '',
        mobile: '',
        category: '',
        maritalStatus: '',
        age: '',
        religion: '',
        gender: '',
        passport: '',
        education: '',
        workingHours: '',
        address: '',
        workLocation: '',
        expectedSalary: '',
        experience: '',
        languages: [],
        aadharCard: null,
        image: null
      });
      setOpen(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      showToast(
        error.response?.data?.message ||
        'There was an error submitting your form. Please try again.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    <ToastNotification />
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Click here to apply
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogTitle>
          <Typography variant="h4" align="center">
            APPLY FOR A JOB (नौकरी के लिए आवेदन करे)
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ backgroundColor: '#fff8f8', p: 2, mb: 3, borderRadius: 1 }}>
            <Typography variant="body1" color="error" gutterBottom>
              <strong>Note:</strong>
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              Our company does not charge any fee from any candidate. If anyone is
              asking for money in the name of bookyourmaid, please WhatsApp us on
              this number 9819122200 and do not make any payment. If you make any
              payment, you are responsible for it.
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              हमारी कंपनी किसी भी उम्मीदवार से कोई फीस नहीं लेती है। अगर कोई भी
              bookyourmaid के नाम पर पैसे मांग रहा है तो कृपया हमें इस नंबर
              9819122200 पर व्हाट्सएप करें और कोई भी भुगतान न करें। अगर आप कोई भी
              भुगतान करते हैं, तो उसके लिए आप स्वयं जिम्मेदार होंगे।
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Personal Information */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name (नाम)"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  sx={{ minWidth: 200, flexGrow: 1 }}
                />
                <TextField
                  fullWidth
                  label="Mobile No. (मोबाइल नंबर)"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10, pattern: '[0-9]{10}' }}
                  required
                  sx={{ minWidth: 200, flexGrow: 1 }}
                />
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Category (वर्ग) *</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select Category</MenuItem>
                    {categories.map((cat, index) => (
                      <MenuItem key={index} value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl component="fieldset" sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2">Marital Status (वैवाहिक स्थिति) *</Typography>
                  <RadioGroup
                    row
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                    <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
                    <FormControlLabel value="Separate" control={<Radio />} label="Separate" />
                    <FormControlLabel value="Widow" control={<Radio />} label="Widow" />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Age (आयु)"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  sx={{ minWidth: 200, flexGrow: 1 }}
                />

                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Religion (धर्म) *</InputLabel>
                  <Select
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select Religion</MenuItem>
                    {religions.map((rel, index) => (
                      <MenuItem key={index} value={rel}>{rel}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <FormControl component="fieldset" sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2">Gender (लिंग) *</Typography>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2">Passport (पासपोर्ट) *</Typography>
                  <RadioGroup
                    row
                    name="passport"
                    value={formData.passport}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Education (शिक्षा) *</InputLabel>
                  <Select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select Education</MenuItem>
                    {educationLevels.map((edu, index) => (
                      <MenuItem key={index} value={edu}>{edu}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Working Hours (काम करने के घंटे) *</InputLabel>
                  <Select
                    name="workingHours"
                    value={formData.workingHours}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select Hours</MenuItem>
                    {workingHoursOptions.map((hrs, index) => (
                      <MenuItem key={index} value={hrs}>{hrs}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <TextField
                fullWidth
                label="Home Address (घर का पता)"
                name="address"
                value={formData.address}
                onChange={handleChange}
                multiline
                required
              />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Work Location (काम कहा पे करना चाहते हो ?)"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleChange}
                  sx={{ minWidth: 200, flexGrow: 1 }}
                />

                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Expected Salary (अपेक्षित वेतन)</InputLabel>
                  <Select
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Salary</MenuItem>
                    {salaryOptions.map((sal, index) => (
                      <MenuItem key={index} value={sal}>{sal}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <FormControl fullWidth sx={{ minWidth: 200, flexGrow: 1 }}>
                  <InputLabel>Total Experience (कुल अनुभव) *</InputLabel>
                  <Select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select Experience</MenuItem>
                    {experienceOptions.map((exp, index) => (
                      <MenuItem key={index} value={exp}>{exp} Year{exp !== 1 ? 's' : ''}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Upload Aadhar Card (आधार कार्ड अपलोड करें) *
                  </Typography>
                  <input
                    type="file"
                    name="aadharCard"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    required
                  />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <Box sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Upload Image (तस्वीर डालिये) *
                  </Typography>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                </Box>

                <FormControl component="fieldset" sx={{ minWidth: 200, flexGrow: 1 }}>
                  <Typography variant="subtitle2">
                    Which languages do you know? (तुम कौन सी भाषा जानते हो?)
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {languages.map((lang) => (
                      <FormControlLabel
                        key={lang}
                        control={
                          <Checkbox
                            name="languages"
                            value={lang}
                            checked={formData.languages.includes(lang)}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label={lang}
                      />
                    ))}
                  </Box>
                </FormControl>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Job;