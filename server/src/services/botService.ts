function handleQuestion(question: string) {
  return `You asked: ${question}`;
}

const botService = {
  handleQuestion,
};

export default botService;
