export interface Message {
  id: string;
  name: string;
  date: string;
  text: string;
  replies?: Message[];
}
