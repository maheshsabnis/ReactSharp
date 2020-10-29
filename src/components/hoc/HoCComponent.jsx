import React, { Component } from 'react';

export default function HoCComponent(InputComponent, data) {
    // additional
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                 stateData: data   
            };
        }
        // local functions to manupulate data
        render(){
            return (
                <div>
                    <h1>The Higher Order Component Function</h1>
                    <InputComponent data={this.state.stateData} canDelete ={true}></InputComponent>
                </div>
            );
        }
    }


}