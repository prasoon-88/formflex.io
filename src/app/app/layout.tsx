import SidePannel from "@/components/custom/sidePanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 bg-noble-black-700">
      <div className="col-span-4 md:col-span-3 lg:col-span-2 h-screen">
        <SidePannel />
      </div>
      <div className="col-span-8 md:col-span-9 lg:col-span-10">{children}</div>
    </div>
  );
}
