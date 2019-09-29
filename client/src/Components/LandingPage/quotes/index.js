import React, { Component } from 'react'
// import anime from 'animejs';
import './quotes.css';

const quoteList = [
    {
        quote: 'Perceive that which cannot be seen with the eye.',
        author: 'Miyamoto Musashi'
    },
    {
        quote: 'Study strategy over the years and achieve the spirit of the warrior. Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.',
        author: 'Miyamoto Musashi'
    },
    {
        quote: 'Perception is strong and sight weak. In strategy it is important to see distant things as if they were close and to take a distanced view of close things.',
        author: 'Miyamoto Musashi'
    },
    {
        quote: 'Generally speaking, the Way of the warrior is resolute acceptance of death.',
        author: 'Miyamoto Musashi'
    },
    {
        quote: 'Do nothing which is of no use.',
        author: 'Miyamoto Musashi'
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
            setTimeout(() => this.setState({ fadeIn: false }), 3000);
        }, 6000);
    };



    render() {

        const { fadeIn, quoteIndex } = this.state;
        const quote = quoteList[quoteIndex].quote;
        const authors = quoteList[quoteIndex].author;

        return (
            <React.Fragment>
                <div className='quote-box'>
                    <div className="quote">
                        <div className='quote-quotes'>
                        <p className={fadeIn ? 'quote-fade-in' : 'quote-fade-out'}>"</p>
                        </div>
                        <p className={fadeIn ? 'quote-fade-in' : 'quote-fade-out'}>{quote}</p>
                    </div>
                    <div className="author">
                        <p className={fadeIn ? 'quote-fade-in' : 'quote-fade-out'}>-{authors}</p>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Quotes;

