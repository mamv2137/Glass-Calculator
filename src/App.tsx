import React from "react";
import "./App.css";
import { Tabs } from "./components/Tabs";
import Setting from "./components/Setting";
import Counter from "./components/Counter";

function App() {
  return (
    <main className="bg-purple-timer min-h-screen flex items-center flex-col justify-between py-8">
      <Tabs />
      <Counter />
      <Setting />
    </main>
  );
}

export default App;
