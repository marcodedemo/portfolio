import { useState, useRef } from "react";
import {
  Box, Typography, TextField, Button, Alert, CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialValues = { name: "", email: "", message: "" };
const initialErrors = { name: "", email: "", message: "" };

function validate(values, errs) {
  const errors = { ...initialErrors };
  if (!values.name.trim()) errors.name = errs.nameRequired;
  if (!values.email.trim()) {
    errors.email = errs.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = errs.emailInvalid;
  }
  if (!values.message.trim()) errors.message = errs.messageRequired;
  else if (values.message.trim().length < 20) errors.message = errs.messageTooShort;
  return errors;
}

function ContactForm() {
  const theme = useTheme();
  const { t } = useLang();
  const formRef = useRef(null);
  const primary = theme.palette.primary.main;

  const [values, setValues]   = useState(initialValues);
  const [errors, setErrors]   = useState(initialErrors);
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.04)"
          : "rgba(0,0,0,0.02)",
      "& fieldset": {
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.12)",
      },
      "&:hover fieldset": { borderColor: `${primary}70` },
      "&.Mui-focused fieldset": { borderColor: primary },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: primary },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...values, [name]: value }, t.form.errors);
      setErrors((err) => ({ ...err, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(values, t.form.errors);
    setErrors((err) => ({ ...err, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(values, t.form.errors);
    setErrors(validationErrors);
    if (Object.values(validationErrors).some(Boolean)) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      setValues(initialValues);
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Box
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: "20px",
              border: `1px solid ${primary}30`,
              backgroundColor: `${primary}08`,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 56, color: "#34D399" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
              {t.form.successTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, maxWidth: 340 }}>
              {t.form.successDesc}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                mt: 1,
                textTransform: "none",
                borderRadius: "8px",
                borderColor: `${primary}50`,
                color: primary,
              }}
              onClick={() => setStatus("idle")}
            >
              {t.form.successBtn}
            </Button>
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        p: { xs: 3, md: 4 },
        borderRadius: "20px",
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.07)"
            : "rgba(0,0,0,0.07)",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.02)"
            : "rgba(0,0,0,0.015)",
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
        {t.form.title}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        <TextField
          label={t.form.name}
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          fullWidth
          size="small"
          sx={inputSx}
        />
        <TextField
          label={t.form.email}
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          fullWidth
          size="small"
          sx={inputSx}
        />
      </Box>

      <TextField
        label={t.form.message}
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message && Boolean(errors.message)}
        helperText={touched.message && errors.message}
        multiline
        rows={5}
        fullWidth
        size="small"
        sx={inputSx}
        placeholder={t.form.messagePlaceholder}
      />

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Alert severity="error" sx={{ borderRadius: "10px" }}>
              {t.form.errorMsg}
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileTap={{ scale: 0.97 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={status === "sending"}
          endIcon={
            status === "sending"
              ? <CircularProgress size={18} color="inherit" />
              : <SendIcon />
          }
          sx={{
            textTransform: "none",
            fontWeight: 700,
            borderRadius: "10px",
            px: 3.5,
            py: 1.4,
            boxShadow: `0 4px 20px ${primary}40`,
            "&:hover": { boxShadow: `0 6px 28px ${primary}60` },
            transition: "box-shadow 0.2s",
          }}
        >
          {status === "sending" ? t.form.sending : t.form.submit}
        </Button>
      </motion.div>
    </Box>
  );
}

export default ContactForm;
