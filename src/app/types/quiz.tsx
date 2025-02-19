/* eslint-disable  @typescript-eslint/no-explicit-any */
interface Question {
  category: string;
  correctAnswer: string;
  difficulty: string;
  id: string;
  incorrectAnswers: string[];
  isNiche: boolean;
  question: {
    text: string;
  };
  regions: any[];
  tags: string[];
  type: string;
}
interface QuestionStatus {
  correctAnswer: string;
  isChosen: boolean;
  isCorrect: boolean;
}

export type { Question, QuestionStatus };
