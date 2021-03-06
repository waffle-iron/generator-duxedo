import React, { PropTypes } from 'react'
import pure from 'recompose/pure'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

const propTypes = {
  fields: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
}

const formConfig = {
  form: 'greet',
  fields: ['name'],
}

const GreetForm = ({ fields, handleSubmit, loading }) =>
  <form onSubmit={ handleSubmit }>
    <input type="text" { ...fields.name } placeholder="Name" />
    <button type="submit">{ loading ? 'Loading...' : 'Greet' }</button>
  </form>

GreetForm.propTypes = propTypes

export default compose(
  reduxForm(formConfig),
  pure
)(GreetForm)
