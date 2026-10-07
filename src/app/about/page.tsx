export default function About() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-[#f4f4f7] font-sans overflow-hidden">
      {/* 백그라운드 그라디언트 글로우 효과 */}
      <div className="bg-glow top-[-100px] right-[-200px]" />
      <div className="bg-glow-orange bottom-[-200px] left-[-100px]" />

      {/* 헤더 네비게이션 */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold tracking-wider text-white">NURUTUM</span>
            <span className="h-4 w-[1px] bg-white/20"></span>
            <span className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Play Lab</span>
          </a>
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-zinc-300">
            <a href="/" className="hover:text-white transition-colors">홈으로</a>
            <a href="/about" className="text-white font-semibold transition-colors">브랜드 스토리</a>
          </nav>
        </div>
      </header>

      {/* 메인 스토리 콘텐츠 */}
      <main className="relative pt-40 pb-24 max-w-4xl mx-auto px-6 z-10">
        {/* 브레드크럼 */}
        <div className="text-xs text-indigo-400 font-semibold tracking-widest uppercase mb-4">
          Brand Story
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] mb-16">
          꾸준함으로 채우는<br />
          <span className="text-gradient-gold">매일의 유용한 빈틈</span>
        </h1>

        {/* 철학 설명 (카드형 레이아웃) */}
        <div className="space-y-12">
          {/* 어원 스토리 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              느루틈의 시작<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">Initiative</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                느루틈은 순우리말인 <strong className="text-white font-semibold text-lg">‘느루’</strong>와 공백을 뜻하는 <strong className="text-white font-semibold text-lg">‘틈’</strong>을 결합하여 태어난 이름입니다.
              </p>
              <p className="text-zinc-400">
                ‘느루’는 <span className="text-amber-300 font-medium">“한꺼번에 몰아치지 않고, 오래도록 꾸준히”</span>라는 의미를 담고 있습니다. 
                우리는 오래도록 꾸준히 가치를 발하는 결과물을 추구합니다.
              </p>
            </div>
          </div>

          {/* 철학 1: 틈을 발견하다 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              틈을 발견하다<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">Discovery</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                일상 속 마주하는 경험에는 보이지 않는 <strong>‘틈’</strong>이 존재합니다. 
                모호함, 미세한 불편함, 혹은 일상에서의 아쉬운 공백 등입니다.
              </p>
              <p className="text-zinc-400">
                우리는 일상속 이 틈을 관찰합니다.
              </p>
            </div>
          </div>

          {/* 철학 2: 채우다 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              채우다<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">Fulfilment</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                발견한 틈에 <strong className="text-white font-semibold">유용함과 즐거움을 느루</strong> 채워 나갑니다.
              </p>
              <p className="text-zinc-400">
                자유롭고 즐거운 아이디어를 이용하여 이 틈을 채웁니다. 조급함 대신 꾸준함과 집요한 자세로 채움을 만들어 갑니다.
              </p>
            </div>
          </div>
        </div>

        {/* 비전 메세지 슬로건 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl mt-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-indigo-300 text-sm font-semibold tracking-wider mb-4">OUR MISSION</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-6">
              "매일의 빈틈을 즐거움으로 채우는<br />느루틈 PLAY LAB"
            </h3>
          </div>
        </div>

        {/* 목록으로 가기 버튼 */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-102"
          >
            메인 페이지로 돌아가기
          </a>
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
