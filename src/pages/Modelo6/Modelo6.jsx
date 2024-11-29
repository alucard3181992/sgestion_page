/* eslint-disable @next/next/no-css-tags */
import React, { useEffect, useState } from "react";
import Main from "@/components/PaginaModelo6/Main";
export default function Modelo4() {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="fuera">
        <link
          id="theme-link"
          rel="stylesheet"
          href="/icons/themes/lara-light-teal/theme.css"
        />

        <Main />
      </div>
    </React.Fragment>
  );
}
