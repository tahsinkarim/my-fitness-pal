import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <div className='question'>
                <p className='question-title'>1. How does react work ?</p>
                <p>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree. Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM.</p>
            </div>
            <div className="question">
                <p className="question-title">2. Difference between props and state</p>
                <p>We use state to store the data your current page needs in your controller-view and props to pass data and event handlers down to your child components.</p>
                <p>Props are immutable and State is mutable</p>
            </div>
            <div className="question">
                <p className='question-title'>3. Use of <code>useEffect</code> other than loading data</p>
                <p>The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events. <br />
                useEffect is an alternative for lifecycle method in class components in a functional component. It can be used to execute actions when the component mounts, or certain prop or state updated for component as well as to execute code when the component is about to unmount</p>
            </div>
        </div>
    );
};

export default Questions;