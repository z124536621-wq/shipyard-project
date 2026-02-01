import React, { useState } from 'react';

// 模拟数据组件
export default function ShipyardApp() {
  const [isSubmitMode, setIsSubmitMode] = useState(false);
  const [filter, setFilter] = useState('All');

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-200 font-sans selection:bg-orange-500/30">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800 bg-[#060b13]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsSubmitMode(false)}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">S</div>
            <span className="font-bold text-lg tracking-tight">The Shipyard</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">Feed</span>
            <span className="hover:text-white cursor-pointer transition-colors">Ships</span>
            <span className="text-orange-400 cursor-pointer hover:brightness-110">$SHIPYARD</span>
          </div>
        </div>
        <button
          onClick={() => setIsSubmitMode(true)}
          className="bg-[#f9a825] hover:bg-[#fbc02d] text-[#1a1a1a] px-5 py-2 rounded-md font-bold text-sm transition-all shadow-[0_0_15px_rgba(249,168,37,0.2)] active:scale-95"
        >
          Submit Ship
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {!isSubmitMode ? (
          <>
            {/* 看板头部 */}
            <header className="mb-10">
              <h1 className="text-3xl font-extrabold text-white mb-2">Proof-of-Ship Board</h1>
              <p className="text-slate-400">
                Ships need <span className="text-white font-semibold">3 valid attestations</span> to become verified.
                Verified ships earn <span className="text-[#f9a825] font-bold">+50 $SHIPYARD</span>.
              </p>
            </header>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Total Ships', value: 14, color: 'text-white' },
                { label: 'Verified', value: 11, color: 'text-green-400' },
                { label: 'Pending', value: 3, color: 'text-orange-400' },
                { label: 'Attestations', value: 38, color: 'text-blue-400' }
              ].map((item) => (
                <div key={item.label} className="bg-[#0f172a] border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
                  <div className={`text-4xl font-black mb-1 ${item.color}`}>{item.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>

            {/* 过滤器 */}
            <div className="flex gap-2 mb-8 bg-slate-900/50 p-1 rounded-lg w-fit">
              {['All', 'Pending', 'Verified'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-1.5 rounded-md text-sm font-semibold transition-all ${filter === t ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* 空白占位 */}
            <div className="border border-dashed border-slate-800 rounded-2xl h-64 flex flex-col items-center justify-center text-slate-600 bg-slate-900/20">
              <p>No ships to display in {filter} category</p>
            </div>
          </>
        ) : (
          /* 提交表单 */
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Submit Ship</h2>
              <p className="text-slate-400 text-sm mb-8">Prove your work. Fill in the details below to claim your rewards.</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Ship Title</label>
                  <input type="text" placeholder="What did you build?" className="w-full bg-[#060b13] border border-slate-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Description (optional)</label>
                  <textarea rows="3" placeholder="Describe what you built and how it works..." className="w-full bg-[#060b13] border border-slate-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Proof URL</label>
                  <input type="url" placeholder="https://github.com/you/project" className="w-full bg-[#060b13] border border-slate-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Proof Type</label>
                  <select className="w-full bg-[#060b13] border border-slate-800 rounded-lg px-4 py-3 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                    <option>GitHub</option>
                    <option>URL</option>
                    <option>Demo</option>
                    <option>Screenshot</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-[#f9a825] hover:bg-[#fbc02d] text-black font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg">Submit Ship</button>
                  <button onClick={() => setIsSubmitMode(false)} className="px-6 py-3 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
