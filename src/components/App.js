import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App-CRA-default">
			<h1>Awesome React App</h1>
			<header className="App-header">
				<img src="/logo.png" className="App-logo" alt="logo" />
				<p>
					Edit <code>src/components/App.js</code> and save to reload.
       	 		</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						React.js Docs
        			</a>
					{" - "}
					<a
						className="App-link"
						href="https://create-react-app.dev/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Create-React-App.dev Docs
        			</a>
				</p>
				<p>
					<a
						className="App-link"
						href="https://github.com/bootcamp-students/Resources/wiki"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub Bootcamp Wiki
        			</a>
					{" - "}
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						some other link
        			</a>
				</p>
			</header>
		</div>
	);
}

export default App;
