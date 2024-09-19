// import React from 'react';
// import { useRouter } from 'next/router';

// interface PropsType {
//   title: string | null;
//   handleArrowBackClick?: () => void; // handleArrowBackClick을 부모 컴포넌트에서 직접 제어
// }

// const AddProductHeader = ({ title, handleArrowBackClick }: PropsType) => {
//   const router = useRouter();

//   const defaultHandleArrowBackClick = () => {
//     router.back(); // Next.js의 뒤로 가기
//   };

//   // 부모 컴포넌트에서 handleArrowBackClick이 전달되지 않은 경우
//   // 기본적으로 router.back()을 수행하는 defaultHandleArrowBackClick 함수를 정의
//   const handleClick = handleArrowBackClick || defaultHandleArrowBackClick;

//   return (
//     <div className="fixed bg-white top-0 w-[430px] h-[70px] z-20 m-auto">
//       <div className="w-[430px] h-[70px] flex items-center">
//         <div
//           className="my-auto cursor-pointer pl-5 text-lg"
//           onClick={handleClick}
//         >
//           {'<'} {/* "<" 문자로 대체 */}
//         </div>
//         <div className="font-[500] text-font font-pre m-auto">{title}</div>
//       </div>
//     </div>
//   );
// };

// export default AddProductHeader;
