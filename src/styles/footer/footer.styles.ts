import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

// Full width, fixed-bottom footer
export const StyledFooter = styled(Box)({
  backgroundColor: "#3E2723", // Dark brown coffee theme
  color: "#D7CCC8", // Coffee-cream text color
  padding: "0.75em 0", // Set top and bottom padding to 0.5em
  width: "100%",
  position: "fixed",
  bottom: 0,
  left: 0,
  textAlign: "left",
  zIndex: 1000,
});

// Flexbox container to space out footer sections evenly
export const FooterContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between", // Evenly spaces out sections
  alignItems: "flex-start", // Align items to the top of the container
  marginBottom: "20px",
  "@media (max-width: 600px)": {
    flexDirection: "column", // Stack items on mobile
    alignItems: "center",
    textAlign: "center",
  },
});

// Footer Links
export const StyledFooterLink = styled(Link)({
  display: "block",
  color: "#FFCC80", // Caramel color
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "8px",
  "&:hover": { color: "#FFAB40" }, // Darker caramel hover effect
});

// Social Icons Container
export const SocialIcons = styled(Box)({
  display: "flex",
  gap: "15px",
  "& svg": {
    fontSize: "24px",
    color: "#FFCC80",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": { color: "#FFAB40" }, // Darker caramel hover effect
  },
});
