import React, { Component } from 'react';
class CentralErrorBoundryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage:''
        };
    }

    // lifecycle error state method for all children components
    // will listen to the crash of child components
    // and read all information (Error Info + StackTrace)
    static getDerivedStateFromError(error){
        return {
            errorMessage: error.toString()
        }
    }

    // the method will be executed when any child component
    // will throw an error
    componentDidCatch=(error, logInfo)=>{
        // log the error using fake log service
        this.fakeLoggerService(error.toString(), logInfo.componentStack);
    }
    // fake logger
    fakeLoggerService = console.log;
    // render the fallback UI
    render(){
        if(this.state.errorMessage){
            // render the fallback UI
            return (
                  <p>
                   <div>The Fallcack UI. Please reload the page to render again.</div>
                    <strong>
                     {
                         this.state.errorMessage
                     }
                    </strong>
                  </p> 
                );

        }
        // keep rendering the children
        // of the CentralErrorBoundryComponent 
        return this.props.children;
        
    }
}
class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            mycounter:0
        };
    }
    componentDidUpdate=()=>{
        console.log('COunter Component Did Update');
    }
    increamentValue=()=>{
        this.setState({mycounter: this.state.mycounter+1});
    }
    render() { 
        // try {
        if(this.state.mycounter === 8) {
            throw new Error(`Reached to max val so I am crashing`);
        }
    //  } catch {
    //         return <div>
    //            <strong>
    //              Sorry !!!! I am in trible
    //            </strong>
    //         </div>
    //     }
        return ( 
            <div className="container">
              <h3>The Counter Component</h3>
              <input type="button" value="Increament" className="btn btn-warning"
                onClick={this.increamentValue.bind(this)}/>
                <hr/>
                <div>
                  <strong>
                      <p>
                        Counter Value : {this.state.mycounter}
                      </p>
                  </strong>
                </div>
            </div>
        );
    }
}
 

class CounterContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    refreshPage(){
        window.history.go(0);
    } 
    render() { 
        return (
            <div className="container">
                <h2>The Container Component</h2>
                {/* Render all children components inside the
                  Error Boundry */}
                <CentralErrorBoundryComponent>
                  <MyCounterComponent></MyCounterComponent>
                </CentralErrorBoundryComponent>
                
                <hr/>
                <input type="button" 
                value="ReLoad" className="btn btn-success"
                onClick={this.refreshPage.bind(this)}/>
            </div>
        );
    }
}
 
export default CounterContainerComponent;