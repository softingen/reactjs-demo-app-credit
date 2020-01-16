import React, { Component, Fragment } from 'react'
import CustomerService from "../../service/CustomerService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "../Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay';

class AddCustomerComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            tckn: '',
            name: '',
            surname: '',
            email: '',
            salary: '',
            telephone: '',
            message: null,
            isLoading: false,
        }
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {tckn: this.state.tckn, name: this.state.name, surname: this.state.surname, email: this.state.email, salary: this.state.salary, telephone: this.state.telephone};

        this.setState({ isLoading: true });
        CustomerService.addCustomer(customer)
            .then(res => {
                console.log("res :: ", res)
                if (res.data.statusCode === 200) {
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        });

                    setTimeout(() => {
                        this.props.history.push('/list-customer');
                      }, 2000);
                } else {
                    toast.error(res.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        });
                }

                this.setState({ isLoading: false });
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <Fragment>
          

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                    <NavBar/>
                    <LoadingOverlay
                        active={this.state.isLoading}
                        spinner
                        text='Loading your content...'
                        >
                        <Container>
                                <Typography variant="h4" style={style}>Add Customer</Typography>
                                <form style={formContainer}>

                                    <TextField label="TCKN" validations={["required", "max:11"]} type="number" fullWidth margin="normal" name="tckn" value={this.state.tckn} onChange={this.onChange}/>

                                    <TextField label="NAME" type="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>

                                    <TextField label="SURNAME" fullWidth margin="normal" name="surname" value={this.state.surname} onChange={this.onChange}/>

                                    <TextField validations={["required", "email"]}  onBlur={(e) => {console.log(e)}}  label="EMAİL" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                                    <TextField label="SALARY" type="number" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>

                                    <TextField label="TELEPHONE" type="telephone" fullWidth margin="normal" name="telephone" value={this.state.telephone} onChange={this.onChange}/>

                                    <Button variant="contained" color="primary" onClick={this.saveCustomer}>Save</Button>
                                </form>
                        </Container>
                    </LoadingOverlay>
            </Fragment>

        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddCustomerComponent;