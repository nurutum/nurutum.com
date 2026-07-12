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
            <span className="text-xs text-indigo-300 font-medium tracking-widest uppercase">Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="/" className="hover:text-white transition-colors">홈으로</a>
            <a href="/about" className="text-white font-semibold transition-colors">브랜드 스토리</a>
            <a href="/#services" className="hover:text-white transition-colors">서비스</a>
            <a href="/#contact" className="hover:text-white transition-colors">문의하기</a>
          </nav>
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            프로젝트 의뢰
          </a>
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
          꾸준함으로 메우는<br />
          <span className="text-gradient-gold">크리에이티브의 빈틈</span>
        </h1>

        {/* 철학 설명 (카드형 레이아웃) */}
        <div className="space-y-12">
          {/* 어원 스토리 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              느루틈의 시작<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">The Origin</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                느루틈은 순 우리말인 <strong className="text-white font-semibold text-lg">‘느루’</strong>와 공백을 뜻하는 <strong className="text-white font-semibold text-lg">‘틈’</strong>을 결합하여 태어난 이름입니다.
              </p>
              <p className="text-zinc-400">
                ‘느루’는 <span className="text-amber-300 font-medium">“한꺼번에 몰아치지 않고, 오래도록 꾸준히”</span>라는 의미를 담고 있습니다. 
                우리는 조급하게 완성하여 금세 균열이 생기는 결과물보다, 오래도록 가치 있게 스며드는 결과물을 추구합니다.
              </p>
            </div>
          </div>

          {/* 철학 1: 틈을 찾다 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              틈을 발견하다<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">01. Discovery</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                세상의 모든 기획과 비즈니스 아이디어에는 보이지 않는 <strong>‘틈’</strong>이 존재합니다. 
                기획의 모호함, 사용자가 느끼는 미세한 불편함, 혹은 디자인과 기술 사이의 단절 등입니다.
              </p>
              <p className="text-zinc-400">
                우리는 비즈니스가 본 궤도에 오르기 전 마주하는 모든 공백과 균열을 기획 단계에서 선제적으로 발견하고 관찰합니다.
              </p>
            </div>
          </div>

          {/* 철학 2: 느루 채우다 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8 border-t border-white/10">
            <div className="text-2xl font-bold text-white tracking-wide">
              느루 채워나가다<br />
              <span className="text-xs text-indigo-300 font-mono tracking-widest uppercase">02. Fulfilment</span>
            </div>
            <div className="md:col-span-2 text-zinc-300 leading-relaxed space-y-4">
              <p>
                발견된 틈은 단기적인 땜질식 처방이 아닌, **오래도록 견고한 설계(느루)**를 통해 채워집니다.
              </p>
              <p className="text-zinc-400">
                Next.js와 같은 고도화된 웹 기술을 통해 속도와 안정성을 확보하고, 사용자의 눈길과 마음이 머물 수 있는 감각적인 모던 디자인 인터랙션을 촘촘하게 쌓아 올립니다. 조급함 대신 꾸준함과 집요함으로 빈틈없는 코드를 다듬어냅니다.
              </p>
            </div>
          </div>
        </div>

        {/* 비전 메세지 슬로건 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl mt-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-indigo-300 text-sm font-semibold tracking-wider mb-4">OUR MISSION</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-6">
              "조급히 서두르지 않기에,<br />더 오랫동안 단단한 비즈니스를 짓습니다."
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              느루틈은 단순한 외주 제작사가 아닙니다. 파트너의 비즈니스가 튼튼하게 자라날 수 있도록 설계부터 최종 구현까지 오랜 시간 곁에서 호흡하는 크리에이티브 파트너가 되고자 합니다.
            </p>
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">NURUTUM</span>
            <span>© 2026 NURUTUM Studio. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
