import { Question, QuestionDB } from '@/types';

// A small implementation of fake BE
export async function getQuestion(id: string) {
  try {
    const randomQuestion = Math.floor(Math.random() * 13) - 1;

    const response = await fetch('http://localhost:3000/db.json'); // Pass id to BE
    const questions: QuestionDB[] = await response.json();

    const questionWithAnswer = questions[randomQuestion];

    const question: Question = {
      id: questionWithAnswer.id,
      amountOfCorrectAnswers: questionWithAnswer.amountOfCorrectAnswers,
      answers: questionWithAnswer.answers,
      currentPrize: questionWithAnswer.currentPrize,
      prizes: questionWithAnswer.prizes,
      question: questionWithAnswer.question,
    };
    return question;
  } catch (err) {
    console.error(err, id);
  }
}
