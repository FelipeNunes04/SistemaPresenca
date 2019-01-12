import React from 'react';
import axios from 'axios';

class Presenca extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            presenca: false
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://testeandremachado.mybluemix.net/andretestenode")
        const result = response.data
        this.setState({presenca: result})
    }

    render() {

        return (
            <div>
                <p>{this.state.presenca["horario de entrada"]}</p>
                <p>{this.state.presenca["presenca"]}</p>
                <p>{this.state.presenca["horario de saida"]}</p>

            </div>
        )
    }

}

export default Presenca;
