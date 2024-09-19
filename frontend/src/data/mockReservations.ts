export interface mockReservation {
  originPrice: number;
  yanoljaPrice: number;
  reservationId: number;
  checkInDate: string; // 'YYYY-MM-DD' 형식의 날짜 문자열
  checkOutDate: string; // 체크아웃 날짜
  checkInTime: string; // 체크인 시간 예: '15:00'
  checkOutTime: string; // 체크아웃 시간 예: '11:00'
  nights: number; // 숙박 일수
  reservationDate: string; // 예약 날짜
  content: string;
  reservationStatus: string; // 상태 예: 'Confirmed'
  accommodationName: string;
  reservationType: string; // 예약 유형 예: 'Standard'
  roomName: string;
  standardNumber: number; // 표준 번호
  maximumNumber: number; // 최대 수
}

export const mockReservations: mockReservation[] = [
  {
    originPrice: 100000,
    yanoljaPrice: 80000,
    reservationId: 1,
    checkInDate: '2024-10-01',
    checkOutDate: '2024-10-02',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    nights: 1,
    reservationDate: '2024-09-20',
    content: '예약 1',
    reservationStatus: 'Confirmed',
    accommodationName: 'Hotel A',
    reservationType: 'Standard',
    roomName: 'Deluxe Room',
    standardNumber: 1,
    maximumNumber: 2,
  },
  {
    originPrice: 150000,
    yanoljaPrice: 120000,
    reservationId: 2,
    checkInDate: '2024-10-05',
    checkOutDate: '2024-10-08',
    checkInTime: '16:00',
    checkOutTime: '10:00',
    nights: 3,
    reservationDate: '2024-09-22',
    content: '예약 2',
    reservationStatus: 'Pending',
    accommodationName: 'Hotel B',
    reservationType: 'Suite',
    roomName: 'Executive Suite',
    standardNumber: 2,
    maximumNumber: 4,
  },
  {
    originPrice: 200000,
    yanoljaPrice: 160000,
    reservationId: 3,
    checkInDate: '2024-11-01',
    checkOutDate: '2024-11-03',
    checkInTime: '14:00',
    checkOutTime: '12:00',
    nights: 2,
    reservationDate: '2024-09-25',
    content: '예약 3',
    reservationStatus: 'Cancelled',
    accommodationName: 'Hotel C',
    reservationType: 'Luxury',
    roomName: 'Presidential Suite',
    standardNumber: 3,
    maximumNumber: 3,
  },
  {
    originPrice: 120000,
    yanoljaPrice: 100000,
    reservationId: 4,
    checkInDate: '2024-10-10',
    checkOutDate: '2024-10-12',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    nights: 2,
    reservationDate: '2024-09-27',
    content: '예약 4',
    reservationStatus: 'Confirmed',
    accommodationName: 'Hotel D',
    reservationType: 'Deluxe',
    roomName: 'Superior Room',
    standardNumber: 1,
    maximumNumber: 2,
  },
  {
    originPrice: 180000,
    yanoljaPrice: 140000,
    reservationId: 5,
    checkInDate: '2024-10-15',
    checkOutDate: '2024-10-18',
    checkInTime: '16:00',
    checkOutTime: '10:00',
    nights: 3,
    reservationDate: '2024-09-28',
    content: '예약 5',
    reservationStatus: 'Confirmed',
    accommodationName: 'Hotel E',
    reservationType: 'Suite',
    roomName: 'Junior Suite',
    standardNumber: 2,
    maximumNumber: 3,
  },
];
