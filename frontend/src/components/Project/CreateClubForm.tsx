'use client';
import React, { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

interface FormValues {
  image: File;
  approvalType: 'immediate' | 'approval';
  category:
    | '운동/스포츠'
    | '직무계발'
    | '외국어'
    | '문화/예술'
    | '여행'
    | '봉사활동'
    | '미디어 관람'
    | '경제/재테크'
    | '기타';
  capacity: number;
  basePoint: string;
  clubName: string;
  shortDescription: string;
  detailedDescription: string;
}

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
  errors: FieldErrors<FormValues>;
  suffix?: string;
}

const categories = [
  '운동/스포츠',
  '직무계발',
  '외국어',
  '문화/예술',
  '여행',
  '봉사활동',
  '미디어 관람',
  '경제/재테크',
  '기타',
] as const;

const approvalType = ['immediate', 'approval'] as const;

const Schema = z.object({
  approvalType: z.enum(approvalType, {
    required_error: '승인 유형을 선택해 주세요.',
  }),
  category: z.enum(categories, {
    required_error: '모임 카테고리를 선택해 주세요.',
  }),
  capacity: z
    .string({
      required_error: '모집 정원을 입력해 주세요.',
    })
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 1 && val <= 30, {
      message: '모집 정원을 30명 이내로 입력해 주세요.',
    }),
  basePoint: z
    .string({
      required_error: '베이스 지점을 선택해 주세요.',
    })
    .nonempty('베이스 지점을 선택해 주세요.'),
  clubName: z
    .string({
      required_error: '소모임 이름을 입력해 주세요.',
    })
    .max(16, '소모임 이름은 16글자 이내로 입력해 주세요.')
    .nonempty('소모임 이름을 입력해 주세요.'),
  shortDescription: z
    .string({
      required_error: '한 줄 소개를 입력해 주세요.',
    })
    .max(50, '한 줄 소개는 50글자 이내로 입력해 주세요.')
    .nonempty('한 줄 소개를 입력해 주세요.'),
  detailedDescription: z
    .string({
      required_error: '상세 소개를 입력해 주세요.',
    })
    .max(300, '상세 소개는 300글자 이내로 입력해 주세요.')
    .nonempty('상세 소개를 입력해 주세요.'),
  image: z.custom<File>((value) => value instanceof File, {
    message: '이미지 파일을 업로드 해 주세요.',
  }),
});

type FormData = z.infer<typeof Schema>;

const CreateClubForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const [selectedApprovalType, setSelectedApprovalType] = useState<
    string | null
  >(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [applicationFormVisible, setApplicationFormVisible] = useState(false);
  const [questions, setQuestions] = useState<string[]>(['']);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Submit function called');
    // 폼 유효성 검사
    if (Object.keys(errors).length > 0) {
      alert('폼을 올바르게 작성해 주세요.');
      return;
    }

    // 폼 제출 성공 시 알림
    alert('개설이 완료되었습니다.');
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue('image', file); // 파일 선택 시 값을 설정합니다.
      clearErrors('image'); // 이미지 오류를 제거합니다.
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue('image', file); // 드래그 앤 드롭 시 파일을 설정합니다.
      clearErrors('image'); // 이미지 오류를 제거합니다.
    }
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    placeholder,
    register,
    name,
    errors,
    suffix,
  }) => {
    return (
      <div className="space-y-4 text-sm mb-[2rem] leading-none">
        <label className="font-bold md:text-lg text-sm leading-none">
          {label}
        </label>
        <div className="relative">
          {type === 'textarea' ? (
            <textarea
              {...register(name)}
              placeholder={placeholder}
              className={`px-4 py-2 pr-10 w-full min-h-[3.5rem] rounded-lg border overflow-y-auto ${
                errors[name]
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-blue-300 focus:ring-blue-300'
              } focus:outline-none md:placeholder:text-sm placeholder:text-xs`}
            />
          ) : (
            <input
              type={type}
              {...register(name)}
              placeholder={placeholder}
              className={`px-4 py-2 pr-10 w-full min-h-[3.5rem] rounded-lg border ${
                errors[name]
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-blue-300 focus:ring-blue-300'
              } focus:outline-none md:placeholder:text-sm placeholder:text-xs`}
            />
          )}
          {suffix && (
            <div className="md:text-sm text-xs font-bold absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
              <span>{suffix}</span>
            </div>
          )}
        </div>
        {errors[name]?.message && (
          <p className="md:text-sm text-xs font-normal text-red-500 leading-none">
            {String(errors[name]?.message)}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-blue-50 md:px-[2.5rem] px-4 md:pb-[2.5rem] pb-4 rounded-2xl shadow-lg max-w-full w-full sm:w-[35rem] md:w-[45rem] mx-auto">
      <div className="flex items-center font-semibold md:border-b md:border-gray-300 py-[1rem]">
        <button
          className="mr-2 md:text-[1.5rem] text-[1rem]"
          // onClick={() => router.back()}
        >
          &lt;
        </button>
        <h2 className="flex-1 text-center md:text-[1.2rem] text-[1rem] font-bold">
          소모임 개설
        </h2>
      </div>
      <form className="md:mt-[2rem]" onSubmit={handleSubmit(onSubmit)}>
        {/* 승인 유형 */}
        <div className="space-y-4 text-sm mb-[2rem] leading-none">
          <label className="font-bold md:text-lg text-sm leading-none">
            승인 유형
          </label>
          <div className="flex space-x-4">
            {approvalType.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setValue('approvalType', type);
                  setSelectedApprovalType(type);
                  clearErrors('approvalType');
                  setApplicationFormVisible(type === 'approval');
                }}
                className={`md:px-4 px-[0.62rem] py-2 h-[2.5rem] rounded-lg md:text-sm text-xs ${
                  selectedApprovalType === type
                    ? 'bg-blue-400 text-white border border-white border-opacity-10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {type === 'immediate' ? '바로 가입' : '신청 후 승인'}
              </button>
            ))}
          </div>
          {errors.approvalType && (
            <p className="md:text-sm text-xs font-normal text-red-500 leading-none">
              {errors.approvalType.message}
            </p>
          )}
        </div>
        {/* 모임 카테고리 */}
        <div className="space-y-4 text-sm mb-[2rem] leading-none">
          <label className="font-bold md:text-lg text-sm leading-none">
            모임 카테고리
          </label>
          <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setValue('category', category);
                  setSelectedCategory(category);
                  clearErrors('category');
                }}
                className={`md:px-2 px-[0.62rem] py-2 rounded-lg h-[2.5rem] md:text-sm text-xs ${
                  selectedCategory === category
                    ? 'bg-blue-400 text-white border border-white border-opacity-10'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {errors.category && (
            <p className="md:text-sm text-xs font-normal text-red-500 leading-none">
              {errors.category.message}
            </p>
          )}
        </div>
        {/* 모집 정원 */}
        <InputField
          label="모집 정원"
          type="number"
          placeholder="모집 인원 수를 입력해 주세요. (30명 이내)"
          register={register}
          name="capacity"
          errors={errors}
          suffix="명"
        />
        {/* 베이스 지점 */}
        <InputField
          label="베이스 지점"
          type="text"
          placeholder="베이스 지점을 입력해 주세요."
          register={register}
          name="basePoint"
          errors={errors}
        />

        {/* 소모임 이름 */}
        <InputField
          label="소모임 이름"
          placeholder="이름을 입력해 주세요. (16글자 이내)"
          register={register}
          name="clubName"
          errors={errors}
        />
        {/* 한 줄 소개 */}
        <InputField
          label="한 줄 소개"
          placeholder="간단한 소개를 입력해주세요. (40자 이내)"
          register={register}
          name="shortDescription"
          errors={errors}
        />
        {/* 상세 소개 */}
        <InputField
          label="상세 소개"
          type="textarea"
          placeholder="규칙, 유의사항 등을 자세하게 적을 수록 알맞는 사람을 모집 가능해요. (1000자 이내)"
          register={register}
          name="detailedDescription"
          errors={errors}
        />
        {/* 이미지 첨부 */}
        <div className="space-y-4 text-sm mb-[2rem] leading-none">
          <label className="font-bold md:text-lg text-sm leading-none">
            이미지 첨부
          </label>
          <p className="text-gray-400 md:text-sm text-xs leading-none">
            모임의 성격을 드러내는 사진 1장을 첨부해 주세요.
          </p>
          <div
            className="relative"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image-upload"
              {...register('image', {
                onChange: (e) => handleImageChange(e),
              })}
            />
            <label
              htmlFor="image-upload"
              className="w-[15.25rem] h-[10.25rem] flex items-center justify-center text-center bg-white rounded-lg border border-gray-200 cursor-pointer"
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              ) : (
                <span className="text-3xl">+</span>
              )}
            </label>
          </div>
          {errors.image && (
            <p className="md:text-sm text-xs font-normal text-red-500 leading-none">
              {errors.image.message}
            </p>
          )}
        </div>
        {/* 신청서 만들기 폼 */}
        {applicationFormVisible && (
          <>
            <div className="space-y-2 text-sm border-t border-gray-300 py-[2rem]">
              <label className="font-bold md:text-xl text-base leading-none">
                신청서 만들기
              </label>
              <p className="text-gray-400 md:text-sm text-xs leading-none">
                가입자가 작성할 신청서를 만들어주세요.
              </p>
            </div>
            {/* 신청서 안내문 */}
            <div className="space-y-4 text-sm mb-[2rem] leading-none">
              <label className="font-bold md:text-lg text-sm leading-none">
                신청서 안내문
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="[선택] 신청서 상단에 보일 안내 문구를 입력해 주세요. (40자 이내)"
                  className={` px-4 py-2 pr-10 w-full min-h-[3.5rem] rounded-lg border border-gray-200 focus:border-blue-300 focus:ring-blue-300 focus:outline-none md:placeholder:text-sm placeholder:text-xs`}
                />
              </div>
            </div>
            {/* 신청서 질문 */}
            <div className="space-y-4 text-sm mb-[2rem] leading-none">
              <label className="font-bold md:text-lg text-sm leading-none">
                신청서 질문
              </label>
              <p className="text-gray-400 md:text-sm text-xs leading-none">
                가입자에게 하고 싶은 질문을 작성해 주세요. (최대 3개)
              </p>
              {questions.map((question, index) => (
                <div className="relative" key={index}>
                  <input
                    type="text"
                    placeholder="질문을 입력하세요. (40자 이내)"
                    maxLength={40}
                    value={question}
                    onChange={(e) =>
                      handleQuestionChange(index, e.target.value)
                    }
                    className="px-4 py-2 pr-10 w-full min-h-[3.5rem] rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-blue-300 md:placeholder:text-sm placeholder:text-xs"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeQuestion(index)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Image
                        src="/svg/club/remove.svg"
                        alt="remove icon"
                        width={24} // Adjust width and height as needed
                        height={24}
                        className="w-6 h-6"
                      />
                    </button>
                  )}
                </div>
              ))}
              {questions.length < 3 && (
                <button
                  type="button"
                  onClick={addQuestion}
                  className="px-4 py-2 pr-10 w-full min-h-[3.5rem] rounded-lg border border-gray-200 bg-white text-2xl"
                >
                  +
                </button>
              )}
            </div>
          </>
        )}
        {/* 제출 버튼 */}
        <button
          type="submit"
          className="px-4 py-2 w-full md:h-[3.5rem] h-[2.75rem] rounded-lg bg-blue-400 text-white leading-none font-semibold text-[1rem] md:text-[1.2rem] flex justify-center items-center"
        >
          개설하기
        </button>
      </form>
    </div>
  );
};

export default CreateClubForm;
