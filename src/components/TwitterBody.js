import "../styles/TwitterBody.css";

import {Tweet} from "./twitter/Tweet.js";

import { Component } from "react";

export default class TwitterBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            loading: true,
            sortingMode: "recent"
        };
    }

    componentDidMount() {
        this.fetchTweets();
    }

    fetchTweets() {
        fetch("https://rvhcdjwc8e.execute-api.us-east-1.amazonaws.com/api/media/tweets")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    tweets: response.data,
                    loading: false
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    sortTweets(sortingMode) {
        this.setState({
            sortingMode: sortingMode
        });
        this.forceUpdate();
    }

    formatTweets() {
        let tweets;
        switch (this.state.sortingMode) {
            case "recent":
                tweets = [...this.state.tweets].sort((a, b) => {
                    return Date.parse(b.created_at) - Date.parse(a.created_at)
                });
            break;
            case "trending":
                tweets = [...this.state.tweets].sort((a, b) => {
                    return b.retweet_count - a.retweet_count
                });
            break;
            default:
                tweets = [...this.state.tweets];
        }

        return tweets;
    }

    render() {
        const { loading, sortingMode } = this.state;
        return (
            <>
                <div className="TwitterSelectors">
                    <div onClick={() => { this.sortTweets("recent") }} className={`TwitterFilter ${sortingMode === "recent" ? "TwitterFilterActive" : ""}`}>Recent</div>
                    <div onClick={() => { this.sortTweets("trending") }} className={`TwitterFilter ${sortingMode === "trending" ? "TwitterFilterActive" : ""}`}>Trending</div>
                    <div onClick={() => { this.sortTweets("soup") }} className={`TwitterFilter ${sortingMode === "soup" ? "TwitterFilterActive" : ""}`}>MM SOUP</div>
                </div>
                <div className="TwitterBody">
                    {loading && <div className="Loading">Loading...</div>}
                    {this.formatTweets().map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
                </div>
            </>
        );
    }
}