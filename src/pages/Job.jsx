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
  Divider,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import axiosInstance from "./../config/axiosInstance";
import { API_ENDPOINTS } from './../config/apiEndpoints';
import { showToast, ToastNotification } from "./../utils/ToastNotification";

const Job = ({ hideButton = false, onClose, open: propOpen }) => {
  const [internalOpen, setInternalOpen] = useState(!hideButton);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use propOpen if provided (from parent), otherwise use internal state
  const isOpen = typeof propOpen !== 'undefined' ? propOpen : internalOpen;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  const handleOpen = () => setInternalOpen(true);

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

      const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      formDataToSend.append('data', jsonBlob);

      if (formData.aadharCard) {
        formDataToSend.append('aadharCard', formData.aadharCard);
      }
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await axiosInstance.post(
        API_ENDPOINTS.JOB_APPLICATION,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: (data) => data,
        }
      );

      showToast('Thank you for applying for the job! We will contact you soon.', 'success');

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

      setTimeout(() => {
        handleClose();
      }, 1500);
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

      {!hideButton && (
        <div style={{ textAlign: 'center', marginTop: 50, marginBottom: 50 }}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: '#ff6b6b',
              color: 'white',
              padding: '12px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#ff5252',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Click here to apply
          </Button>
        </div>
      )}

      <Dialog
        open={isOpen}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        scroll="paper"
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-start'
          },
          '& .MuiDialog-paper': {
            margin: { xs: '16px', sm: '32px' },
            width: { xs: 'calc(100% - 32px)', sm: '100%' },
            maxWidth: '800px',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle sx={{
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          padding: '16px 24px',
          position: 'relative',
          pr: '50px' // Make room for close button
        }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            APPLY FOR A JOB (नौकरी के लिए आवेदन करे)
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ padding: { xs: '16px', sm: '24px' } }}>
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
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name (नाम)"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Mobile No. (मोबाइल नंबर)"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10, pattern: '[0-9]{10}' }}
                  required
                />
              </Box>

              {/* Category and Marital Status */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormControl fullWidth>
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

                <FormControl fullWidth>
                  <Typography variant="subtitle2">Marital Status (वैवाहिक स्थिति) *</Typography>
                  <RadioGroup
                    row
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                    <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
                    <FormControlLabel value="Separate" control={<Radio />} label="Separate" />
                    <FormControlLabel value="Widow" control={<Radio />} label="Widow" />
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* Age and Religion */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Age (आयु)"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

                <FormControl fullWidth>
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

              {/* Gender and Passport */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormControl fullWidth>
                  <Typography variant="subtitle2">Gender (लिंग) *</Typography>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>

                <FormControl fullWidth>
                  <Typography variant="subtitle2">Passport (पासपोर्ट) *</Typography>
                  <RadioGroup
                    row
                    name="passport"
                    value={formData.passport}
                    onChange={handleChange}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* Education and Working Hours */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormControl fullWidth>
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

                <FormControl fullWidth>
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

              {/* Address */}
              <TextField
                fullWidth
                label="Home Address (घर का पता)"
                name="address"
                value={formData.address}
                onChange={handleChange}
                multiline
                rows={2}
                required
              />

              {/* Work Location and Expected Salary */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Work Location (काम कहा पे करना चाहते हो ?)"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleChange}
                />

                <FormControl fullWidth>
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

              {/* Experience and Aadhar Card */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormControl fullWidth>
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

                <Box sx={{ width: '100%' }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Upload Aadhar Card (आधार कार्ड अपलोड करें) *
                  </Typography>
                  <input
                    type="file"
                    name="aadharCard"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    required
                    style={{ width: '100%' }}
                  />
                </Box>
              </Box>

              {/* Image Upload and Languages */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Upload Image (तस्वीर डालिये) *
                  </Typography>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    style={{ width: '100%' }}
                  />
                </Box>

                <FormControl component="fieldset" sx={{ width: '100%' }}>
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

              <DialogActions sx={{ justifyContent: 'center', padding: '16px 24px' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    minWidth: '200px',
                    padding: '10px 24px',
                    width: { xs: '100%', sm: 'auto' }
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </DialogActions>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Job;