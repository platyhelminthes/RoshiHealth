import React from 'react'
import { Component } from 'react'
import { TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core'
import moment from 'moment'


class Appointments extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var sortedArray = this.props.state.appointments.sort((a,b) => new moment(a.date).format('YYYYMMDD') - new moment(b.date).format('YYYYMMDD'))
        return (
            <div className='__Appointments-Main'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>
                                Doctor
                            </TableCell>
                            <TableCell style={{color: 'white'}}>
                                Time
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedArray.map(row => (
                            <TableRow>
                                <TableCell style={{color: 'white'}}>
                                    {row.userName}
                                </TableCell>
                                <TableCell style={{color: 'white'}}>
                                    {moment(row.date).format('MMMM Do [at] LT')}
                                </TableCell>
                                <TableCell style={{color: 'white'}}>
                                    Cancel Appointment
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default Appointments