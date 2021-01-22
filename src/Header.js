import logoBonus from "./images/logo-bonus.svg";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

const Header = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        padding: "1.5rem 1rem",
      }}
    >
      <Container
        // maxWidth="xs"
        style={{
          padding: ".5rem",
          border: "3px solid hsl(217, 16%, 45%)",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logoBonus} alt="logo" width="60px" height="60px" />
        <Card variant="outlined" style={{ padding: "0 1.5rem" }}>
          <h4
            style={{
              color: "hsl(229, 64%, 46%)",
              marginBottom: 0,
            }}
          >
            SCORE
          </h4>
          <h1 style={{ color: "hsl(229, 25%, 31%)", marginTop: 0 }}>12</h1>
        </Card>
      </Container>
    </div>
  );
};

export default Header;
