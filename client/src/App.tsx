import { useState } from 'react';

function App() {
  const [botResponse, setBotResponse] = useState('no response yet');
  const [userQuestion, setUserQuestion] = useState('');

  function handleSubmitQuestion() {
    const request = new Request('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userQuestion,
      }),
    });
    fetch(request).then((response) => {
      response.json().then((data) => {
        setBotResponse(data.botResponse);
      });
    });
    setUserQuestion('');
  }

  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSubmitQuestion();
    }
  }

  return (
    <div className="h-screen w-screen py-[40px] px-[50px] lg:px-[200px]">
      <div className="border-2 border-zinc-500 flex flex-col items-center justify-center">
        <div className="w-full h-[500px] p-[20px]">{botResponse}</div>
        <div className="w-full flex border-t-2 border-zinc-500">
          <input
            className="w-full h-[60px] p-2"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your question here..."
            onKeyDown={handlePressEnter}
          />
          <button
            className="bg-black text-white rounded-sm px-[20px]"
            onClick={handleSubmitQuestion}
            disabled={!userQuestion.length}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
