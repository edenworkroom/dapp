import React, {Component} from 'react';
import OpForm from "../component/opform";

export class OpContract extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div style={{height: document.documentElement.clientHeight}}>
                <OpForm/>
            </div>
        )
    }
}