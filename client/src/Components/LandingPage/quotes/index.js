import React, { Component } from 'react'
// import anime from 'animejs';
import './quotes.css';

const quoteList = [
    {
        quote: 'Here is something inspirational',
        author: 'bob'
    },
    {
        quote: 'I am who i am',
        author: 'You'
    },
    {
        quote: 'Genesis is a baller',
        author: 'Genisis'
    },
    {
        quote: 'The world is an illusion',
        author: 'Me'
    }
];

class Quotes extends Component {
    state = {
        // quote: 1,
        fadeIn: true, 
        quoteIndex: 0
    };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.change();
    }

    componentWillUnmount() {
        clearInterval(this.quoteInterval);
        clearTimeout(this.timeout);
    }


    change = () => {
        this.quoteInterval = setInterval(() => {
            const quoteIndex = (this.state.quoteIndex + 1) % quoteList.length;

            this.setState({ quoteIndex, fadeIn: true });
            setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    };



    render() {

        const { fadeIn, quoteIndex } = this.state;
        const quote = quoteList[quoteIndex].quote;
        const authors = quoteList[quoteIndex].author;

        return (
            <React.Fragment>
                <div className='quote-box'>
                <p className={fadeIn ? 'quote-fade-in' : 'quote-fade-out'}>{quote}</p>
                <p className={fadeIn ? 'quote-fade-in' : 'quote-fade-out'}>{authors}</p>
                </div>
            </React.Fragment>

        )
    }
}

export default Quotes;

