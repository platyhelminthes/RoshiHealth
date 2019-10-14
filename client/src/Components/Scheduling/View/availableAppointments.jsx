import React from 'react'
import { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';



class availableAppointments extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        var times = this.props.times
        return (
            <div className='__appointments-main'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {times.map(
                            
                                row => (
                                    (row.length == 8 ?
                                    (<TableRow >
                                        <TableCell component="th" scope="row">{row}</TableCell>
                                        <button value={moment(row, ['h:mm A']).format('HH:mm')} onClick={this.props.onClick}>Select Time</button>
                                    </TableRow>)
                                    : 
                                    (<TableRow >
                                        <TableCell component="th" scope="row">{row}</TableCell>
                                        <button value={moment(row, ['h:mm A']).format('HH:mm')} onClick={this.props.onClick}>Select Time</button>
                                    </TableRow>)
                        )))
                            }
                    </TableBody>
                </Table>
            </div>
        )
    }


}

export default availableAppointments