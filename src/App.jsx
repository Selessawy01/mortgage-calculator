import { useState } from 'react'
import MortgageForm from "./components/MortgageForm";
import MortgageResults from './components/MortgageResults';

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
