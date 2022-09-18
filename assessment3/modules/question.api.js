const fetchQuestion = async () => {
    // Fetch a question from thehttps://the-trivia-api.com/api/questions?limit=5 API
  const url =  'https://the-trivia-api.com/api/questions?limit=5'
  const response =  await fetch(url);
  const  data =  await response.json();
     return  data[0];
};

export { fetchQuestion };
