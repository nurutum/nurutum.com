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
            <a href="/" className="text-white font-semibold transition-colors">홈</a>
            <a href="/about" className="hover:text-white transition-colors">브랜드 스토리</a>
            <a href="/product" className="hover:text-white transition-colors">프로덕트</a>
          </nav>
        </div>
      </header>

      {/* 메인 활성 히어로 섹션 */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 z-10 pt-32 pb-20">
        <div className="max-w-3xl break-keep">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide mb-8">
            ✨ NURUTUM Play Lab
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-gradient">매일의 빈틈을 즐거움으로 채우는</span>
            <br />
            <span className="text-gradient-gold">느루틈 PLAY LAB</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            일상 속 작고 미세한 틈새를 관찰하고,<br />
            유용한 즐거움과 여유를 전하는 응용프로그램을 만듭니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <a
              href="/product"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
            >
              첫 번째 프로덕트: 사잇시간 ➔
            </a>
            <a
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              브랜드 스토리 읽기
            </a>
          </div>

          {/* 피처드 프로덕트 미리보기 카드 */}
          <div className="text-left glass-panel p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto relative overflow-hidden hover-border-glow">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono text-indigo-300 tracking-widest uppercase font-bold">
                FEATURED PRODUCT
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                🛠️ In Development
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              사잇시간 <span className="text-zinc-400 text-base font-normal">Sait-Sigan</span>
            </h3>
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
              "독서·학습·일상의 틈새를 시간 블럭으로 계획하고, ‘지금’ 뷰로 몰입하며, 회고로 경험을 남기는 macOS 응용프로그램"
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-xs text-zinc-500">시간을 계획하고, 경험을 기록하는 데스크톱 랩</span>
              <a href="/product" className="text-xs font-semibold text-indigo-300 hover:text-white transition-colors">
                자세히 보기 ➔
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-zinc-500 relative z-10 bg-[#060609]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">NURUTUM</span>
            <span>© 2026 NURUTUM Play Lab. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:master@nurutum.com" className="hover:text-white transition-colors">
              문의: master@nurutum.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
