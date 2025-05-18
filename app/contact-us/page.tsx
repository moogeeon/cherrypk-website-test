import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto">
            CherryFlow에 문의하세요. 언제든지 도움을 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">문의하기</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름</Label>
                      <Input id="name" placeholder="이름을 입력하세요" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">제목</Label>
                    <Input id="subject" placeholder="제목을 입력하세요" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">메시지</Label>
                    <Textarea id="message" placeholder="메시지를 입력하세요" rows={5} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    보내기
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-bold">주소</h3>
                      <p className="text-muted-foreground">서울특별시 강남구 테헤란로 123, 4층</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-bold">전화번호</h3>
                      <p className="text-muted-foreground">02-123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-bold">이메일</h3>
                      <p className="text-muted-foreground">info@cherryflow.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">업무 시간</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>월요일 - 금요일:</span>
                    <span>오전 9시 - 오후 6시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일:</span>
                    <span>오전 10시 - 오후 2시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일:</span>
                    <span>휴무</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">문의 답변은 얼마나 걸리나요?</h3>
                    <p className="text-muted-foreground">일반적으로 24시간 이내에 답변드립니다.</p>
                  </div>
                  <div>
                    <h3 className="font-bold">방문 상담도 가능한가요?</h3>
                    <p className="text-muted-foreground">네, 사전 예약을 통해 방문 상담이 가능합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">찾아오시는 길</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">CherryFlow 오피스 위치입니다.</p>
          </div>

          <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">지도가 표시됩니다</p>
          </div>
        </div>
      </section>
    </div>
  )
}
