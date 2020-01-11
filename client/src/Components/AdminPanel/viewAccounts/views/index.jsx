import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import Axios from 'axios'

class index extends Component {

    constructor(props) {
        super(props);
        
    }
    
    componentDidMount(){
        Axios.get('/api/admin/getAllAccounts')
        .then((res)=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default index;