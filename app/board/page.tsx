import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BoardPage() {
  const notices = [
    {
      id: 1,
      title: "CherryFlow 2.0 업데이트 안내",
      date: "2023-05-15",
      author: "관리자",
      content:
        "CherryFlow 2.0 버전이 출시되었습니다. 이번 업데이트에는 다양한 기능 개선과 버그 수정이 포함되어 있습니다.",
    },
    {
      id: 2,
      title: "서비스 점검 안내",
      date: "2023-05-10",
      author: "관리자",
      content:
        "2023년 5월 15일 오전 2시부터 4시까지 서비스 점검이 예정되어 있습니다. 이 시간 동안에는 서비스 이용이 제한될 수 있습니다.",
    },
    {
      id: 3,
      title: "신규 기능 추가 안내",
      date: "2023-05-05",
      author: "관리자",
      content: "데이터 분석 기능이 추가되었습니다. 이제 더 다양한 데이터 분석이 가능합니다.",
    },
    {
      id: 4,
      title: "CherryFlow 모바일 앱 출시",
      date: "2023-04-28",
      author: "관리자",
      content: "CherryFlow 모바일 앱이 출시되었습니다. 이제 언제 어디서나 CherryFlow를 이용할 수 있습니다.",
    },
    {
      id: 5,
      title: "2023년 상반기 업데이트 계획",
      date: "2023-04-15",
      author: "관리자",
      content: "2023년 상반기 업데이트 계획을 안내드립니다. 다양한 기능 개선과 신규 기능 추가가 예정되어 있습니다.",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "CherryFlow는 어떤 서비스인가요?",
      answer:
        "CherryFlow는 업무 프로세스를 간소화하고 효율성을 높이는 솔루션입니다. 직관적인 인터페이스와 강력한 기능을 통해 비즈니스 성장을 지원합니다.",
    },
    {
      id: 2,
      question: "무료로 사용할 수 있나요?",
      answer:
        "네, CherryFlow는 기본 기능을 무료로 제공하고 있습니다. 더 많은 기능을 이용하시려면 유료 플랜으로 업그레이드하실 수 있습니다.",
    },
    {
      id: 3,
      question: "데이터는 안전하게 보관되나요?",
      answer:
        "네, CherryFlow는 최신 보안 기술을 적용하여 고객의 데이터를 안전하게 보관합니다. 모든 데이터는 암호화되어 저장됩니다.",
    },
    {
      id: 4,
      question: "어떤 기기에서 사용할 수 있나요?",
      answer:
        "CherryFlow는 웹 기반 서비스로, 인터넷이 연결된 모든 기기에서 사용할 수 있습니다. 또한 모바일 앱도 제공하고 있어 스마트폰과 태블릿에서도 편리하게 이용하실 수 있습니다.",
    },
    {
      id: 5,
      question: "기술 지원은 어떻게 받을 수 있나요?",
      answer:
        "CherryFlow는 이메일, 채팅, 전화 등 다양한 채널을 통해 기술 지원을 제공하고 있습니다. 문의사항이 있으시면 언제든지 고객센터로 연락해 주세요.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Board</h1>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto">
            CherryFlow의 공지사항과 자주 묻는 질문을 확인하세요.
          </p>
        </div>
      </section>

      {/* Board Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="notices" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 w-[400px] mx-auto">
              <TabsTrigger value="notices">공지사항</TabsTrigger>
              <TabsTrigger value="faqs">자주 묻는 질문</TabsTrigger>
            </TabsList>

            <TabsContent value="notices">
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">공지사항</h2>
                  <div className="flex gap-2">
                    <Input placeholder="검색어를 입력하세요" className="w-64" />
                    <Button>검색</Button>
                  </div>
                </div>

                {notices.map((notice) => (
                  <Card key={notice.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{notice.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {notice.date} | {notice.author}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{notice.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button variant="outline" size="sm">
                        자세히 보기
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

                <div className="flex justify-center gap-2 mt-8">
                  <Button variant="outline" size="sm">
                    이전
                  </Button>
                  <Button variant="outline" size="sm" className="bg-purple-100">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    다음
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs">
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
                  <div className="flex gap-2">
                    <Input placeholder="검색어를 입력하세요" className="w-64" />
                    <Button>검색</Button>
                  </div>
                </div>

                {faqs.map((faq) => (
                  <Card key={faq.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Q. {faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <span className="font-bold">A.</span> {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
