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
import { FaSignInAlt } from "react-icons/fa";
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
      <Typography variant="h6" sx={{ my: 2, textTransform: 'uppercase' }}>
        24IN7 MAID SERVICE
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
            <ListItem button>
              <ListItemText
                primary={label}
                primaryTypographyProps={{ style: { textTransform: 'uppercase' } }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky" color="default" elevation={1}>
        <Toolbar>
          {/* Logo - stays on left */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src="/logo192.png"
              alt="Logo"
              width="40"
              height="40"
            /><span>24IN7 MAID SERVICE</span>
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
            color="inherit"
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

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
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