import { Container, Typography, Grid } from "@mui/material";

import { StyledFooter, StyledFooterLink, SocialIcons, FooterContent } from "../../styles/footer/footer.styles";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          {/* Branding */}
          <div>
            <Typography variant="h6" gutterBottom>
              Roast & Brew
            </Typography>
            <Typography variant="body2">
              Freshly roasted coffee, delivered to your door. Taste the difference with every sip.
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <StyledFooterLink to="/">Home</StyledFooterLink>
            <StyledFooterLink to="/menu">Menu</StyledFooterLink>
            <StyledFooterLink to="/cart">Cart</StyledFooterLink>
            <StyledFooterLink to="/contact">Contact Us</StyledFooterLink>
          </div>

          {/* Social Media */}
          <div>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <SocialIcons>
              <Facebook />
              <Instagram />
              <Twitter />
            </SocialIcons>
          </div>
        </FooterContent>

        {/* Copyright */}
        <Typography variant="body2" sx={{ textAlign: "center", marginTop: "20px" }}>
          © {new Date().getFullYear()} Roast & Brew. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
