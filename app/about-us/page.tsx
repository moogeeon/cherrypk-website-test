import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
  const team = [
    {
      name: "홍길동",
      position: "CEO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "김철수",
      position: "CTO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "이영희",
      position: "디자인 책임자",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "박지민",
      position: "마케팅 책임자",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto">
            CherryFlow는 업무 프로세스를 간소화하고 효율성을 높이는 솔루션을 제공하는 기업입니다.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">회사 소개</h2>
              <p className="text-muted-foreground mb-6">
                CherryFlow는 2020년에 설립된 기업으로, 업무 프로세스를 간소화하고 효율성을 높이는 솔루션을 제공하고
                있습니다. 우리는 고객의 비즈니스 성장을 지원하기 위해 최선을 다하고 있습니다.
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
                  <p>고객 중심의 서비스를 제공합니다.</p>
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
                  <p>지속적인 혁신을 추구합니다.</p>
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
                  <p>전문성과 신뢰성을 바탕으로 합니다.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="회사 소개" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">비전 & 미션</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">CherryFlow의 비전과 미션을 소개합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-700"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  모든 기업이 효율적인 업무 프로세스를 통해 성장할 수 있는 세상을 만듭니다. 우리는 기술의 힘으로
                  비즈니스의 잠재력을 최대한 발휘할 수 있도록 지원합니다.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground">
                  혁신적인 솔루션을 통해 기업의 업무 효율성을 높이고 비즈니스 성장을 지원합니다. 우리는 고객의 성공을
                  위해 최선을 다하며, 지속적인 혁신을 추구합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">팀 소개</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              CherryFlow를 이끌어가는 전문가들을 소개합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-[200px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">회사 연혁</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">CherryFlow의 성장 과정을 소개합니다.</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="h-full w-0.5 bg-purple-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2020년 - 회사 설립</h3>
                <p className="text-muted-foreground mb-4">
                  CherryFlow가 설립되었습니다. 초기에는 소규모 팀으로 시작하여 업무 프로세스 자동화 솔루션 개발에
                  집중했습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="h-full w-0.5 bg-purple-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2021년 - 첫 제품 출시</h3>
                <p className="text-muted-foreground mb-4">
                  첫 번째 제품인 CherryFlow 1.0을 출시했습니다. 이 제품은 기업의 업무 프로세스를 간소화하는 데 큰 도움을
                  주었습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="h-full w-0.5 bg-purple-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2022년 - 사업 확장</h3>
                <p className="text-muted-foreground mb-4">
                  사업을 확장하여 더 많은 기업에 서비스를 제공하기 시작했습니다. 이 시기에 팀 규모도 크게 성장했습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2023년 - 현재</h3>
                <p className="text-muted-foreground mb-4">
                  현재 CherryFlow는 지속적인 성장을 이어가고 있으며, 더 많은 기업에 혁신적인 솔루션을 제공하기 위해
                  노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
