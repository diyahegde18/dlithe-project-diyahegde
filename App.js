
/*import React from 'react';

// Define the Welcome component
function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Define the main App component
function App() {
  return (
    <div>
      <h1>Welcome Component Demo</h1>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;
// App.js for Q2
function ListItems({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <ListItems items={['Apple', 'Banana', 'Cherry']} />;
}
  
 // App.js for Q3
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default function App() {
  const handleClick = () => console.log('Button clicked!');
  return <Button label="Click me!" onClick={handleClick} />;
}
  // App.js for Q4
function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={{border: '1px solid black', padding: '10px', width: '250px'}}>
      <img src={avatarUrl} alt={name} style={{width: '100%'}} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default function App() {
  return (
    <ProfileCard 
      name="Diya"
      email="diya@example.com"
      avatarUrl="https://via.placeholder.com/150"
    />
  );
}


// App.js for Q5
import { useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
  
 // App.js for Q6
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{margin: '0 10px'}}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
  
 // App.js for Q7
function Card({ children }) {
  return (
    <div style={{border: '2px solid #333', padding: '15px', borderRadius: '5px'}}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card>
      <h2>This is inside Card</h2>
      <p>You can put any content here.</p>
    </Card>
  );
}
  
 // App.js for Q8
function StatusIndicator({ isOnline }) {
  const style = {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    display: 'inline-block'
  };
  return <span style={style} />;
}

export default function App() {
  return (
    <div>
      User is online: <StatusIndicator isOnline={true} />
      <br />
      User is offline: <StatusIndicator isOnline={false} />
    </div>
  );
}
  
 // App.js for Q9
function ClickLogger({ logMessage }) {
  return <button onClick={logMessage}>Click me</button>;
}

export default function App() {
  const log = () => console.log('Clicked from parent!');
  return <ClickLogger logMessage={log} />;
}
  
 // App.js for Q10
import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <h3>Live Preview:</h3>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
  
 // App.js for Q11
import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('Home');

  const content = {
    Home: 'Welcome to the Home page!',
    About: 'About us content goes here.',
    Contact: 'Contact us at example@example.com',
  };

  return (
    <div>
      {['Home', 'About', 'Contact'].map(t => (
        <button 
          key={t} 
          onClick={() => setTab(t)} 
          style={{fontWeight: tab === t ? 'bold' : 'normal', marginRight: 5}}
        >
          {t}
        </button>
      ))}
      <div style={{marginTop: 20}}>{content[tab]}</div>
    </div>
  );
}

// App.js for Q12
function ProductsList({ products }) {
  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          {p.id}: {p.name}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
  ];
  return <ProductsList products={products} />;
}

// App.js for Q13
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const style = {
    backgroundColor: darkMode ? '#333' : '#eee',
    color: darkMode ? '#eee' : '#333',
    height: '100vh',
    padding: '20px',
    transition: 'all 0.3s',
  };

  return (
    <div style={style}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>This is {darkMode ? 'Dark' : 'Light'} mode!</p>
    </div>
  );
}

// App.js for Q14
import { useState } from 'react';

const questions = [
  'What is React?',
  'What is useState?',
  'What is a component?'
];

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h3>Question {index + 1}:</h3>
      <p>{questions[index]}</p>
      <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button>
      <button disabled={index === questions.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
    </div>
  );
}
*/
// App.js for Q15
import { useState } from 'react';

function Product({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={() => setAdded(true)}>Add to Cart</button>
      {added && <p>Added to Cart!</p>}
    </div>
  );
}

export default function App() {
  return <Product product={{ name: 'MacBook Pro' }} />;
}






