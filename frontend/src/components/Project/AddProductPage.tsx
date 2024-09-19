// import React, { useEffect, useState } from 'react';
// import AddProductSelectionStep from './selectionStep/AddProductSelectionStep ';
// // import AddProductInfoInputStep from './infoInputStep/AddProductInfoInputStep';
// // import TermsAndPolicyAgreementStep from './termsAndPolicyStep/TermsAndPolicyAgreementStep';
// // import AddProductHeader from './AddProductHeader';
// // import AddProductSelectionStep from './selectionStep/AddProductSelectionStep ';

// interface AccountData {
//   name: string;
//   bankName: string | null;
//   accountNumber: string | null;
// }

// const AddProductPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedItem, setSelectedItem] = useState<{
//     originPrice: number;
//     yanoljaPrice: number;
//     reservationId: number;
//   }>({
//     originPrice: 0,
//     yanoljaPrice: 0,
//     reservationId: 0,
//   });

//   const [addAccountPage, setAddAccountPage] = useState(false);
//   const [accountData, setAccountData] = useState<AccountData | null>(null);

//   const setItem = (item: {
//     originPrice: number;
//     yanoljaPrice: number;
//     reservationId: number;
//   }) => {
//     setSelectedItem(item);
//   };

//   const handleNextStepSelection = (item: {
//     originPrice: number;
//     yanoljaPrice: number;
//     reservationId: number;
//   }) => {
//     setSelectedItem(item);
//     const nextStep = currentStep + 1;
//     setCurrentStep(nextStep);
//     window.location.href = `/addproduct/${nextStep}`;
//   };

//   const handleNextStep = () => {
//     const nextStep = currentStep + 1;
//     setCurrentStep(nextStep);
//     window.location.href = `/addproduct/${nextStep}`;
//   };

//   const handlePrevStep = () => {
//     if (currentStep > 1) {
//       const prevStep = currentStep - 1;
//       setCurrentStep(prevStep);
//       window.location.href = `/addproduct/${prevStep}`;
//     } else {
//       window.location.href = '/';
//     }
//   };

//   const handleComplete = () => {
//     window.location.href = '/';
//   };

//   const stepsCompleted = Array(3).fill(false);
//   for (let i = 0; i < currentStep; i++) {
//     stepsCompleted[i] = true;
//   }

//   return (
//     <>
//       <AddProductHeader
//         title="상품등록"
//         handleArrowBackClick={handlePrevStep}
//       />
//       <div className="max-w-[450px] mx-auto">
//         <div className="fixed flex px-5 bg-white z-10">
//           {stepsCompleted.map((completed, index) => (
//             <div
//               key={index}
//               className={`rounded-md mb-[1.875rem] mt-[4.8125rem] ${
//                 completed ? 'bg-main' : 'bg-borderGray'
//               }`}
//               style={{
//                 width: '123px',
//                 height: '2px',
//                 marginRight: index < stepsCompleted.length - 1 ? '10px' : '0', // 맨 끝 바에는 오른쪽 마진X
//               }}
//             />
//           ))}
//         </div> */}
//         {/* {currentStep === 1 && (
//           <AddProductSelectionStep onNextStep={handleNextStepSelection} />
//         )} */}
//         {/* {currentStep === 2 && (
//           <AddProductInfoInputStep
//             onPrevStep={handlePrevStep}
//             onNextStep={handleNextStep}
//             originPrice={selectedItem.originPrice}
//             yanoljaPrice={selectedItem.yanoljaPrice}
//             reservationId={selectedItem.reservationId}
//             setItem={setItem}
//           />
//         )}
//         {currentStep === 3 && (
//           <TermsAndPolicyAgreementStep
//             onPrevStep={handlePrevStep}
//             onComplete={handleComplete}
//             selectedItem={selectedItem}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default AddProductPage;
