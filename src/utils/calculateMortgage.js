import { MORTGAGE_TYPES } from './constants'

export function calculateMortgage({amount,term,interest,type}){
     const principal        = Number(amount);
     const monthlyRate      = Number(interest) / 100 /12
     const numberOfPayments = Number (term) * 12 
     
     const isRepayment = type === MORTGAGE_TYPES.REPAYMENT

     let monthlyPayment

     if (isRepayment){
        if (monthlyRate === 0 ){
          monthlyPayment =   principal /numberOfPayments
        } else {
          const growth   = Math.pow(1 + monthlyRate, numberOfPayments)
          monthlyPayment = (principal * monthlyRate * growth) / (growth - 1)
        }
      } else {
          monthlyPayment = principal * monthlyRate
      }
    
      const totalRepayment = isRepayment
                  ? monthlyPayment * numberOfPayments
                  : monthlyPayment * numberOfPayments + principal

  return { monthlyPayment,totalRepayment }
}
