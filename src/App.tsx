import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';
import Setting from './components/Setting';
import Counter from './components/Counter';
import useTimer from './hooks/useTimer';

function App() {
  const { count, start, status, pause } = useTimer();
  return (
    <main className="bg-purple-timer min-h-screen flex items-center flex-col justify-between py-8">
      <Tabs />
      <Counter onStart={start} status={status} time={count} onPause={pause} />
      <Setting />
    </main>
  );
}

export default App;
