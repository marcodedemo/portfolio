import { Box, Container, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

function Section({ title, children }) {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        component="h2"
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
  const list = { ...text, pl: 3, mt: 1.5, mb: 1.5 };
  const mail = (
    <Link href="mailto:marco.dedemo@gmail.com" sx={{ color: theme.palette.primary.main }}>
      marco.dedemo@gmail.com
    </Link>
  );

  return (
    <Box component="main" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Box maxWidth="md" sx={{ margin: { xs: 0, md: "0 auto" } }}>

          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Informativa
          </Typography>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ ...text, mb: 6 }}>
            Ultimo aggiornamento: settembre 2026
          </Typography>

          <Section title="1. Titolare del trattamento">
            <Typography sx={text}>
              Marco De Demo, Follina (TV), Italia.
              <br />
              Email: {mail}
            </Typography>
          </Section>

          <Section title="2. Modulo di contatto">
            <Typography sx={text}>
              Se mi scrivi tramite il modulo di contatto raccolgo <strong>nome, email e messaggio</strong>.
              Li uso solo per rispondere alla tua richiesta e, se lavoreremo insieme, per gestire il
              rapporto professionale.
            </Typography>
            <Typography sx={{ ...text, mt: 1.5 }}>
              Il messaggio viene recapitato alla mia casella email tramite il servizio{" "}
              <strong>EmailJS</strong>. La base giuridica è l&apos;esecuzione di misure precontrattuali
              su tua richiesta (art. 6, par. 1, lett. b GDPR). Conservo i dati per il tempo necessario
              a gestire la richiesta e gli eventuali obblighi di legge successivi.
            </Typography>
          </Section>

          <Section title="3. Statistiche di visita">
            <Typography sx={text}>
              Solo se accetti dal banner, il sito usa <strong>Vercel Web Analytics</strong> e{" "}
              <strong>Vercel Speed Insights</strong> per statistiche aggregate e anonime. Questi
              strumenti non usano cookie. I dati raccolti sono:
            </Typography>
            <Box component="ul" sx={list}>
              <li>pagina visitata e sito di provenienza</li>
              <li>paese e area geografica approssimativa</li>
              <li>tipo di dispositivo, sistema operativo e browser</li>
              <li>tempi di caricamento della pagina</li>
            </Box>
            <Typography sx={text}>
              Il visitatore è riconosciuto solo tramite un codice ricavato dalla richiesta, che viene
              scartato entro 24 ore. Non è possibile risalire alla tua identità. La base giuridica è
              il consenso (art. 6, par. 1, lett. a GDPR), revocabile in qualsiasi momento.
            </Typography>
          </Section>

          <Section title="4. Hosting e dati tecnici">
            <Typography sx={text}>
              Il sito è ospitato da <strong>Vercel Inc.</strong> Per erogare le pagine e proteggere il
              sito da abusi, il server tratta dati tecnici come l&apos;indirizzo IP. La base giuridica
              è il legittimo interesse al funzionamento e alla sicurezza del sito (art. 6, par. 1,
              lett. f GDPR).
            </Typography>
          </Section>

          <Section title="5. Destinatari e trasferimenti">
            <Typography sx={text}>
              I dati sono trattati dai fornitori citati sopra: Vercel (hosting e statistiche), EmailJS
              (invio dei messaggi) e Google (casella email del titolare). Alcuni di questi fornitori
              possono trasferire dati fuori dall&apos;Unione Europea, sulla base delle garanzie previste
              dal GDPR, come le clausole contrattuali standard o il Data Privacy Framework UE-USA. I
              dati non vengono venduti né usati per profilazione o pubblicità.
            </Typography>
          </Section>

          <Section title="6. Cookie e memoria del browser">
            <Typography sx={text}>
              Il sito non usa cookie di profilazione o di marketing. Salva nel browser, tramite
              localStorage, solo le tue preferenze di tema, di lingua e la scelta fatta sul banner.
            </Typography>
          </Section>

          <Section title="7. I tuoi diritti">
            <Typography sx={text}>
              Puoi chiedere in qualsiasi momento di:
            </Typography>
            <Box component="ul" sx={list}>
              <li>accedere ai tuoi dati, rettificarli o cancellarli</li>
              <li>limitare il trattamento od opporti</li>
              <li>ricevere i dati in un formato portabile</li>
              <li>revocare il consenso alle statistiche</li>
              <li>proporre reclamo al Garante per la protezione dei dati personali</li>
            </Box>
            <Typography sx={text}>
              Per esercitare questi diritti scrivi a {mail}. Per cambiare la scelta sulle statistiche
              usa il link &quot;Gestisci cookie&quot; nel footer.
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
