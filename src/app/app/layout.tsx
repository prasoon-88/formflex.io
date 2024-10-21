import SidePannel from "@/components/custom/sidePanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SidePannel />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
}
