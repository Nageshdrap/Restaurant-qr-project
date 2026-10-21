import React from 'react';
import { QrCode, UtensilsCrossed, Sparkles, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-amber-500 selection:text-black">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-amber-500/10">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Setup Complete
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          Restaurant QR App <Sparkles className="w-5 h-5 text-amber-400" />
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Tailwind CSS v4 &amp; Lucide React icons are successfully installed and configured.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-4">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
            <QrCode className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-200">Ready for QR Code ordering</p>
            <p className="text-xs text-slate-500">Edit src/App.tsx to start building</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
