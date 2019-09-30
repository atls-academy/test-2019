import { connect } from 'react-redux'
import { logout } from '@frontend/common/src/actions/security'
import Header from '../../components/desktop/Header'

export default connect(
  state => ({
    firstName: state.me.profile.firstName,
    lastName: state.me.profile.lastName,
  }),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  })
)(Header)
