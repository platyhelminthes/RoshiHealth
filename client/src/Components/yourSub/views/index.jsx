import React, {Component} from 'react'
import '../styles/yourSub.css'
import { Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core'
import moment from 'moment'
import {isMobile} from 'react-device-detect'



class yourSub extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.closeNav()
    }

    render(){
        return(
            <div className={isMobile ? '__yourSub-mobile' : '__yourSub-main'}>
                <Table style={isMobile ? null : {width: '50%'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Info</TableCell>
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
                            (<TableCell>{moment(this.props.state.dietitian.appointment).format('MMMM DD [at] LT')}</TableCell>)
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
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                
            </div>
        )
    }
}

export default yourSub