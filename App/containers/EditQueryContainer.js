import React, { Component } from 'react'
import EditQueryForm from '../components/EditQueryForm'
import { fetchResults } from '../actions/actions'
import { connect } from 'react-redux'

type Props = {
  nextScreen: Function
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchResults: (query) => {
        dispatch(fetchResults(query))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQueryForm)
