import React, { Component } from 'react'
import CustomerService from "../../service/CustomerService";
import UserService from "../../service/UserService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "../Navbar";

class ListCustomerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            message: null
        }

        // this.deleteCustomer = this.deleteCustomer.bind(this);
        // this.editCustomer = this.editCustomer.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.reloadCustomerList = this.reloadCustomerList.bind(this);
    }

    componentDidMount() {
        this.reloadCustomerList();
        // this.reloadUsersList()
    }

    reloadCustomerList() {
        CustomerService.fetchCustomers()
            .then((res) => {
                console.log('Customers:::: ', res.data)
                this.setState({customers: res.data})
            });
    }

    reloadUsersList() {
        UserService.fetchUsers()
            .then((res) => {
                console.log('Users:::: ', res.data)
                this.setState({customers: res.data})
            });
    }

    // deleteCustomer(userId) {
    //     // UserService.deleteCustomer(userId)
    //     //    .then(res => {
    //     //        this.setState({message : 'User deleted successfully.'});
    //     //        this.setState({users: this.state.users.filter(user => user.id !== userId)});
    //     //    })
    // }

    // editCustomer(id) {
    //     // window.localStorage.setItem("userId", id);
    //     // this.props.history.push('/edit-user');
    // }

    addCustomer() {
        // window.localStorage.removeItem("userId");
        this.props.history.push('/add-customer');
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Container>
                    <Typography variant="h4" style={style}>Customer Details</Typography>
                    <Button variant="contained" color="primary" onClick={() => this.addCustomer()}>
                        Add Customer
                    </Button>

                    <Table>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>Id</TableCell> */}
                                <TableCell align="left">TCKN</TableCell>
                                <TableCell align="left">Name and Surname</TableCell>
                                <TableCell align="left">E-Mail</TableCell>
                                <TableCell align="left">Telephone</TableCell>
                                <TableCell align="left">Salary</TableCell>
                                <TableCell align="left">Credit Limit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.customers.map(row => (
                                <TableRow key={row.id}>
                                    {/* <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell> */}
                                    <TableCell align="left">{row.tckn}</TableCell>
                                    <TableCell align="left">{`${row.name ? row.name : ''} ${row.surname ? row.surname : ''}`}</TableCell>
                                    <TableCell align="left">{row.email ? row.email : ''}</TableCell>
                                    <TableCell align="left">{row.telephone ? row.email : ''}</TableCell>
                                    <TableCell align="left">{row.salary ? row.salary : ''}</TableCell>
                                    <TableCell align="left">{row.creditLimit ? row.creditLimit : ''}</TableCell>
                                    {/* <TableCell align="left" onClick={() => this.editCustomer(row.id)}><CreateIcon /></TableCell>
                                    <TableCell align="left" onClick={() => this.deleteCustomer(row.id)}><DeleteIcon /></TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Container>
            </React.Fragment>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListCustomerComponent;