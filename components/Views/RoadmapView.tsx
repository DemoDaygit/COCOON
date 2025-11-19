import React from 'react';
import { Map, CheckCircle, Circle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const RoadmapView: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      id: 1,
      title: t.roadmap.p1Title,
      time: t.roadmap.p1Time,
      status: "active",
      items: t.roadmap.p1Items
    },
    {
      id: 2,
      title: t.roadmap.p2Title,
      time: t.roadmap.p2Time,
      status: "pending",
      items: t.roadmap.p2Items
    },
    {
      id: 3,
      title: t.roadmap.p3Title,
      time: t.roadmap.p3Time,
      status: "future",
      items: t.roadmap.p3Items
    }
  ];

  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <div className="mb-8 border-b border-cyber-700 pb-4">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Map className="text-cyan-400" />
          {t.roadmap.title}
        </h2>
        <p className="text-slate-400">
          {t.roadmap.desc}
        </p>
      </div>

      <div className="space-y-8 relative">
         {/* Vertical Line */}
         <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-cyber-700"></div>

         {phases.map((phase) => (
           <div key={phase.id} className="relative pl-12">
              {/* Dot */}
              <div className={`absolute left-1 top-2 w-6 h-6 rounded-full border-4 flex items-center justify-center z-10 bg-cyber-900 ${
                phase.status === 'active' ? 'border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' :
                phase.status === 'pending' ? 'border-slate-600 text-slate-600' : 'border-slate-800 text-slate-800'
              }`}>
                 {phase.status === 'active' && <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>}
              </div>

              <div className={`glass-panel p-6 rounded-xl border-l-4 transition-all duration-300 hover:bg-cyber-800 ${
                 phase.status === 'active' ? 'border-cyan-500' : 'border-slate-700 opacity-80'
              }`}>
                 <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${phase.status === 'active' ? 'text-white' : 'text-slate-400'}`}>
                        {t.roadmap.p1Title.startsWith('Phase') ? '' : `Phase ${phase.id}: `}{phase.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-500">{phase.time}</span>
                    </div>
                    {phase.status === 'active' && <span className="px-2 py-1 bg-cyan-900/50 text-cyan-400 text-xs rounded border border-cyan-700">{t.roadmap.inProgress}</span>}
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        {phase.status === 'active' && idx < 2 ? <CheckCircle size={14} className="text-green-400" /> : <Circle size={14} className="text-slate-600" />}
                        <span>{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};