import { useState } from 'react';
import { redirect } from 'next/navigation';

import { Question } from '@/types';

import { checkAnswer } from '../../api/checkAnswear';
import { getInitialAnswers, InitialAnswers } from './utils';

export function useAction({ question }: { question: Question }) {
  const [answers, setAnswers] = useState<InitialAnswers[]>(getInitialAnswers(question.answers));

  const onAnswerClick = async (id: string) => {
    setAnswers((prevState) =>
      prevState.map((answer) => (answer.id === id ? { ...answer, state: 'active' } : answer))
    );

    const selectedAnswers = answers.filter(({ state }) => state === 'active').length;

    if (question.amountOfCorrectAnswers - 1 === selectedAnswers) {
      const result = await checkAnswer(question.id, [id]);
      if (result?.result === 'success') {
        setAnswers((prevState) =>
          prevState.map((answer) =>
            answer.state === 'active' ? { ...answer, state: 'success' } : answer
          )
        );

        setTimeout(() => {
          redirect(`/games/millionaire-quiz/${result?.nextQuestion?.id}`);
        }, 3000);
        return;
      }

      if (result?.result === 'mistake') {
        setAnswers((prevState) =>
          prevState.map((answer) =>
            answer.state === 'active' ? { ...answer, state: 'error' } : answer
          )
        );

        setTimeout(() => {
          redirect(`/games/millionaire-quiz/game-over/${question.id}`);
        }, 3000);
        return;
      }
    }

    setAnswers((prevState) =>
      prevState.map((answer) => (answer.id === id ? { ...answer, state: 'active' } : answer))
    );
  };

  return { onAnswerClick, answers };
}
