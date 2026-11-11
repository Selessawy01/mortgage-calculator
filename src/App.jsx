import { useState } from 'react'
import MortgageForm from "./MortgageForm";
import MortgageResults from './MortgageResults';

import './App.css'


function App() {
  
  const [results, setResults] = useState(null)

  return (
    <main>
    <MortgageForm onCalculate={setResults} 
                  onClear={() => setResults(null)}/>
    <MortgageResults results={results} />
  </main>
  )
}

export default App
