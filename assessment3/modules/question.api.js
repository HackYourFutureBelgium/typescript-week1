const fetchQuestion = async () => {
  // Fetch a question from the https://the-trivia-api.com/api/questions?limit=5 API
  const response = await fetch(
    "https://the-trivia-api.com/api/questions?limit=5"
  );

  const data = await response.json();
  return data;
};

export { fetchQuestion };
