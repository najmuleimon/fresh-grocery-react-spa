import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='questions'>
            {/* Question 1 */}
            <h2>Question: How React works?</h2>
            <p>React is efficient, declarative, and flexible JavaScript library. React makes painless to create interactive UIs of Website. React will create a virtual dom every time the state changes. React will compare the main DOM with the Virtual DOM. React will efficiently update and render just the right components when data or state changes. We can make encapsulated components that manage their ow states.</p>

            {/* Question 2 */}
            <h2>Question: Props vs State</h2>
            <p>Props are read only. we can not modify or change the props. we can only pass the props data from parent component to child components.</p>
            <p>State changes is asynchronous. State can be change or update by user interaction. When user interact with the UI, state can be update.</p>

            {/* Question 3 */}
            <h2>Question: How useState() works?</h2>
            <p>useState is a React hook. It is used to set or update state. This allow us to have state variable in a functional component. We can pass the initial state to this function and it will returns a variable with the current state value and another function to update this value.</p>
        </div>
    );
};

export default Question;