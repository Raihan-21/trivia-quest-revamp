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

export type { Question };
