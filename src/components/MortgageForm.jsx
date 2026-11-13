import { useState } from 'react'
import { calculateMortgage } from '../utils/calculateMortgage'
import { MORTGAGE_TYPES } from '../utils/constants'
import { sanitizeNumber, formatWithCommas } from '../utils/formatNumbers'
import FormField from './FormField'
import calculatorIcon from '../assets/images/icon-calculator.svg'

const initialValues = { amount: '', term: '', interest: '', type: '' }

function MortgageForm({ onCalculate, onClear }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value,type } = event.target
    const newValue = type === 'radio' ? value : sanitizeNumber(value)

    setValues(prev => ({ ...prev, [name]: newValue }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleClear() {
    setValues(initialValues)
    setErrors({})
    onClear()
  }

  function validateForm() {
    const newErrors = {}

    if (values.amount === '') {
      newErrors.amount = 'This field is required'
    } else if (!(Number(values.amount) > 0)) {
      newErrors.amount = 'Enter an amount greater than 0'
}
    if (values.term === '') {
      newErrors.term = 'This field is required'
    } else if (!(Number(values.term) > 0)) {
      newErrors.term = 'Enter a term greater than 0'
    }

    if (values.interest === '') {
      newErrors.interest = 'This field is required'
    } else if (!(Number(values.interest) >= 0)) {
      newErrors.interest = 'Enter a rate of 0 or more'
    }

    if (!values.type) {
      newErrors.type = 'This field is required'
    }
    return newErrors
  }

 function handleSubmit(event) {
  event.preventDefault()

  const newErrors = validateForm()
  setErrors(newErrors)

  const firstInvalid = Object.keys(newErrors)[0]
  if (firstInvalid) {
    event.currentTarget.querySelector(`[name="${firstInvalid}"]`)?.focus()
    return
  }

  onCalculate(calculateMortgage(values))
}

  return (
    <section className="calculator">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__header">
          <h1 className="form__title xl-text">Mortgage Calculator</h1>
          <button type="button" className="form__clear md-text" onClick={handleClear}>
            Clear All
          </button>
        </div>

        <div className="form__fields">
          <div className="form__fields">
            <FormField
              id="amount"
              label="Mortgage Amount"
              prefix="£"
              value={formatWithCommas(values.amount)}
              onChange={handleChange}
              error={errors.amount}
            />

            <div className="form__group-values">
              <FormField
                id="term"
                label="Mortgage Term"
                suffix="years"
                value={values.term}
                onChange={handleChange}
                error={errors.term}
              />

              <FormField
                id="interest"
                label="Interest Rate"
                suffix="%"
                value={values.interest}
                onChange={handleChange}
                error={errors.interest}
              />
            </div>
          </div>

          <fieldset
            className="form__group form__group--type"
            role="radiogroup"
            aria-invalid={Boolean(errors.type)}
            aria-describedby={errors.type ? 'type-error' : undefined}
          >
            <legend className="form__label md-text">Mortgage Type</legend>
            <div className="form__options">
              <label className="form__option lg-text">
                <input
                  type="radio"
                  name="type"
                  value={MORTGAGE_TYPES.REPAYMENT}
                  checked={values.type === MORTGAGE_TYPES.REPAYMENT}
                  onChange={handleChange}
                />
                Repayment
              </label>
              <label className="form__option lg-text">
                <input
                  type="radio"
                  name="type"
                  value={MORTGAGE_TYPES.INTEREST_ONLY}
                  checked={values.type === MORTGAGE_TYPES.INTEREST_ONLY}
                  onChange={handleChange}
                />
                Interest Only
              </label>
            </div>
            {errors.type && (
              <p id="type-error" className="form__error sm-text" role="alert">{errors.type}</p>
            )}
          </fieldset>
        </div>

        <button type="submit" className="form__submit lg-text">
          <img src={calculatorIcon} alt="" /> Calculate Repayments
        </button>
      </form>
    </section>
  )
}

export default MortgageForm