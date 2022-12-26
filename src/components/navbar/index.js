import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                Villafuerte Web Developer (logo)
              </Link>
            </Typography>
            <Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
              <Link to="/works" style={{ textDecoration: "none" }}>
                Works
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/task/new")}
              >
                resume
              </Button>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
