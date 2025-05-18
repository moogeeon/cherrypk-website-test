import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">CherryFlow : 사내 AI 솔루션</h1>
            <p className="text-lg text-white/80 max-w-[600px]">
              업무 프로세스를 간소화하고 효율성을 높이는 시스템 플로우 솔루션을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                시작하기
              </Button>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                자세히 알아보기
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/메인페이지.png" alt="CherryFlow 시스템" fill className="object-cover" />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white space-y-16">
        <div className="container max-w-4xl mx-auto space-y-16">
          {[
            {
              key: "missing-docs",
              title: "📁 필요한 문서를 못 찾겠어요",
              quote: "“파일명과 작성자가 누군지 기억 안 나고, 어디 저장했는지도 모르겠어요.”",
              solutions: [
                "정확한 파일명이나 저장 위치를 몰라도, 프로젝트명·업무 키워드 등 맥락 기반 검색으로 문서를 찾을 수 있어요.",
                "Drive, NAS 등 외부 저장소와 연동해, 하나의 플랫폼 내에서 모든 문서를 확인할 수 있어요.",
                "관련 문서, 유사 문서, 참고 웹페이지까지 정보 탐색이 확장됩니다.",
              ],
              image: "1-1.png",
            },
            {
              key: "knowledge-tracking",
              title: "📊 팀 지식이 어떻게 활용되는지 몰라요",
              quote: "“잘 만든 자료가 그냥 묻히고 있는 것 같아요. 활용되고 있는지 확인이 안 돼요.”",
              solutions: [
                "자주 참고되는 문서, 작성자 등을 시각적으로 파악할 수 있어요.",
                "활용도 낮은 자료나 지식 흐름이 끊긴 부분을 찾아 개선할 수 있어요.",
                "채팅/검색 기록 기반으로 팀 내 지식 흐름을 분석할 수 있어요.",
              ],
              image: "1-2.png",
            },
            {
              key: "offboarding-gap",
              title: "🚪 퇴사자 발생 시 공백이 생겨요",
              quote: "“퇴사한 분이 만든 자료를 발견했는데, 무슨 내용인지 파악이 안 되네요.”",
              solutions: [
                "문서와 연관된 레퍼런스, 회의록과 함께 저장되어 담당자 없이도 맥락 확인이 가능해요.",
                "후임자가 기존 자료를 그대로 이어받아 업무를 계속할 수 있어요.",
              ],
              image: "1-3.png",
            },
            {
              key: "onboarding-delay",
              title: "🧑‍💻 신입사원 온보딩이 늦어요",
              quote: "“제가 뭘 먼저 봐야 할지 모르겠어요. 계속 물어보긴 눈치도 보이고요.”",
              solutions: [
                "프로젝트 흐름을 한눈에 볼 수 있는 위크스페이스를 제공합니다.",
                "자율적인 검색과 참조로 빠르게 적응할 수 있어요.",
                "이전 기록과 담당자를 쉽게 확인할 수 있어요.",
              ],
              image: "1-4.png",
            },
            {
              key: "duplicate-work",
              title: "🌀 중복 작업 / 재작업을 반복해요",
              quote: "“누가 만들었는지 모르고, 중복 문서를 또 만들게 돼요.”",
              solutions: [
                "문서를 만들기 전에 유사 문서를 검색해 미리 확인할 수 있어요.",
                "팀 내 작업 히스토리를 통해 누가 어떤 작업을 했는지도 파악할 수 있어요.",
              ],
              image: "1-5.png",
            },
            {
              key: "team-collab",
              title: "🤝 부서 간 협업이 어려워요",
              quote: "“마케팅팀 자료를 기획팀이 이해 못해서, 결국 다시 만들고 있어요.”",
              solutions: [
                "부서, 담당자 구분 없이 문서 맥락을 AI가 요약해줘요.",
                "관련 회의, 자료 링크도 연결되어 협업 시 오해를 줄일 수 있어요.",
                "중복 작업 없이 기존 산출물을 바로 재활용할 수 있어요.",
              ],
              image: "1-6.png",
            },
          ].map((item) => (
            <div key={item.key} className="flex flex-col md:flex-row items-center gap-8 shadow p-6 rounded-lg bg-white">
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-auto rounded" />
              </div>

              {/* Right: Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="italic text-muted-foreground">{item.quote}</p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  {item.solutions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* CTA Section */}
      <section className="gradient-bg py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">CherryFlow에서 이룰 수 있는 모든 것을 물어보세요</h2>
          <div className="flex flex-col sm:flex-row gap-4"></div>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              대화하기
            </Button>
        </div>
      </section>
    </div>
  )
}
