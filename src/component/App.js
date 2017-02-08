import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    // ajax, timers, listners
		axios.get('http://localhost:8080/api/contests')
			.then(res => {
				this.setState({
					contests: res.data.contests
				});
			})
			.catch(console.error);
  }
  componentWillUnmount() {
    // clean ajax, tiemrs, listners
    // avoid memory leak
  }
  render() {
    return (
			<div className = "App">
				<Header message = {this.state.pageHeader} />
				<div>
					{this.state.contests.map(contest =>
						< ContestPreview key={contest.id} {...contest} />
					)}
				</div>
			</div>
    );
  }
}

export default App;
