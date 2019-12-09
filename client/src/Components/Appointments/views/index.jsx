import React from 'react'
import { Component } from 'react'
import { TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core'
import moment from 'moment'
import Axios from 'axios'
import '../styles/AppointmentView.css'
import {Link} from 'react-router-dom'


class Appointments extends Component {

    constructor(props) {
        super(props)
        
        this.cancelAPP = this.cancelAPP.bind(this)
        this.cancelSubAPP = this.cancelSubAPP.bind(this)
    }

    cancelAPP(e){
        (e).preventDefault()
        alert(e.target.value)
        Axios.post('/api/users/cancelAppointment',
            {
                id: e.target.value,
                price: e.target.dataset.price,
                docId: e.target.dataset.docid,
                date: e.target.dataset.date
            })
    }

    cancelSubAPP(e){
        (e).preventDefault()
        alert('Sub appointment found')
        Axios.post('/api/users/cancelSubAppointment',
            {
                id: e.target.value,
                type: e.target.dataset.type,
                docId: e.target.dataset.docid,
                date: e.target.dataset.date
            })
    }

    render() {
        var sortedArray = this.props.state.appointments.sort((a,b) => new moment(a.date).format('YYYYMMDD') - new moment(b.date).format('YYYYMMDD'))
        return (
            <div className='__appointments-main2'>
                {this.props.state.appointments.length == 0 || sortedArray.length == 0 ?
                    (
                        <div>
                    <h2>You do not have any upcoming appointments!</h2>
                    <h2>Please click <Link to='/main/scheduler'>here</Link> if you would like to schedule one with a doctor</h2>
                    {
                        this.props.state.subLevel == 'NonSub' ? 
                        (null)
                        :
                        (<h2>Or click <Link to='/main/subschedule'>here</Link> if you would like to schedule one with your health team</h2>)}
                    </div>)
                :
                (<Table>
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
                                    {row.subAPP == true ?
                                        (<button value={row._id} data-price={row.price} data-type={row.subType} data-docid={row.user} data-date={row.date} onClick={this.cancelSubAPP}>Cancel</button>)
                                        :
                                        (<button value={row._id} data-price={row.price} data-docid={row.user} data-date={row.date} onClick={this.cancelAPP}>Cancel</button>)}
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>)}
                
            </div>
        )
    }
}

export default Appointments