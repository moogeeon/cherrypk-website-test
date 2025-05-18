import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function UseCasePage() {
  const useCases = [
    {
      title: "📁 필요한 문서를 못 찾음",
      cases: [
        {
          quote: "파일명과 작성자가 누군지 기억 안 나고, 어디 저장했는지도 모르겠어요.",
          solution: [
            {
              problem: "작년 매출 보고서를 파일명을 몰라 찾지 못했던 사례",
              fix: "CherryFlow 도입 후 '작년 매출 분석' 키워드로 필요한 문서 찾음.",
            },
            {
              problem: "이벤트 운영 시 과거 운영 자료를 찾지 못해 어려웠던 사례",
              fix: "CherryFlow가 운영한 이벤트 키워드로 자료를 연결해줘 이벤트 준비 시간을 단축.",
            },
            {
              problem: "기획안을 급히 찾느라 팀 전체가 업무 중단됐던 사례",
              fix: "CherryFlow 도입 후 모든 팀원이 문서를 업무 맥락으로 검색해 필요 자료를 즉시 확인, 업무 지연 현상 해소.",
            },
            {
              problem: "Google Drive 링크를 찾지 못해 업무 지연이 반복된 사례",
              fix: "외부 도구 자료도 CherryFlow 내에서 바로 확인 가능, 업무 자료를 찾는 시간이 감소."
            }
          ],
          image: "/images/usecase_missing_docs.png"
        }
      ]
    },
    {
      title: "📊 팀 지식 활용도 파악 어려움",
      cases: [
        {
          quote: "잘 만든 자료가 그냥 묻히고 있는 것 같아요. 활용되고 있는지 확인이 안 돼요.",
          solution: [
            {
              problem: "팀 문서를 누가 활용하는지 몰라 지식 관리가 불가능했던 사례",
              fix: "CherryFlow를 통해 팀 지식 활용도를 볼 수 있어, 업무 관리자가 효율적으로 팀을 관리할 수 있게 됨.",
            },
            {
              problem: "자료를 많이 만드는 직원의 성과가 전혀 인정받지 못했던 사례",
              fix: "CherryFlow의 기여도 분석을 통해 우수한 팀원의 성과가 객관적으로 드러나 팀 내 동기부여가 상승.",
            },
            {
              problem: "필요한 자료가 방치되고 있음을 관리자도 몰랐던 사례",
              fix: "CherryFlow의 분석 기능으로 방치된 자료를 찾아내 업무 자료 활용도를 증가시킴."
            }  
          ],
          image: "/images/usecase_knowledge.png"
        }
      ]
    },
    {
      title: "🚪 퇴사자 발생 시 공백",
      cases: [
        {
          quote: "퇴사한 분이 만든 자료를 발견했는데, 무슨 내용인지 파악이 안 되네요.",
          solution: [
            {
              problem: "마케팅 담당자가 갑자기 퇴사한 상황",
              fix: "새 담당자는 마케팅 자료가 왜 이렇게 작성됐는지 전혀 몰랐지만, CherryFlow에서 이전 담당자의 작성 배경과 회의록, 레퍼런스를 찾아 빠르게 업무 파악 완료.",
            },
            {
              problem: "개발팀 팀장이 갑자기 이직한 사례",
              fix: "개발 로드맵, 고객 요청사항, 업무 기록 등이 전부 CherryFlow에 저장되어 있어 후임 팀장이 업무 공백 없이 프로젝트를 즉시 이어받음.",
            },
            {
              problem: "중요 프로젝트 담당자의 퇴사 직후, 클라이언트 보고를 앞둔 사례",
              fix: "담당자 퇴사 이틀 만에 클라이언트에게 정확히 이전 보고와 동일한 품질로 대응 가능 (회의 히스토리, 관련 문서, 메일 기록 활용)"
            } 
          ],
          image: "/images/usecase_offboarding.png"
        },
        {
          quote: "중요 프로젝트 담당자의 퇴사 직후, 클라이언트 보고를 앞둔 사례",
          solution: [
            "담당자 퇴사 이틀 만에 클라이언트에게 정확히 이전 보고와 동일한 품질로 대응 가능 (회의 히스토리, 관련 문서, 메일 기록 활용)"
          ],
          image: "/images/usecase_offboarding2.png"
        }
      ]
    },
    {
      title: "🧑‍💻 신입 온보딩 지연",
      cases: [
        {
          quote: "제가 뭘 먼저 봐야 할지 모르겠어요. 계속 물어보긴 눈치도 보이고요.",
          solution: [
            {
              problem: "신입 마케터 입사 첫 주 사례",
              fix: "과거 캠페인 사례와 업무 히스토리를 CherryFlow로 찾아보고, 하루 만에 캠페인 구조를 이해해 팀 리더의 설명 없이도 업무 착수 가능.",
            },
            {
              problem: "기술지원 신입사원이 질문 없이 첫 업무를 시작한 사례",
              fix: "기존 지원 사례, 고객 대응법, 주의사항 등이 모두 워크스페이스에서 확인되어, 입사 이틀 만에 자율적으로 고객 문의를 처리.",
            },
            {
              problem: "잦은 퇴사로 인해 신입 직원이 온보딩을 못 받고 방치됐던 사례",
              fix: "CherryFlow를 도입한 후, 모든 온보딩 자료가 자동화되어 인사팀의 별도 온보딩 없이도 신입이 빠르게 업무 환경에 적응함."
            } 
          ],
          image: "/images/usecase_onboarding.png"
        }
      ]
    },
    {
      title: "🌀 중복 작업 / 재작업",
      cases: [
        {
          quote: "누가 만들었는지 모르고, 중복 문서를 또 만들게 돼요.",
          solution: [
            {
              problem: "기획팀이 마케팅팀과 함께 프로모션을 준비하는 사례",
              fix: "CherryFlow로 마케팅팀이 만든 문서를 맥락까지 빠르게 이해하고 바로 활용, 서로 미팅이나 메신저 없이 협업 속도 증가.",
            },
            {
              problem: "영업팀과 기술팀 협업 시 오해가 반복됐던 사례",
              fix: "CherryFlow 도입 이후 각 부서가 작성한 문서의 핵심을 AI로 요약·공유해, 두 팀 간 협업 오류를 감소시킴.",
            },
            {
              problem: "여러 팀이 참여하는 프로젝트 문서가 혼란스러웠던 사례",
              fix: "CherryFlow가 자동으로 부서별 자료를 연결해, 어느 팀 문서인지 한 번에 구분되고 재작업 감소."
            } 
          ],
          image: "/images/usecase_duplicate_work.png"
        }
      ]
    },
    {
      title: "🤝 부서 간 협업 문제",
      cases: [
        {
          quote: "누가 만들었는지 모르고, 중복 문서를 또 만들게 돼요.",
          solution: [
            {
              problem: "프로젝트 제안서를 서로 몰라 두 팀이 동시에 만든 사례",
              fix: "CherryFlow 도입 후 문서 작성 전 유사 문서를 간단한 검색만으로 파악할 수 있어, 중복 작업이 사라짐.",
            },
            {
              problem: "고객사 요청 사항에 동일한 대응 매뉴얼이 반복 작성된 사례",
              fix: "CherryFlow의 유사도 분석으로 즉시 기존 자료를 찾아 고객 요청 대응 완료.",
            },
            {
              problem: "과거 영업 자료를 찾지 못해 같은 내용을 새로 제작했던 사례",
              fix: "CherryFlow 도입 후 모든 영업 히스토리와 문서가 연결되어 매번 신규 제작을 할 필요가 없어짐.2"
            } 
          ],
          image: "/images/usecase_duplicate_work.png"
        }
      ]
    },


  ]

  return (
    <div>
      <section className="gradient-bg py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Use Cases</h1>
          <p className="text-lg text-white/80 max-w-[800px] mx-auto">
            실제 문제 상황과 그 해결 사례를 통해 CherryFlow가 어떤 가치를 제공하는지 확인하세요.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {useCases.map((block, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-2xl font-bold">{block.title}</h2>
              {block.cases.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow"
                >
                  <div className="w-full md:w-1/2">
                    <Image
                      src={item.image}
                      alt={block.title + ' ' + (idx + 1)}
                      width={500}
                      height={300}
                      className="w-full h-auto rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <p className="italic">❝ {item.quote} ❞</p>
                    <ul className="pl-5 space-y-2 text-sm text-gray-800">
                      {item.solution.map((s, sidx) => (
                        <li key={sidx} className="list-disc ml-4">
                          {s.problem}
                          <div className="pl-5 text-gray-600">→ {s.fix}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
