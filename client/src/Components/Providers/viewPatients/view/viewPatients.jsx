import React, { Component } from 'react'
import '../styles/viewPatients.css'
import { Redirect } from 'react-router-dom'
import { Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core'

class ViewPatients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patients: [],
            redirect: false
        }
    }

    componentDidMount(){
        this.props.closeNav()
    }

    render() {
        if (this.state.redirect == true) { return (<Redirect to='/main' />) }
        return (
            <div className='__viewPatients-main'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Phone
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.patients.map(
                                row => (
                                    <TableRow>
                                        <TableCell>
                                            {row.fullName}
                                        </TableCell>
                                        <TableCell>
                                            {row.email}
                                        </TableCell>
                                        {row.phone == null ?
                                        (<TableCell>User Has No Phone</TableCell>)
                                            :
                                        (<TableCell>{row.phone}</TableCell>)}
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ViewPatients