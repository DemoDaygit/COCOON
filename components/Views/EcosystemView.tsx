
import React from 'react';
import { FlaskConical, Users, Code, HardDrive, Building2, BookOpen, FileText, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const EcosystemView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-gradient-to-b from-cyber-900 to-black">
      <div className="mb-8 border-b border-cyber-700 pb-4">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <FlaskConical className="text-cyan-400" />
          {t.ecosystem.title}
        </h2>
        <p className="text-slate-400">
          {t.ecosystem.desc}
        </p>
      </div>

      {/* BLOCK A: The Market (Participants) - Darker, Business-focused style */}
      <div className="mb-16 bg-cyber-800/30 p-6 rounded-2xl border border-cyber-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400">
                <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.ecosystem.partTitle}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Developers */}
            <div className="glass-panel p-6 rounded-xl border border-cyber-600 hover:border-blue-500 transition-colors group bg-gradient-to-br from-blue-950/30 to-transparent">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                        <Code size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase">Integration</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.ecosystem.devTitle}</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>{t.ecosystem.dev1}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>{t.ecosystem.dev2}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>{t.ecosystem.dev3}</li>
                </ul>
            </div>

            {/* Miners */}
            <div className="glass-panel p-6 rounded-xl border border-cyber-600 hover:border-green-500 transition-colors group bg-gradient-to-br from-green-950/30 to-transparent">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-green-900/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                        <HardDrive size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase">Infrastructure</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.ecosystem.minerTitle}</h4>
                 <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span>{t.ecosystem.miner1}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span>{t.ecosystem.miner2}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span>{t.ecosystem.miner3}</li>
                </ul>
            </div>

            {/* Enterprise */}
            <div className="glass-panel p-6 rounded-xl border border-cyber-600 hover:border-purple-500 transition-colors group bg-gradient-to-br from-purple-950/30 to-transparent">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                        <Building2 size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase">B2B Clients</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.ecosystem.entTitle}</h4>
                 <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span>{t.ecosystem.ent1}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span>{t.ecosystem.ent2}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span>{t.ecosystem.ent3}</li>
                </ul>
            </div>

             {/* Research Partners */}
             <div className="glass-panel p-6 rounded-xl border border-cyber-600 hover:border-yellow-500 transition-colors group bg-gradient-to-br from-yellow-950/30 to-transparent">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-yellow-900/20 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                        <GraduationCap size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase">Validation</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{t.ecosystem.resTitle}</h4>
                 <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span>{t.ecosystem.res1}</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-yellow-400 rounded-full"></span>{t.ecosystem.res2}</li>
                </ul>
            </div>
        </div>
      </div>

      {/* BLOCK B: The Science (Research Base) - Lighter, cleaner, academic style */}
      <div className="p-6 rounded-2xl border border-cyan-900/50 bg-gradient-to-b from-cyan-950/10 to-transparent">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-900/50 rounded-lg text-cyan-400">
                <BookOpen size={24} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white">{t.ecosystem.sciTitle}</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                    {t.ecosystem.sciDesc}
                </p>
            </div>
        </div>

        <div className="space-y-4">
            {/* Paper 1 */}
            <div className="glass-panel p-5 rounded-lg border-l-4 border-cyan-500 hover:bg-cyber-800 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="mt-1 text-cyan-500"><FileText size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg hover:text-cyan-400 cursor-pointer transition-colors">
                            {t.ecosystem.paper1Title}
                        </h4>
                        <div className="text-xs text-slate-500 font-mono mb-2 mt-1">IEEE Access (2024) • Authors: Zhang, Li, et al.</div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {t.ecosystem.paper1Abst}
                        </p>
                    </div>
                </div>
            </div>

            {/* Paper 2 */}
             <div className="glass-panel p-5 rounded-lg border-l-4 border-purple-500 hover:bg-cyber-800 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="mt-1 text-purple-500"><FileText size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg hover:text-purple-400 cursor-pointer transition-colors">
                            {t.ecosystem.paper2Title}
                        </h4>
                         <div className="text-xs text-slate-500 font-mono mb-2 mt-1">arXiv:2401.xxxxx • Cryptographic ePrint Archive</div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                             {t.ecosystem.paper2Abst}
                        </p>
                    </div>
                </div>
            </div>

             {/* Paper 3 */}
             <div className="glass-panel p-5 rounded-lg border-l-4 border-green-500 hover:bg-cyber-800 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="mt-1 text-green-500"><FileText size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg hover:text-green-400 cursor-pointer transition-colors">
                           {t.ecosystem.paper3Title}
                        </h4>
                         <div className="text-xs text-slate-500 font-mono mb-2 mt-1">NeurIPS 2024 (Workshop)</div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                             {t.ecosystem.paper3Abst}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
