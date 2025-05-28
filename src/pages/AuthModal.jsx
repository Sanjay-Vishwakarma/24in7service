import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';

const AuthModal = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (e, newValue) => setTab(newValue);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">{tab === 0 ? 'Login' : 'Register'}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
        <Tab icon={<LoginIcon />} label="Login" />
        <Tab icon={<PersonAddAltIcon />} label="Register" />
      </Tabs>

      <DialogContent>
        {tab === 0 ? (
          <Box component="form" noValidate autoComplete="off" display="flex" flexDirection="column" gap={2}>
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        ) : (
          <Box component="form" noValidate autoComplete="off" display="flex" flexDirection="column" gap={2}>
            <TextField label="Name" fullWidth required />
            <TextField label="Phone" fullWidth required />
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" color="secondary" fullWidth>
              Register
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
