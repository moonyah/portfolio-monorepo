// import React, { useEffect, useState } from 'react';
// import GoldenPriceDecision from './GoldenPriceDecision';
// import SellerInfoInput from './SellerInfoInput';
// import CommissionInfo from './CommissionInfo';

// interface Props {
//   onPrevStep: () => void;
//   onNextStep: () => void;
//   originPrice: number;
//   yanoljaPrice: number;
//   reservationId: number;
//   setItem: (item: {
//     originPrice: number;
//     yanoljaPrice: number;
//     reservationId: number;
//     goldenPrice: number;
//     content: string;
//   }) => void;
// }
// const AddProductInfoInputStep = ({
//   onNextStep,
//   originPrice,
//   yanoljaPrice,
//   reservationId,
//   setItem,
// }: Props) => {
//   const [goldenPrice, setGoldenPrice] = useState<number>(0);
//   const [content, setContent] = useState<string>('');

//   const handleNextStep = () => {
//     if (goldenPrice > 0 && goldenPrice < originPrice) {
//       setItem({
//         originPrice,
//         yanoljaPrice,
//         reservationId,
//         goldenPrice,
//         content,
//       });
//       onNextStep();
//     } else {
//       let alertMessage = '';
//       if (goldenPrice === 0) {
//         alertMessage = '희망 판매가를 입력해주세요!';
//       } else if (goldenPrice >= originPrice) {
//         alertMessage = '희망 판매가는 기존 구매가보다 낮아야 합니다!';
//       }
//       alert(alertMessage);
//     }
//   };

//   const handleSellerInfoChange = (info: string) => {
//     setContent(info);
//   };

//   useEffect(() => {
//     // 페이지 로드 시 스크롤을 맨 위로 이동
//     window.scrollTo(0, 0);
//   }, []); // 빈 배열을 전달하여 페이지가 처음 로드될 때만 실행

//   return (
//     <>
//       <div className="fixed top-[6rem] w-[430px] bg-white h-[3rem] z-10" />
//       <h2 className="text-body ml-5 mb-4 fixed top-[6.5rem] z-10">
//         판매 정보 입력
//       </h2>
//       <div className="fixed top-[9rem] w-[430px] h-[0.4375rem] bg-lightGray z-10" />

//       {/* 골든특가 결정 */}
//       <div className="pt-[11rem] px-5">
//         <GoldenPriceDecision
//           yanoljaPrice={yanoljaPrice.toString()} // 문자열로 변환
//           setGoldenPrice={(price) => setGoldenPrice(Number(price))}
//           originPrice={originPrice.toString()}
//         />
//       </div>

//       <div className="mt-[2rem] w-[430px] h-[0.4375rem] bg-lightGray" />
//       {/* 판매자 한마디 */}
//       <div className="mx-5 text-black">
//         <SellerInfoInput onSellerInfoChange={handleSellerInfoChange} />
//       </div>
//       {/* 수수료 안내 */}
//       <div className="mx-5 text-black">
//         <CommissionInfo goldenPrice={goldenPrice} />
//       </div>
//       {/* 다음 버튼 */}
//       <div className="bg-gray-200 flex justify-center">
//         <button
//           type="button"
//           className={`mx-auto w-[23rem] h-[3.125rem] rounded-xl text-lg mt-[3.5625rem] mb-[2.1875rem] ${
//             goldenPrice > 0 && goldenPrice < originPrice
//               ? 'cursor-pointer bg-main text-white'
//               : 'cursor-not-allowed bg-borderGray text-descGray'
//           }`}
//           onClick={handleNextStep}
//         >
//           다음
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddProductInfoInputStep;
