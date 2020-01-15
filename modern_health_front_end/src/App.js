import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ProgramLibrary from './components/programs';

class App extends Component {
      render() {
        return (
          <ProgramLibrary programList ={this.state.programList} />
        )
      }

      state = {
        programList: []
      };

      componentDidMount() {
        const query = `
          query {programs{ sectionList{name, imageName, description, htmlContent},name}}
        `;
        const url = "http://127.0.0.1:8000/graphql/";
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        };


        fetch(url, opts)
        .then(res => res.json())
        .then((data) => {this.setState({ programList: data.data.programs })})
        .catch(console.error);
      }


}

export default App;
