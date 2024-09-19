'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { activitiesData } from '@/data/activitiesData';
import Image from 'next/image';

export default function Activity3Page() {
  const activityData = activitiesData[1];
  const router = useRouter();

  // 모달 상태 관리
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!activityData) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  // 모달 닫기 함수
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <div className="pt-[8rem] pb-10 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-4xl text-left">
            <Button
              onClick={() => router.back()}
              className="mb-4 px-4 py-2 font-semibold"
            >
              ← 뒤로 가기
            </Button>
          </div>

          <div className="pb-10">
            <h2 className="font-bold text-gray-500 mb-4 text-xl">
              {activityData.category} 프로젝트
            </h2>
            <h2 className="text-3xl font-bold mb-4">{activityData.title}</h2>

            <div className="flex justify-center mb-2">
              {activityData.date && (
                <p className="text-gray-500 text-lg">{activityData.date}</p>
              )}
            </div>
            <p className="text-gray-500 text-lg">
              부트캠프에서 팀원들과 함께 CS 개념을 정리한 블로그. <br />
            </p>
          </div>

          {/* 스크린샷과 링크 섹션 */}
          <div className="w-full max-w-4xl text-left text-gray-600">
            <section>
              <h2 className="text-lg font-semibold my-4">프로젝트 상세</h2>
              <p className="my-4">
                이 블로그는 부트캠프 스터디가 끝난 후, 스터디에서 다룬 CS 개념과
                내용을 복습하고 정리하기 위해 작성되었습니다. 스터디 중에는 주
                2회 다양한 주제를 다루었고, 그 후 블로그를 통해 배운 내용을
                정리했습니다.
              </p>
              <p className="my-4">
                또한, React와 JavaScript를 공부하면서 배운 내용을 블로그에
                추가하여, 학습한 기술들을 체계적으로 문서화할 수 있었습니다.
                도큐사우르스를 사용하여 문서화를 진행하였으며, 이를 통해
                스터디에서 다룬 내용을 쉽게 참고하고 공유할 수 있는 블로그를
                완성했습니다.
              </p>

              {/* 블로그 링크 */}
              <p className="my-4">
                👉 블로그 링크:{' '}
                <a
                  href="https://cs-yum-blog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://cs-yum-blog.vercel.app/
                </a>
              </p>

              {/* GitHub 레포지토리 링크 */}
              <p className="my-4">
                👉 레포지토리 링크:{' '}
                <a
                  href="https://github.com/cs-yum/cs-yum-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://github.com/cs-yum/cs-yum-blog
                </a>
              </p>

              {/* 스크린샷 섹션 */}
              <div className="mt-8 mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  프로젝트 스크린샷 (클릭 시, 확대 가능)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Image
                    src="/images/image6.jpg" // 실제 이미지 경로로 변경 필요
                    alt="CS Blog Screenshot 1"
                    width={400}
                    height={300}
                    className="rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage('/images/image6.jpg')} // 클릭시 이미지 확대
                  />
                  <Image
                    src="/images/image7.jpg" // 실제 이미지 경로로 변경 필요
                    alt="CS Blog Screenshot 2"
                    width={400}
                    height={300}
                    className="rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage('/images/image7.jpg')} // 클릭시 이미지 확대
                  />
                  <Image
                    src="/images/image8.jpg" // 실제 이미지 경로로 변경 필요
                    alt="CS Blog Screenshot 3"
                    width={400}
                    height={300}
                    className="rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage('/images/image8.jpg')} // 클릭시 이미지 확대
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal} // 모달 외부 클릭 시 닫힘
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Expanded screenshot"
              width={1000} // 확대된 이미지 크기
              height={900}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
