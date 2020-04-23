import React, { Component } from 'react';
import { Grid, Button, Typography, Box, Card } from '@material-ui/core'
import Axios from 'axios';
import RichTextToReact from 'rich-text-to-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'react-router-dom';


class main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }

    componentDidMount(){
        this.getBlog()
    }

    getBlog = () => {
        this.setState({ posts: [] })
        Axios.get('/api/blog/cmsTest')
            .then(
                (res) => {
                    console.log(res.data.data)
                    res.data.data.items.forEach(
                        entry => {
                            if (entry.sys.contentType.sys.id == 'post') {
                                let options = {
                                    renderNode: {
                                      'embedded-asset-block': (node) =>
                                        <img class="img-fluid" src={node.data.target.fields.file.url}/>
                                    }
                                  }
                                const rawRichTextField1 = entry.fields.title;
                                const rawRichTextField2 = entry.fields.body;
                                let post = {
                                    title: documentToReactComponents(rawRichTextField1),
                                    body: documentToReactComponents(rawRichTextField2, options)
                                }
                                let oldState = this.state.posts
                                oldState.push(post)
                                let newState = oldState
                                this.setState({posts: newState})

            
                            }
                        })
                }
            )
    }

    render() {
        return (
            <Grid container style={{maxHeight: '100vh', overflow: 'auto'}}>
                <Box item  width='100vw' pt={5} pb={5}>
                <Box textAlign='Right' pr={8}>
                    <Typography variant='h5'>
                        <Link style={{textDecoration:'none'}} to='/home'>Home</Link>
                        <Link style={{textDecoration:'none', marginLeft:'3vw'}} to='/Store'>Store</Link> 
                    </Typography>
                </Box>
                        <Box textAlign='center'><Typography variant='h4' center>Roshi Health</Typography></Box>
                        
                    </Box> 
                    <Box item pl={12} width='100%'>

                    <Grid container direction='column' alignContent='center'>
                
                {
                    this.state.post == '' ?
                        (<h2>No posts yet</h2>)
                        :
                        (
                            this.state.posts.map(
                                row=>(
                                    <Box item style={{marginBottom: '5vw', width: '50%'}}>
                                        <div>
                                            {row.title}
                                        </div>
                                        <div>
                                            {row.body}
                                        </div>
                                    </Box>
                                )
                            )
                                
                            

                        )
                }
                </Grid>
                </Box>

            </Grid>
        );
    }
}

export default main;