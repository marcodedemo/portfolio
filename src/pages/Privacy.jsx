import { Box, Container, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

function Section({ title, children }) {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 1.5, color: theme.palette.text.primary }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function Privacy() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const text = {
    color: theme.palette.text.secondary,
    lineHeight: 1.75,
    fontSize: "0.95rem",
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <Typography
            variant="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              mb: 1,
            }}
          >
            Informativa
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ ...text, mb: 6 }}>
            Ultimo aggiornamento: maggio 2026
          </Typography>

          <Section title="1. Titolare del trattamento">
            <Typography sx={text}>
              Marco De Demo — Follina (TV), Italia
              <br />
              Email:{" "}
              <Link href="mailto:marco.dedemo@gmail.com" sx={{ color: theme.palette.primary.main }}>
                marco.dedemo@gmail.com
              </Link>
            </Typography>
          </Section>

          <Section title="2. Dati raccolti e finalità">
            <Typography sx={text}>
              Questo sito raccoglie dati esclusivamente tramite <strong>Google Analytics</strong>,
              uno strumento di analisi statistica fornito da Google LLC. I dati raccolti includono:
            </Typography>
            <Box component="ul" sx={{ ...text, pl: 3, mt: 1.5, mb: 0 }}>
              <li>Pagine visitate e durata della sessione</li>
              <li>Paese e lingua del browser</li>
              <li>Tipo di dispositivo e sistema operativo</li>
              <li>Sorgente di traffico (es. motore di ricerca, link diretto)</li>
            </Box>
            <Typography sx={{ ...text, mt: 1.5 }}>
              L'indirizzo IP viene anonimizzato prima della trasmissione. Questi dati sono usati
              esclusivamente per migliorare i contenuti del sito. Non vengono effettuate attività
              di profilazione, né i dati vengono venduti o ceduti a terzi.
            </Typography>
          </Section>

          <Section title="3. Base giuridica">
            <Typography sx={text}>
              Il trattamento avviene sulla base del <strong>consenso esplicito</strong> dell'utente
              (art. 6, par. 1, lett. a del GDPR), espresso tramite il banner cookie al primo accesso.
              Google Analytics viene attivato solo dopo aver ricevuto tale consenso.
            </Typography>
          </Section>

          <Section title="4. Conservazione dei dati">
            <Typography sx={text}>
              I dati raccolti tramite Google Analytics vengono conservati per un periodo massimo di
              14 mesi, come configurato nelle impostazioni dell'account. La preferenza di consenso
              espressa dall'utente viene salvata nel browser tramite localStorage e non ha scadenza
              automatica.
            </Typography>
          </Section>

          <Section title="5. Diritti dell'interessato">
            <Typography sx={text}>
              In qualità di interessato, hai il diritto di:
            </Typography>
            <Box component="ul" sx={{ ...text, pl: 3, mt: 1.5, mb: 1.5 }}>
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiederne la rettifica o la cancellazione</li>
              <li>Opporti al trattamento o richiederne la limitazione</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali</li>
            </Box>
            <Typography sx={text}>
              Per esercitare questi diritti o revocare il consenso, scrivi a{" "}
              <Link href="mailto:marco.dedemo@gmail.com" sx={{ color: theme.palette.primary.main }}>
                marco.dedemo@gmail.com
              </Link>{" "}
              oppure utilizza il link "Gestisci preferenze cookie" nel footer del sito.
            </Typography>
          </Section>

          <Section title="6. Cookie">
            <Typography sx={text}>
              Questo sito utilizza esclusivamente cookie tecnici (localStorage per tema e lingua)
              e cookie analitici di Google Analytics, attivati solo previo consenso. Non vengono
              utilizzati cookie di profilazione o marketing.
            </Typography>
          </Section>

          <Section title="7. Trasferimento dati">
            <Typography sx={text}>
              Google Analytics prevede il trasferimento di dati verso gli Stati Uniti. Google LLC
              aderisce alle clausole contrattuali standard approvate dalla Commissione Europea,
              garantendo un livello di protezione adeguato ai sensi del GDPR.
            </Typography>
          </Section>

          <Box sx={{ mt: 6 }}>
            <Link
              href="/"
              sx={{
                fontSize: "0.9rem",
                color: theme.palette.primary.main,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              ← Torna al sito
            </Link>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Privacy;
