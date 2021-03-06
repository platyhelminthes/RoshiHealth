import React from 'react'
import { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FileUpload from './fileUpload'
import '../styles/AccountInfo.css'
import Axios from 'axios';


class AccountInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            picture: null
        }

        this.uploadPicture = this.uploadPicture.bind(this)
    }


    componentDidMount() {
        this.props.closeNav()
        console.log(this.props.state)
    }


    uploadPicture(e){
    }

    render() {
        return (
            <div className='__Account-Info-Main'>
                <Table style={{ width: '50%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>info</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Name
                                    </TableCell>
                            <TableCell align="left">{this.props.state.name}</TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                Email
                                    </TableCell>
                            <TableCell align="left">{this.props.state.email}</TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                Phone Number
                                    </TableCell>
                            <TableCell align="left">{this.props.state.number}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Receiving Text Reminders
                                    </TableCell>
                            {
                                this.props.state.textReminders == true ?
                                    (<TableCell align="left">Yes</TableCell>)
                                    :
                                    (<TableCell align="left">No</TableCell>)
                            }


                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                Receiving Hourly Text Reminders?
                                    </TableCell>
                            {
                                this.props.state.hourReminders == true ?
                                    (<TableCell align="left">Yes</TableCell>)
                                    :
                                    (<TableCell align="left">No</TableCell>)
                            }


                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                Active Subscription?
                                    </TableCell>
                            {
                                this.props.state.subscription == 'A1237' ?
                                    (<TableCell align="left">Yes</TableCell>)
                                    :
                                    (<TableCell align="left">No</TableCell>)
                            }
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Upload New Profile Picture
                            </TableCell>
                            <TableCell>
                                <FileUpload resetTruth={this.props.resetTruth} uploadPicture={this.uploadPicture} picture={this.state.picture} onChange={picture => this.setState({ picture })} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default AccountInfo