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
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import AuthModal from "../pages/AuthModal";
import { motion } from "framer-motion";
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
  "CONTACT US",
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            color: "#bb86fc",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          24IN MAID SERVICE
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="close menu"
          onClick={handleDrawerToggle}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((label, index) => (
          <NavLink
            key={index}
            to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? "drawer-link active" : "drawer-link"
            }
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListItem
                sx={{
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(187, 134, 252, 0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    style: {
                      textTransform: "uppercase",
                      color: "#e0e0e0",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    },
                  }}
                />
              </ListItem>
            </motion.div>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <HideOnScroll>
        <AppBar
          component="nav"
          position="sticky"
          color="default"
          elevation={1}
          sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  width="60"
                  height="50"
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </motion.div>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3b3b3b",
                  display: { xs: "none", sm: "block" },
                }}
              >
                24IN MAID SERVICE
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {navItems.map((label, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ y: -2 }}
                >
                  <NavLink
                    to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    style={{
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      padding: "8px 12px",
                      position: "relative",
                    }}
                  >
                    {label}
                    {hoveredItem === index && (
                      <motion.span
                        layoutId="navHover"
                        className="nav-hover-effect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </Box>

            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <motion.div
                animate={mobileOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon sx={{ fontSize: "1.8rem" }} />
              </motion.div>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100%", sm: 300 },
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
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