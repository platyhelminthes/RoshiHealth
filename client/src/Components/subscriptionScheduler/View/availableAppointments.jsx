import React from 'react'
import { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import {isMobile} from 'react-device-detect'



class availableAppointments extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        var times = this.props.times
        return (
            <div className={isMobile ? '__appointments-main-mobile' : '__appointments-main'}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>Time</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {times.map(
                            
                                row => ( row.length == 0?
                                    (null)
                                    :
                                    (
                                    
                                    (row.length == 8 ?
                                    (<TableRow style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
                                        <TableCell style={{minHeight: '3vh', color: 'white'}} component="th" scope="row">{row}</TableCell>
                                        <button className='__book-button' value={moment(row, ['h:mm A']).format('HH:mm')} onClick={this.props.onClick}>Select Time</button>
                                    </TableRow>)
                                    : 
                                    (<TableRow style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
                                        <TableCell style={{minHeight: '3vh', color: 'white'}} component="th" scope="row">{row}</TableCell>
                                        <button className='__book-button' value={moment(row, ['h:mm A']).format('HH:mm')} onClick={this.props.onClick}>Select Time</button>
                                    </TableRow>)
                        ))))
                            }
                    </TableBody>
                </Table>
            </div>
        )
    }


}

export default availableAppointments