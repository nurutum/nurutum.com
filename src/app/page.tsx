export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-[#f4f4f7] font-sans overflow-hidden flex flex-col justify-between">
      {/* 백그라운드 그라디언트 글로우 효과 */}
      <div className="bg-glow top-[-200px] left-[-100px]" />
      <div className="bg-glow-orange bottom-[-100px] right-[-100px]" />

      {/* 헤더 네비게이션 (메뉴 가림, 로고만 표시) */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider text-white">NURUTUM</span>
            <span className="h-4 w-[1px] bg-white/20"></span>
            <span className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Studio</span>
          </div>
          {/* 메뉴 링크들은 숨김 처리 */}
        </div>
      </header>

      {/* 메인 준비 중 안내 섹션 */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide mb-8">
            ⚙️ Under Construction
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-gradient">꾸준함으로 세상의 틈을 채우는</span>
            <br />
            <span className="text-gradient-gold">느루틈</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mb-12 leading-relaxed">
            더 나은 가치를 만들고 완전한 현실을 짓기 위해,<br />
            현재 공식 웹사이트와 서비스를 준비 중입니다. 
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">Contact</span>
            <a
              href="mailto:nurutum.master@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
              이메일로 문의하기 (nurutum.master@gmail.com)
            </a>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-zinc-500 relative z-10 bg-[#060609]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">NURUTUM</span>
            <span>© 2026 NURUTUM Studio. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
