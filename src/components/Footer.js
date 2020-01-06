import React from "react";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  // It looks like this guy is never used (we're exporting Footer, which is undefined)
  // A tool like eslint (https://eslint.org/) can help you catch these kinds of mistakes
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Footer;
