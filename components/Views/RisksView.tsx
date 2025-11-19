import React from 'react';
import { AlertTriangle, ShieldAlert, WifiOff, ZapOff } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const RisksView: React.FC = () => {
  const { t } = useLanguage();

  const risks = [
    {
      title: t.risks.r1Title,
      prob: t.risks.r1Prob,
      impact: t.risks.r1Imp,
      icon: <ShieldAlert className="text-red-400" />,
      mitigation: t.risks.r1Mit
    },
    {
      title: t.risks.r2Title,
      prob: t.risks.r2Prob,
      impact: t.risks.r2Imp,
      icon: <ZapOff className="text-orange-400" />,
      mitigation: t.risks.r2Mit
    },
    {
      title: t.risks.r3Title,
      prob: t.risks.r3Prob,
      impact: t.risks.r3Imp,
      icon: <WifiOff className="text-yellow-400" />,
      mitigation: t.risks.r3Mit
    }
  ];

  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <div className="mb-8 border-b border-cyber-700 pb-4">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <AlertTriangle className="text-cyan-400" />
          {t.risks.title}
        </h2>
        <p className="text-slate-400">
          {t.risks.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {risks.map((risk, index) => (
          <div key={index} className="glass-panel p-6 rounded-xl border border-cyber-700 flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-cyber-800 rounded-lg border border-cyber-600 shrink-0">
              {risk.icon}
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-bold text-white">{risk.title}</h3>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 border border-slate-600">Prob: {risk.prob}</span>
                    <span className="px-2 py-1 bg-red-900/30 rounded text-xs text-red-400 border border-red-900">Impact: {risk.impact}</span>
                 </div>
               </div>
               <div className="mt-3">
                 <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">{t.risks.mitStrat}</p>
                 <p className="text-slate-300">{risk.mitigation}</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-panel p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/30 text-center">
         <h3 className="text-2xl font-bold text-white mb-4">{t.risks.whyTitle}</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
               <div className="text-cyan-400 font-bold text-lg mb-2">{t.risks.w1Title}</div>
               <p className="text-sm text-slate-400">{t.risks.w1Desc}</p>
            </div>
            <div>
               <div className="text-purple-400 font-bold text-lg mb-2">{t.risks.w2Title}</div>
               <p className="text-sm text-slate-400">{t.risks.w2Desc}</p>
            </div>
            <div>
               <div className="text-blue-400 font-bold text-lg mb-2">{t.risks.w3Title}</div>
               <p className="text-sm text-slate-400">{t.risks.w3Desc}</p>
            </div>
         </div>
      </div>
    </div>
  );
};