import React, {Component} from 'react';

export default class App extends Component {
    increment = (event) => {
        console.log(this.props.count)
        this.props.increment();
    }

    render() {
        return(
            <div className = 'temp'>
                <button onClick={this.increment}> increment </button>
                <p>
                    Clicked {this.props.count} times
                </p>
            </div>
        ); 
    }
}