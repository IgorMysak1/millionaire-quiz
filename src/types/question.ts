export interface Answer {
  id: string;
  option: string;
}

export interface Question {
  question: string;
  answers: Answer[];
  amountOfCorrectAnswers: number;
  prizes: number[];
  currentPrize: number;
  id: string;
}

export interface QuestionDB extends Question {
  correctAnswers: string[];
}
