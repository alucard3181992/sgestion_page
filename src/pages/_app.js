import "@/styles/globals.css";
import "@/styles/modal.css";
//import "primereact/resources/themes/arya-blue/theme.css";

import "primeflex/primeflex.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import InicioPage from "@/components/Inicio/Inicio";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <InicioPage Component={Component} pageProps={pageProps} />
      <ProgressBar
        options={{
          showSpinner: true,
        }}
        shallowRouting
        color="var(--primary-color)"
      />
    </>
  );
}
