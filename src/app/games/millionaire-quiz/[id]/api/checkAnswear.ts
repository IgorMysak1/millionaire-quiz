import { QuestionDB } from '@/types';
import { getQuestion } from './getQuestion';
import DB from './db.json';

// Quick workaround to compare 2 arrays. I wouldn't use it for productions :)
const ifTwoArraySimilar = (arr1: string[], arr2: string[]) => {
  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
};

// A small implementation of fake BE
export async function checkAnswer(id: string, answers: string[]) {
  try {
    const questions = DB;
    const question = questions.find((answer: QuestionDB) => answer.id === id);
    if (!question) {
      throw new Error('Question not found');
    }

    const isAnswerCorrect = ifTwoArraySimilar(question.correctAnswers, answers);

    if (isAnswerCorrect) {
      const nextQuestion = await getQuestion('id');
      return { result: 'success', nextQuestion };
    }

    return { result: 'mistake', answers: question.answers };
  } catch (err) {
    console.error(err);
  }
}
