/* eslint-disable  @typescript-eslint/no-explicit-any */
interface Difficulty {
  label: string;
  value: string;
}

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
interface Score {
  total: number;
  increment: number;
  hasUpdated: boolean;
}

export type { Difficulty, Question, QuestionStatus, Score };
