import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { TextField, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Lock, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axiosInstance from '../config/axiosInstance';
import { API_ENDPOINTS } from '../config/apiEndpoints';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if already logged in (e.g., session exists)
  useEffect(() => {
    const checkSession = async () => {
      try {
        // Add an endpoint to validate session if available
        // await axiosInstance.get(API_ENDPOINTS.VALIDATE_SESSION);
        // navigate('/dashboard');
      } catch (err) {
        // No active session
      }
    };
    checkSession();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', { username, password });
      const response = await axiosInstance.post(API_ENDPOINTS.ADMIN_LOGIN, {username,password});
      console.log('Login response:', response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      // Handle successful login
      if (response.data) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <motion.div
            className="p-4 shadow-sm rounded bg-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-center mb-4"
              variants={itemVariants}
            >
              Admin Login
            </motion.h2>

            {error && (
              <motion.div variants={itemVariants}>
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                  {error}
                </Alert>
              </motion.div>
            )}

            <Form onSubmit={handleSubmit}>
              <motion.div className="mb-3" variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <Person color="action" style={{ marginRight: 10 }} />
                    ),
                  }}
                />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <Lock color="action" style={{ marginRight: 10 }} />
                    ),
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} color="inherit" /> &nbsp;
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </motion.div>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;