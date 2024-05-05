import * as React from "react";

import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Cab() {
  const str = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4425311881114!2d78.0178559793457!3d30.338370799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ff4740401f%3A0x39e76b0cbd98d314!2sHotel%20Alaknanda!5e0!3m2!1sen!2sin!4v1714828668299!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  const val = str.slice(str.indexOf(`"`) + 1, str.indexOf(`"`, 20));
  return <iframe src={val} width={600} height={450} style={{ border: 0 }} />;
}
