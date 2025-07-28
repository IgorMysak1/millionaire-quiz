export interface Question {
  question: string;
  options: { id: string; option: string }[];
  amountOfCorrectOptions: number;
  prizes: number[];
  currentPrize: number;
}
