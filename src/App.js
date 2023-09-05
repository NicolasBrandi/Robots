import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import styled from 'styled-components';

const GlobalStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap');
`;

// We use this sintax to allow components to interact 
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
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
   
export default App
