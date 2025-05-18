import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SolutionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">CherryFlow 기능 소개</h1>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto">
            업무 프로세스를 간소화하고 효율성을 높이는 다양한 기능을 제공합니다.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">솔루션 개요</h2>
              <p className="text-muted-foreground mb-6">
                CherryFlow는 업무 프로세스를 간소화하고 효율성을 높이는 종합적인 솔루션입니다. 직관적인 인터페이스와
                강력한 기능을 통해 비즈니스 성장을 지원합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>직관적인 사용자 인터페이스로 누구나 쉽게 사용할 수 있습니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>강력한 자동화 기능으로 반복적인 업무를 줄이고 생산성을 높입니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>실시간 데이터 분석으로 비즈니스 인사이트를 제공합니다.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="CherryFlow 솔루션"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">CherryFlow의 다양한 기능을 살펴보세요.</p>
          </div>

          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="tab1">업무 자동화</TabsTrigger>
              <TabsTrigger value="tab2">데이터 분석</TabsTrigger>
              <TabsTrigger value="tab3">협업 도구</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">업무 자동화</h3>
                  <p className="mb-6">
                    반복적인 업무를 자동화하여 시간과 비용을 절약하세요. CherryFlow의 업무 자동화 기능은 다양한 업무
                    프로세스를 자동화하여 업무 효율성을 높이고 인적 오류를 줄입니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      워크플로우 자동화
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      문서 자동 생성
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      알림 및 리마인더
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="업무 자동화" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tab2" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">데이터 분석</h3>
                  <p className="mb-6">
                    데이터를 분석하여 비즈니스 인사이트를 얻으세요. CherryFlow의 데이터 분석 기능은 복잡한 데이터를 쉽게
                    이해할 수 있는 시각적 정보로 변환하여 의사 결정을 지원합니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      실시간 대시보드
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      맞춤형 보고서
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      예측 분석
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="데이터 분석" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tab3" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">협업 도구</h3>
                  <p className="mb-6">
                    팀원들과 효율적으로 협업하여 프로젝트를 성공적으로 완료하세요. CherryFlow의 협업 도구는 팀원들 간의
                    원활한 소통과 협업을 지원합니다.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      실시간 채팅
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      문서 공유 및 편집
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-700"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      프로젝트 관리
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="협업 도구" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">지금 바로 시작하세요</h2>
          <p className="text-white/80 max-w-[600px] mx-auto mb-8">
            CherryFlow와 함께 업무 효율성을 높이고 비즈니스 성장을 가속화하세요.
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
            무료로 시작하기
          </Button>
        </div>
      </section>
    </div>
  )
}
