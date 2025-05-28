import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
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

import "./Header.css"; // contains nav-link and drawer-link styles

const navItems = [
  "Home",
  "About",
  "Our Team",
  "Process",
  "Pricing",
  "Faq",
  "Blog",
  "Jobs",
  "Contact Us",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        24in7 Maid Service
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
              <ListItemText primary={label} />
            </ListItem>
          </NavLink>
        ))}
        <ListItem button onClick={() => setOpenAuth(true)}>
          <FaSignInAlt style={{ marginRight: 8 }} /> Sign In
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo192.png"
              alt="Logo"
              width="40"
              height="40"
              style={{ marginRight: 10 }}
            />
            <Typography variant="h6" color="purple" noWrap>
            24in7 Maid Service
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {navItems.map((label, index) => (
              <NavLink
                key={index}
                to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "purple",
                color: "white",
                textTransform: "none",
                borderRadius: 10,
              }}
              onClick={() => setOpenAuth(true)}
              startIcon={<FaSignInAlt />}
            >
              Sign In
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      <AuthModal open={openAuth} onClose={() => setOpenAuth(false)} />
    </Box>
  );
};

export default Header;
