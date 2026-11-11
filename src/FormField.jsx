function FormField({ id, label, error, prefix, suffix, ...inputProps }) {
  const errorId = `${id}-error`
  const errorClass = error ? 'error' : ''

  return (
    <div className="form__group">
      <label className="form__label md-text" htmlFor={id}>
        {label}
      </label>

      <div className={`form__input-wrapper ${errorClass}`}>
        {prefix && (
          <span className={`form__prefix lg-text ${errorClass}`}>{prefix}</span>
        )}

        <input
          className="form__input lg-text"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          id={id}
          name={id}
          placeholder=" "
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />

        {suffix && (
          <span className={`form__suffix lg-text ${errorClass}`}>{suffix}</span>
        )}
      </div>

      {error && (
        <p id={errorId} className="form__error sm-text" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField