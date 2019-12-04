import React from 'react';
import {Component} from 'react';
import { TableCell, Table, TableHead, TableRow, TableBody } from '@material-ui/core';
import moment from 'moment-timezone'

class SubInfo extends Component{
    constructor(props){
        super(props)
    }



render(){

    return(
        <div className='__main-mobile-subscription-reminders'>
            
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Subscription Info</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                            <TableCell>Subscription Active</TableCell>
                            {
                                this.props.subLevel == 'nonSub' ?
                                (<TableCell>No!</TableCell>)
                                :
                                (<TableCell>Yes!</TableCell>)
                            }
                    </TableRow>
                    <TableRow>
                        <TableCell>1 year mark</TableCell>
                        <TableCell>{moment(this.props.state.yearMark).format('MMMM DD YYYY')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Months Finished</TableCell>
                        <TableCell>{moment(this.props.state.start).diff(moment(), 'months')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Nurses Name</TableCell>
                        <TableCell>{this.props.state.nurse.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dietitians Name</TableCell>
                        {
                        this.props.state.dietitian.name ?
                        (<TableCell>{this.props.state.dietitian.name}</TableCell>)
                        :
                        (<TableCell>You have not recieved a dietitian yet please schedule your initial consultation with your nurse</TableCell>)
                        }
                    </TableRow>
                    <TableRow>
                        <TableCell>Next Appointment With Dietitian</TableCell>
                        {
                            this.props.state.dietitian.appointment ?
                            (<TableCell>{moment(this.props.state.dietitian.appointment).tz('America/' + this.props.address.city).format('MMMM DD [at] LT')}</TableCell>)
                            :
                            (<TableCell>You dont currently have an appointment set up with your dietitian</TableCell>)
                        }
                    </TableRow>
                    <TableRow>
                        <TableCell>Dietitian Appointments Left This Month</TableCell>
                        <TableCell>{this.props.state.dietitian.appointmentTokens}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Health Counselor Name</TableCell>
                        {
                            this.props.state.healthCounselor.name ?
                        (<TableCell>{this.props.state.healthCounselor.name}</TableCell>)
                        :
                        (<TableCell>You have not recieved a Health Counselor yet please schedule your initial consultation with your nurse</TableCell>)
                        }
                    </TableRow>
                    <TableRow>
                        <TableCell>Next Appointment With Health Counselor</TableCell>
                        {
                            this.props.state.healthCounselor.appointment ?
                            (<TableCell>{moment(this.props.state.healthCounselor.appointment).format('MMMM DD [at] LT')}</TableCell>)
                            :
                            (<TableCell>You dont currently have an appointment set up with your healthCounselor</TableCell>)
                        }
                    </TableRow>
                    <TableRow>
                        <TableCell>Health Counselor Appointments Left This Month</TableCell>
                        <TableCell>{this.props.state.healthCounselor.appointmentTokens}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>



    )
}


}

export default SubInfo