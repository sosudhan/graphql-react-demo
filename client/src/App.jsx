import { useEffect, useState } from 'react';

function App() {
  const [html, setHtml] = useState('');
  const [hello, setHello] = useState('');

  useEffect(() => {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ hello }` }),
    })
      .then(res => res.json())
      .then(data => setHello(data.data.hello));

    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ htmlContent }` }),
    })
      .then(res => res.json())
      .then(data => setHtml(data.data.htmlContent));
  }, []);

  return (
    <div>
      <h1>{hello}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default App;
