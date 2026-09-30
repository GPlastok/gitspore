import Scene from "@/components/Scene";

// page.js stays a Server Component; only <Scene> runs in the browser.
export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </main>
  );
}
