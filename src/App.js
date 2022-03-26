import './App.css';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <div className="title">
        <h1>Fresh Grocery Store</h1>
        <p>Best Grocery shop near you. Every thing you need is here. Just click and buy your need.</p>
      </div>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
