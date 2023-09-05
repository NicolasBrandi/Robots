import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
        const{ robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <GlobalStyle>
                        <h1 className="f-headline lh-solid">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        {/* Bacause Scroll is a wrapper, the component will take props as argument and props has children in it.
                         This way scroll can affect CardList */}
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </GlobalStyle>
                </div>
            )
        }
}
   
export default App
