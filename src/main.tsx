import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import {
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartAnnotationModule,
  IgrLegendModule,
} from "@infragistics/igniteui-react-charts";

[
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartAnnotationModule,
  IgrLegendModule,
].forEach((module) => module.register());

declare module "react" {
  interface CSSProperties {
    "--ig-size"?:
      | "var(--ig-size-small)"
      | "var(--ig-size-medium)"
      | "var(--ig-size-large)";
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
