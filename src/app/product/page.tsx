import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로덕트 | 느루틈 Play Lab",
  description: "시간을 계획하고 경험을 기록하는 사잇시간(Sigan) 등 일상의 틈을 유용함과 즐거움으로 채우는 느루틈의 응용프로그램 프로덕트를 소개합니다.",
};

export default function Product() {
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
            <a href="/" className="hover:text-white transition-colors">홈</a>
            <a href="/about" className="hover:text-white transition-colors">브랜드 스토리</a>
            <a href="/product" className="text-white font-semibold transition-colors">프로덕트</a>
          </nav>
        </div>
      </header>

      {/* 메인 프로덕트 콘텐츠 */}
      <main className="relative pt-40 pb-24 max-w-5xl mx-auto px-6 z-10">
        {/* 브레드크럼 */}
        <div className="text-xs text-indigo-400 font-semibold tracking-widest uppercase mb-4">
          Products
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6">
          <span className="text-gradient-gold">느루틈의 프로덕트</span>
        </h1>

        {/* 프로덕트 리스트 (사잇시간 카드) */}
        <div className="space-y-12">
          {/* 사잇시간 메인 카드 */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 hover-border-glow">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
                🛠️ In Development · Coming Soon
              </div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">#01</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  사잇시간
                </h2>
                <p className="text-lg font-medium text-amber-300">
                  시간을 계획하고, 경험을 기록하는 데스크톱 랩
                </p>
                <blockquote className="text-zinc-300 text-base leading-relaxed border-l-2 border-indigo-500/50 pl-4 my-4">
                  "일정 등록부터 지금 할 일에만 몰입하기, 그리고 회고를 남겨 다음 활동의 출발점으로 연결하는 시간 관리 서비스"
                </blockquote>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  독서·학습·일상 등 활동을 블럭으로 배치하고, 
                  작업 시 ‘지금’ 뷰로 현재 활동에 집중하며, 
                  마무리 시점에 남긴 회고를 모아보는 응용 프로그램입니다.
                </p>
              </div>

              {/* 피처 하이라이트 */}
              <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                <h3 className="text-xs text-indigo-300 font-mono font-bold tracking-widest uppercase mb-2">
                  KEY FEATURES
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🧱</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">맞춤형 활동 블럭</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        독서(책 정보·회고) & 이러닝(강의 URL 바로 열기) 전용 블럭
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">🎯</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">지금 뷰 (Now View) 몰입</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        현재 진행 중인 활동과 앞뒤 일정에만 전념하는 집중 환경
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">🔔</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">2단계 알림 & 회고 연결</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        시작·종료 알림으로 시작하고, 회고 한 줄로 다음 활동 연결
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 탐색 버튼 */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-center">
          <a
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-102"
          >
            느루틈 브랜드 스토리 보기
          </a>
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
