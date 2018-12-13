import React from 'react'
import { render } from 'react-dom';
import App from './App'

class AppContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            title: 'Parcel 打包案例'
        }
    }
   
    render(){
        return (
            <App title={this.state.title} />
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    title: 'Parcel打包包'
                }
            })
        }, 5000)
       
    }
}   

render(<AppContainer />, document.querySelector('#app'))
