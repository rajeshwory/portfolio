import Header from "@/components/header";

export default function Home() {
  return (
    <main
      className="relative bg-cover flex flex-1 object-contain bg-left h-[100vh] z-10 p-10"
      style={{
        backgroundImage: 'url("background.jpg")',
        backgroundColor: "black",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 -z-10" />
      <Header />
    </main>
  );
}
