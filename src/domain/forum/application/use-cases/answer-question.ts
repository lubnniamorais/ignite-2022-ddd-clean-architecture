import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { Answer } from '../../enterprise/entities/answer';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

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
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}