import React, { Component } from 'react'
import './quotes.css';


 class Quotes extends Component {
    state = {
        quote: 1
    };

    // componentDidMount() {
    //     setInterval(this.change, 2000)
    // }

    componentDidMount() {
        setInterval(this.change, 2000)
    }

    

    
    change = () => {
        this.setState({
            quote: Math.floor(Math.random() * 2)
        })
    };
   
   


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
            <React.Fragment>
                <p className="quote quote-fade-in quote-fade-out">{quoteList[quotes].quote}</p>
            <p className="author quote-fade-out quote-fade-out">{quoteList[quotes].author}</p>
            </React.Fragment>
            
        )
    }
}

export default Quotes;







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

class Quotes extends Component {
    state = {
        quote: 1
    };

    componentDidMount() {
        setInterval(this.change, 2000)
    }

    

    
    change = () => {
        this.setState({
            quote: Math.floor(Math.random() * 2)
        })
    };
   
   animateQuotes = () => {
       this.quoteInterval = setInterval(() => { 
        const quotes = this.state.quote
        
       }, 4000);
   }

    render() {

      
        const quote = quoteList[quotes].quote;
        const author = quoteList[quotes].author;
        
        return (
            <React.Fragment>
                <p className="quote quote-fade-in quote-fade-out">{quote}</p>
            <p className="author quote-fade-out quote-fade-out">{author}</p>
            </React.Fragment>
            
        )
    }
}

export default Quotes;