import { Link } from "react-router-dom";
import { StyledAppBar, StyledToolbar, StyledTypography, StyledBreadcrumbs } from "../../styles/navbar/navbar.styles"

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">Roast & Brew</StyledTypography>
        <StyledBreadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/menu">Menu</Link>
         
        </StyledBreadcrumbs>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
