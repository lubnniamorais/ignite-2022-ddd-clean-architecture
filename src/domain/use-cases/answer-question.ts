import { AnswersRepository } from 'domain/repositories/answers-repository';
import { Answer } from '../entities/answer';

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}
