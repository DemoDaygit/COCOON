import React from 'react';
import { Calculator, TrendingUp, Battery, Cpu, DollarSign, Scale } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const MonetizationView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <div className="mb-8 border-b border-cyber-700 pb-4">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Calculator className="text-cyan-400" />
          {t.monetization.title}
        </h2>
        <p className="text-slate-400">
          {t.monetization.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Unit Economics Breakdown */}
        <div className="glass-panel p-0 rounded-xl border border-cyan-500/30 overflow-hidden">
          <div className="bg-cyber-800 p-4 border-b border-cyber-600">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale size={18} className="text-cyan-400" />
              {t.monetization.unitEcoTitle}
            </h3>
            <p className="text-xs text-slate-400">{t.monetization.unitEcoSubtitle}</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-cyber-700/50">
               <div>
                 <span className="text-sm text-slate-400 block">Energy Cost (Irkutsk)</span>
                 <span className="text-xs text-slate-500">0.7 kWh per 1M tokens (H100)</span>
               </div>
               <div className="text-right font-mono text-red-400">
                 $0.021
               </div>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-cyber-700/50">
               <div>
                 <span className="text-sm text-slate-400 block">Hardware Amortization</span>
                 <span className="text-xs text-slate-500">Based on 3yr lifecycle</span>
               </div>
               <div className="text-right font-mono text-red-400">
                 $0.048
               </div>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-cyber-700/50 bg-cyber-800/30 -mx-6 px-6">
               <div>
                 <span className="text-sm text-white font-bold block">TOTAL COST (COGS)</span>
                 <span className="text-xs text-slate-500">Per 1 Million Tokens</span>
               </div>
               <div className="text-right font-mono font-bold text-white">
                 $0.069
               </div>
            </div>
            
            <div className="pt-2">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-sm text-green-400">Market Price (GPT-4)</span>
                 <span className="text-sm font-mono text-green-400 line-through">$30.00</span>
               </div>
               <div className="flex justify-between items-center mb-4">
                 <span className="text-sm text-cyan-400 font-bold">Our Protocol Price</span>
                 <span className="text-lg font-mono font-bold text-cyan-400">$2.00</span>
               </div>
               <div className="w-full bg-cyber-800 rounded p-3 text-center border border-cyan-500/50">
                  <span className="text-xs text-slate-400 uppercase tracking-widest">Gross Margin</span>
                  <div className="text-2xl font-bold text-cyan-400 mt-1">96.5%</div>
               </div>
            </div>
          </div>
        </div>

        {/* Node Operator P&L */}
        <div className="glass-panel p-6 rounded-xl border border-cyber-600">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-green-400" />
              {t.monetization.nodeTitle}
           </h3>
           
           <div className="space-y-4">
              <div className="bg-cyber-900/50 p-4 rounded border border-cyber-700">
                 <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Cluster Capacity</span>
                    <span className="text-sm font-mono text-white">8x H100 SXM5</span>
                 </div>
                 <div className="w-full bg-cyber-700 h-1.5 rounded-full mt-2">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 rounded bg-cyber-800 border border-cyber-700">
                    <div className="text-xs text-slate-400 mb-1">Monthly Revenue</div>
                    <div className="text-lg font-mono text-green-400 font-bold">$24,800</div>
                    <div className="text-[10px] text-slate-500">@ 70% Utilization</div>
                 </div>
                 <div className="p-3 rounded bg-cyber-800 border border-cyber-700">
                    <div className="text-xs text-slate-400 mb-1">Monthly OpEx</div>
                    <div className="text-lg font-mono text-red-400 font-bold">-$1,650</div>
                    <div className="text-[10px] text-slate-500">Power + Cooling (Irkutsk)</div>
                 </div>
              </div>

              <div className="p-4 rounded bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
                 <div className="flex justify-between items-end">
                    <div>
                       <div className="text-sm text-cyan-300 font-bold">Net Monthly Profit</div>
                       <div className="text-[10px] text-slate-400">After Protocol Fees (15%)</div>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white">$19,430</div>
                 </div>
              </div>

              <div className="flex gap-2 mt-2">
                 <div className="px-2 py-1 rounded bg-green-900/20 border border-green-800 text-[10px] text-green-400">ROI: 14 Months</div>
                 <div className="px-2 py-1 rounded bg-blue-900/20 border border-blue-800 text-[10px] text-blue-400">IRR: 82%</div>
              </div>
           </div>
        </div>
      </div>

      {/* Protocol Revenue Model */}
      <div className="glass-panel p-6 rounded-xl border-t-4 border-purple-500">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
               <h3 className="text-lg font-bold text-white">{t.monetization.protocolTitle}</h3>
               <p className="text-sm text-slate-400">{t.monetization.protocolDesc}</p>
            </div>
            <div className="mt-4 md:mt-0 px-3 py-1 bg-purple-900/30 rounded border border-purple-500/50 text-purple-300 text-xs font-mono">
               Protocol Take Rate: 15-20%
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 relative group">
               <div className="absolute inset-0 bg-purple-500/5 rounded-lg transform group-hover:scale-105 transition-transform"></div>
               <div className="relative">
                  <div className="mx-auto w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-3 text-purple-400">
                     <DollarSign size={20} />
                  </div>
                  <div className="font-bold text-white mb-1">Transaction Fees</div>
                  <div className="text-xs text-slate-400 px-4">Small fee on every compute task routed through the bridge.</div>
               </div>
            </div>
            
            <div className="p-4 relative group">
               <div className="absolute inset-0 bg-purple-500/5 rounded-lg transform group-hover:scale-105 transition-transform"></div>
               <div className="relative">
                  <div className="mx-auto w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-3 text-purple-400">
                     <Battery size={20} />
                  </div>
                  <div className="font-bold text-white mb-1">Liquidity Slashing</div>
                  <div className="text-xs text-slate-400 px-4">Revenue from malicious nodes failing Proof-of-Learning.</div>
               </div>
            </div>

            <div className="p-4 relative group">
               <div className="absolute inset-0 bg-purple-500/5 rounded-lg transform group-hover:scale-105 transition-transform"></div>
               <div className="relative">
                  <div className="mx-auto w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-3 text-purple-400">
                     <Cpu size={20} />
                  </div>
                  <div className="font-bold text-white mb-1">Priority Access</div>
                  <div className="text-xs text-slate-400 px-4">Premium fees from institutional clients for reserved H100 clusters.</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};