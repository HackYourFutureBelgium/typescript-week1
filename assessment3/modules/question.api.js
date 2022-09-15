const fetchQuestion = () => {
  // Fetch a question from the https://the-trivia-api.com/api/questions?limit=5 API

  fetch("https://the-trivia-api.com/api/questions?limit=5")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });

  return {};
};

export { fetchQuestion };
