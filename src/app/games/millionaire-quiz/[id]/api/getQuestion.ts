import { Question, QuestionDB } from '@/types';

import DB from './db.json';

// A small implementation of fake BE
export async function getQuestion(id: string) {
  try {
    const randomQuestion = Math.floor(Math.random() * 12);

    const questions: QuestionDB[] = DB;

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
