import { expect, test } from 'vitest';

import { AnswerQuestionUseCase } from './answer-question';
import { AnswersRepository } from 'domain/repositories/answers-repository';
import { Answer } from 'domain/entities/answer';

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
};

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  });

  expect(answer.content).toEqual('Nova resposta');
});
