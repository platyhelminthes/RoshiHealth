import React, { Component } from 'react'

export default class Quotes extends Component {
    state = {
        quote: 1
    }

    componentDidMount() {
        setInterval(this.change, 2000)
    }

    

    
    change = () => {
        this.setState({
            quote: Math.floor(Math.random() * 2)
        })
    };
    // state = { titleIndex: 0, fadeIn: true };

    // componentDidMount() {
    //     this.timeout = setTimeout(() => this.setState({ fadeIn:  false}), 2000);
    //     this.animateTitles();
    // }

    // componentWillUnmount() {

    //     clearInterval(this.titleInterval);
    //     clearTimeout(this.timeout);
    // }

    // animateTitles = () => {
    //     this.titleInterval = setInterval(() => {
    //         const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

    //         this.setState({ titleIndex, fadeIn: true });
    //         setTimeout(() => this.setState({ fadeIn:  false}), 2000);
    //     }, 4000);
    // }


    render() {
        const quotes = this.state.quote
        const quoteList = [
            {
                quote: 'This is a test',
                author: 'n'
            },
            {
                quote: 'Eat ass',
                author: 'b'
            },
            {
                quote: 'Ass eats you in russia',
                author: 'a'
            }
        ];
        return (
            <div>
                <h1>{quoteList[quotes].quote}</h1>
            <h1>{quoteList[quotes].author}</h1>
            </div>

        )
    }
}



