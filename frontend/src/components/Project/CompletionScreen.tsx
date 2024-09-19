// import React, { useEffect, useState } from 'react';

// // 직접 하드코딩된 계좌 정보
// const MOCK_ACCOUNT_DATA = {
//   name: '장문용',
//   bankName: '한국은행',
//   accountNumber: '123-456-789012',
// };

// interface AccountData {
//   name: string;
//   bankName: string | null;
//   accountNumber: string | null;
// }

// interface Props {
//   onComplete: () => void;
//   productId?: number;
// }

// const CompletionScreen = ({ onComplete, productId }: Props) => {
//   const [accountData, setAccountData] = useState<AccountData | null>(null);

//   useEffect(() => {
//     // 실제 데이터 로딩 대신 하드코딩된 데이터 사용
//     setAccountData(MOCK_ACCOUNT_DATA);
//   }, []);

//   return (
//     <>
//       <div className="fixed bg-white top-0 w-[430px] h-[70px] z-20 m-auto flex justify-end items-center">
//         <div className="my-auto cursor-pointer pr-5" onClick={onComplete}>
//           <button className="text-lg font-bold text-gray-500">X</button>
//         </div>
//       </div>
//       <div className="w-[430px] fixed top-0 bottom-0 flex flex-col items-center justify-center bg-white z-10">
//         <div className="h-[80%] flex flex-col items-center justify-center">
//           <img src="/assets/images/check.svg" alt="완료 아이콘" />
//           <h2 className="text-body font-light my-[20px]">상품 등록 완료!</h2>
//           {/* 계좌 정보 표시 */}
//           {accountData ? (
//             <div className="text-center mt-6">
//               <h3 className="text-lg font-semibold">계좌 정보</h3>
//               <p>
//                 <strong>계좌명:</strong> {accountData.name}
//               </p>
//               <p>
//                 <strong>은행명:</strong> {accountData.bankName || '정보 없음'}
//               </p>
//               <p>
//                 <strong>계좌 번호:</strong>{' '}
//                 {accountData.accountNumber || '정보 없음'}
//               </p>
//             </div>
//           ) : (
//             <p>계좌 정보를 불러오는 중...</p>
//           )}
//         </div>
//         <div className="flex flex-row gap-2 mt-11 text-lg">
//           <div className="fixed bottom-7 left-0 right-0 flex justify-center">
//             <button
//               type="button"
//               className="mx-auto w-[23rem] h-[3.125rem] rounded-xl text-lg text-white bg-main cursor-pointer"
//               // onClick={handleProductCheckClick}
//             >
//               판매 중인 상품 확인하기
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CompletionScreen;
