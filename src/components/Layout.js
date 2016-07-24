import React from 'react';
import {connect} from 'react-redux';
import {fetchTweets} from '../actions/tweetsAction';
import { fetchUser } from '../actions/userAction';


@connect((store)=>{
  return{
    tweets: store.tweets.tweets,

  }

})


export default class Layout extends React.Component{
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets(){
    this.props.dispatch(fetchTweets());
  }
  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

    return <div>
      <h1></h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
