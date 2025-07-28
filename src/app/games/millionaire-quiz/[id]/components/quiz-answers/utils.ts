import { Answer, Question } from '@/types';

export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

export type InitialAnswers = Answer & { state: 'success' | 'active' | 'error' | undefined };

export const getInitialAnswers = (answers: Question['answers']): InitialAnswers[] =>
  answers.map(({ id, option }) => ({ id, option, state: undefined }));
