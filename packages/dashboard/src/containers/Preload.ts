import { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'

class Preload extends Component {
  componentDidMount() {
    const { token, onInit, onAuth, onMain } = this.props

    if (!!token) {
      onInit()
    } else if (!/^\/auth/.test(window.location.pathname)) {
      onAuth()
    }

    if (token && /^\/auth/.test(window.location.pathname)) {
      onMain()
    }
  }

  componentDidUpdate(prevProps) {
    const { token, onMain, onInit, onAuth } = this.props

    if (!prevProps.token && token) {
      onMain()
      onInit()
    }

    if (prevProps.token && !token) {
      onAuth()
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default connect(
  state => ({
    token: state.security.token,
  }),
  (dispatch, { history }) => ({
    onInit: () => dispatch(init()),
    onAuth: () => history.replace('/auth'),
    onMain: () => history.replace('/'),
  })
)(Preload)
