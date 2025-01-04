import React from "react";
import { Button, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

function Hero() {
  // Estilos personalizados
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: "100%",
    padding: "20px",
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    maxWidth: "300px",
    borderRadius: "50%",
    margin: "0 auto",
    display: "block",
  }));

  const ButtonContainer = styled(Grid)(({ theme }) => ({
    marginTop: "20px",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Imagem do Avatar */}
          <Grid item xs={12} md={4}>
            <StyledImg src={Avatar} alt="Foto de perfil de Alexandre Queiroz" />
          </Grid>

          {/* Conteúdo textual */}
          <Grid item xs={12} md={8}>
          <Typography color="primary" variant="h2" textAlign="center">
  Alexandre Queiroz
</Typography>

            <Typography color="primary" variant="h5" textAlign="center" gutterBottom>
              Sou um desenvolvedor de softwares
            </Typography>

            {/* Botões */}
            <ButtonContainer container justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<EmailIcon />}
                >
                  Contato
                </Button>
              </Grid>
            </ButtonContainer>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}

export default Hero;
