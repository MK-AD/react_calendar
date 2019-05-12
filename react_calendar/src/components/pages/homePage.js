import React from 'react';
import PageAbstract from "./pageAbstract.js"

// Pre-prepared way of fetching data from an API
// Is used by the componentDidMount Method to load data from the API and save the the result in state.data
// The data can then be used in the render-method and will be updated automatically if the data in the state variable
// changes, for example due to polling the api bei an intervall function (not implemented in this case)
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

// Every page has to extend PageAbstract in order to perform some checks on every page load.
// This is mandatory and you shall not extend from anything else. If you think you have to, ask for help!
class HomePage extends PageAbstract {
  constructor(props) {
    super(props);

    // this.state holds all state-data and is prefiled by super-class already.
    // Never override state completely or the page will probably crash&burn.
    // Anyway, you can add new fields to your like. State-Data can be bound to the frontend so whenever the data changes
    // the frontend updates itself.
    this.state["data"] = []
  }

  componentDidMount() {
      // This code is called once the component is "mounted" which means it was called by the user and loading starts
      // Add any code which loads data from external sources which is needed for rendering the page
      // when the data is loaded, make sure to set var loading in state to false to disable the loading spinner
      // We use setTimeout here only to keep the spinner running for a bit, normally you'd won't use a waittime.
    setTimeout(() => {
          fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ data: data.hits, loading: false }));
        }, 1500)
  }

  render() {
    //always call super.render() since this performs some checks like valid login etc automatically and takes care
    // for the loading spinner etc. Only if super.render() returns true, show your content, else you'd just have to
    // return the ready variable which contains contains loading-spinner code until it becomes true
    var ready = super.render()
    if(ready === true) {
        const {data} = this.state;

        return (
            <div><h2>Data loaded async from <a href={API}>{API}</a> and slowed down to enjoy the loading-spinner for a while...</h2>
            <ul>
                {data.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
            </div>
        )
    } else {
      return ready
    }
  }
}

export default HomePage;