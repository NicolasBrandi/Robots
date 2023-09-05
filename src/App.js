import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import styled from 'styled-components';

const GlobalStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap');
`;

// We use this sintax to allow components to interact 
class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    // componentDidMount -- fetch users from url and decode into json
    // !no nead of arrow function bc its part of React lifecycle methods
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <GlobalStyle>
                        <h1 className="f-headline lh-solid">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <CardList robots={filteredRobots} />
                    </GlobalStyle>
                </div>
            )
        }
        
    }
}
   
export default App
