import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Breadcrumbs } from "@mui/material";

// Styled AppBar with a fixed position and full width
export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#4E342E", // Dark brown coffee theme
  padding: "10px",
  position: "fixed", // Keeps Navbar fixed at the top
  top: 0,
  left: 0,
  right: 0,
  width: "100%", // Ensures full width
  zIndex: 1100, // Ensures Navbar stays above other content
});

// Styled Toolbar to align items properly
export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px", // Keeps content centered
  width: "100%",
  margin: "0 auto",
});

// Styled Typography for the store title
export const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontFamily: "'Playfair Display', serif",
  fontWeight: "bold",
  color: "#D7CCC8", // Light coffee-cream color
});

// Styled Breadcrumbs with coffee-themed links
export const StyledBreadcrumbs = styled(Breadcrumbs)({
  "& a": {
    color: "#D7CCC8", // Coffee-cream color for links
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": { color: "#FFAB91" }, // Toasty caramel hover effect
  },
});
