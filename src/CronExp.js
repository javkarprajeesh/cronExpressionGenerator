import React, { Component } from 'react';
import cronstrue from 'cronstrue';
import { isValidCron } from 'cron-validator';
import './App.css'

class CronExp extends Component {

    
    
    


    render() {
        return (
            <div>
                 <h2 className = "Answer">"{this.props.expValue == ' '? null:cronstrue.toString(this.props.expValue)}"</h2>
                <code><h2 className = "code">{this.props.expValue == ''? null:this.props.expValue}</h2></code>
            </div>
        );
    }
}

export default CronExp;