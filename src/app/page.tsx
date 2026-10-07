export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-[#f4f4f7] font-sans overflow-hidden flex flex-col justify-between">
      {/* 백그라운드 그라디언트 글로우 효과 */}
      <div className="bg-glow top-[-200px] left-[-100px]" />
      <div className="bg-glow-orange bottom-[-100px] right-[-100px]" />

      {/* 헤더 네비게이션 */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold tracking-wider text-white">NURUTUM</span>
            <span className="h-4 w-[1px] bg-white/20"></span>
            <span className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Play Lab</span>
          </a>
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-zinc-300">
            <a href="/" className="text-white font-semibold transition-colors">홈으로</a>
            <a href="/about" className="hover:text-white transition-colors">브랜드 스토리</a>
          </nav>
        </div>
      </header>

      {/* 메인 준비 중 안내 섹션 */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <div className="max-w-2xl break-keep">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide mb-8">
            ⚙️ Under Construction
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-gradient">매일의 빈틈을 즐거움으로 채우는</span>
            <br />
            <span className="text-gradient-gold">느루틈 PLAY LAB</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mb-12 leading-relaxed">
            현재 공식 웹사이트와 새로운 응용프로그램들을 준비 중입니다.<br />
            2026년 10월, 더 유용하고 즐거운 소프트웨어로 찾아뵙겠습니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">Contact</span>
            <a
              href="mailto:master@nurutum.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
              이메일로 문의하기 (master@nurutum.com)
            </a>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-zinc-500 relative z-10 bg-[#060609]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">NURUTUM</span>
            <span>© 2026 NURUTUM Play Lab. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
