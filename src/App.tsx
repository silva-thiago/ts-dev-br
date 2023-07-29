import { Analytics } from '@vercel/analytics/react'

import './App.css'

function App() {
	return (
		<>
			<h1>TS</h1>
			<ul>
				<li>What needs to be done?</li>
				<li>What needs to be protected?</li>
				<li>What needs to be repeated?</li>
			</ul>
			<span>Wait for it…</span>

			<Analytics />
		</>
	)
}

export default App
