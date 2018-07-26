import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {increment} from '../actions/increment.action'
import App from '../components/App.component'

function mapStateToProps (state) {
    return {
        count : state.increment.value
    }
}


function mapDispatchToProps (dispatch) { 
    return bindActionCreators(
        {
            increment
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)