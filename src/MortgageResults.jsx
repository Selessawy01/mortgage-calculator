import { formatGBP } from './utils/formatNumbers'
import emptyIllustration from './assets/images/illustration-empty.svg'

function MortgageResults({ results }) {
  return (
    <section className="results" aria-live="polite" aria-atomic="true">
      {!results ? (
        <div className="results__empty">
          <img className="results__image" src={emptyIllustration} alt="" />
          <h2 className="results__title xl-text">Results shown here</h2>
          <p className="results__paragraph md-text">
            Complete the form and click &ldquo;calculate repayments&rdquo; to see
            what your monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="results__output">
          <div className="results__header">
            <h2 className="results__title xl-text">Your results</h2>
            <p className="results__paragraph md-text">
              Your results are shown below based on the information you provided.
              To adjust the results, edit the form and click &ldquo;calculate
              repayments&rdquo; again.
            </p>
          </div>

          <dl className="results__result">
            <div className="results__monthly">
              <dt className="results__monthly-title md-text">
                Your monthly repayments
              </dt>
              <dd className="results__monthly-amount amount-text">
                {formatGBP(results.monthlyPayment)}
              </dd>
            </div>

            <div className="results__total">
              <dt className="results__total-title md-text">
                Total you&rsquo;ll repay over the term
              </dt>
              <dd className="results__total-amount xl-text">
                {formatGBP(results.totalRepayment)}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </section>
  )
}

export default MortgageResults