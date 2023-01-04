import React from 'react';

function MyList(props) {
    return (
        <ul>
            {React.Children.map(props.children, child => (
                <li>{child}</li>
            ))}
        </ul>
    );
}

function App() {
    return(
    <MyList>
        <span>Choice 1</span>
        <span>Choice 2</span>
        <span>Choice 3</span>
    </MyList>
    )
}

function Mylist() {
    return (
        <ul>
            <li><span>Choice 1</span></li>
            <li><span>Choice 2</span></li>
            <li><span>Choice 3</span></li>
        </ul>
    )
}

export default App