import DashboardHeader from "@/components/DashboardHeader";

export const metadata = {
  title: "Job Sniffer",
  description: "Get access to the latest jobs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}
