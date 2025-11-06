import "../../globals.css";
import "../../../styles/theme.css";
import type { ReactNode } from "react";

export default function WidgetLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
