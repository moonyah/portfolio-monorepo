// import React, { useEffect, useState } from 'react';
// import ReservationItem, { Reservation } from './ReservationItem';
// import Link from 'next/link';
// import { mockReservations } from '@/data/mockReservations';

// interface Props {
//   onNextStep: (data: {
//     originPrice: number;
//     yanoljaPrice: number;
//     reservationId: number;
//     goldenPrice: number; // 추가
//     content: string; // 추가
//   }) => void;
// }

// const AddProductSelectionStep = ({ onNextStep }: Props) => {
//   const userProfileInfo = JSON.parse(
//     localStorage.getItem('userProfileInfo') || '{"data": {}}'
//   );
//   const yanoljaId = userProfileInfo.data.yanoljaId;

//   const yanoljaIdExists = yanoljaId !== null;

//   const [isLoggedIn, setIsLoggedIn] = useState(yanoljaIdExists);

//   const hasReservations = true; // 예약 내역 여부
//   const [reservations, setReservations] = useState<Reservation[]>([]); // 예약 상태를 저장합니다.

//   const [selectedReservationIndex, setSelectedReservationIndex] = useState<
//     number | null
//   >(null);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       try {
//         if (yanoljaId !== null) {
//           setReservations(mockReservations);
//         }
//       } catch (error) {
//         console.error('예약을 불러오는 중 오류 발생:', error);
//       }
//     };

//     // 컴포넌트가 마운트될 때 예약을 가져옵니다.
//     fetchReservations();
//   }, []);

//   const handleReservationItemClick = (index: number) => {
//     setSelectedReservationIndex(index);
//   };

//   const handleNextStep = () => {
//     const sortedReservations = [...reservations].sort((a, b) => {
//       return a.checkInDate.localeCompare(b.checkInDate);
//     });
//     if (selectedReservationIndex === null) {
//       alert('상품을 선택해주세요!');
//     } else {
//       const selectedReservation = sortedReservations[selectedReservationIndex];
//       const { originPrice, yanoljaPrice, reservationId } = selectedReservation;

//       // 선택된 상품의 정보 출력

//       onNextStep({
//         originPrice,
//         yanoljaPrice,
//         reservationId,
//         goldenPrice: 0,
//         content: '',
//       });
//     }
//   };

//   const renderContent = () => {
//     // 기존 reservations 배열을 복사한 후 예약일 기준으로 정렬
//     const sortedReservations = [...reservations].sort((a, b) => {
//       // 날짜 형식이 'YYYY.MM.DD' 이므로 간단한 문자열 비교로 정렬 가능
//       return a.checkInDate.localeCompare(b.checkInDate);
//     });

//     return (
//       <>
//         {/* 회색 선 */}
//         <hr className="h-[0.4375rem]" />

//         <h3 className="text-body ml-5 font-semibold">나의 예약 내역</h3>
//         <div className="flex flex-col h-[calc(100vh-20rem)] overflow-y-auto">
//           {/* 높이 제한 및 스크롤 가능 */}
//           {sortedReservations.map((reservation, index) => (
//             <ReservationItem
//               key={index}
//               reservation={reservation}
//               isSelected={selectedReservationIndex === index}
//               onClick={() => handleReservationItemClick(index)}
//             />
//           ))}
//         </div>
//         {/* 다음 버튼 밑으로 뒤에 컨텐츠 가림 */}
//         <div className="w-[430px] bg-white mt-auto" />
//         {/* 다음 버튼 */}
//         <div className=" flex justify-center py-7">
//           <button
//             type="button"
//             className={`w-[25rem] h-[3.125rem] rounded-xl text-lg ${
//               selectedReservationIndex === null
//                 ? 'cursor-not-allowed bg-gray-300 text-descGray'
//                 : 'cursor-pointer bg-yellow-400 text-white'
//             }`}
//             onClick={handleNextStep}
//           >
//             다음
//           </button>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div>
//       <div className="w-[430px] bg-white  mb-4" />
//       <h2 className="text-body ml-5 mb-4">판매 상품 선택</h2>
//       {renderContent()}
//     </div>
//   );
// };

// export default AddProductSelectionStep;
