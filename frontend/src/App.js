import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import CompanyResearch from "@/pages/CompanyResearch";
import StrategyIdeation from "@/pages/StrategyIdeation";
import CommandCenter from "@/pages/CommandCenter";
import ContentStudio from "@/pages/ContentStudio";
import AICopilotDock from "@/components/AICopilotDock";

function App() {
  const [bootReady, setBootReady] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const t = setTimeout(() => setBootReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App bg-ink-bg text-ink-text min-h-screen font-sans antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/research" element={<CompanyResearch />} />
          <Route path="/ideation" element={<StrategyIdeation />} />
          <Route path="/command-center" element={<CommandCenter />} />
          <Route path="/studio" element={<ContentStudio />} />
        </Routes>
        <AICopilotDock />
      </BrowserRouter>
      <Toaster theme="dark" position="bottom-right" />
      {bootReady && null}
    </div>
  );
}

export default App;
