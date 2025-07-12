import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import AuthModal from "../pages/AuthModal";
import "./Header.css";

const navItems = [
  "HOME",
  "ABOUT",
  "PROCESS",
  "PRICING",
  "FAQ",
  "FEEDBACK",
  "JOBS",
  "BLOG",
  "CONTACT US"
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{
        my: 2,
        textTransform: 'uppercase',
        color: '#bb86fc',
        fontWeight: 'bold',
        letterSpacing: '1px',
        padding: '16px',
        borderBottom: '1px solid #333'
      }}>
        24IN MAID SERVICE
      </Typography>
      <List>
        {navItems.map((label, index) => (
          <NavLink
            key={index}
            to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "drawer-link active" : "drawer-link"
            }
          >
            <ListItem sx={{
              borderBottom: '1px solid #333',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#252525'
              }
            }}>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  style: {
                    textTransform: 'uppercase',
                    color: '#e0e0e0'
                  }
                }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="sticky"
        color="default"
        elevation={1}
      >
        <Toolbar>
          {/* Logo - stays on left */}
          <Box sx={{
            display: "flex",
            alignItems: "center",
            mr: 2
          }}>
            <img
              src="/logo.jpg"
              alt="Logo"
              width="60"
              height="50"
            />
            <span>24IN MAID SERVICE</span>
          </Box>

          {/* Centered Navigation */}
          <Box sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            flexGrow: 1,
            gap: 2
          }}>
            {navItems.map((label, index) => (
              <NavLink
                key={index}
                to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                style={{ textTransform: 'uppercase' }}
              >
                {label}
              </NavLink>
            ))}
          </Box>

          {/* Mobile menu button (right-aligned) */}
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              marginLeft: "auto"
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer - Dark Mode Only */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: '#1a1a1a',
            color: '#ffffff'
          },
        }}
      >
        {drawer}
      </Drawer>

      <AuthModal open={openAuth} onClose={() => setOpenAuth(false)} />
    </Box>
  );
};

export default Header;