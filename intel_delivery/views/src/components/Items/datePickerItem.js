import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme();

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
};

class datePickerItem extends Component {

    constructor(props) 
    {    
        super(props);
        
        this.state = {
            datePicker: '',
        };
    }

    handleChange = (e) => {
        /* Convirtiendo manualmente la fecha a formato necesario */
        this.setState({
            [e.target.id]: e.target.value
        });
        
        var parsedDate = e.target.value.split("-");
        parsedDate = [parseInt(parsedDate[0]), parseInt(parsedDate[1])-1, parseInt(parsedDate[2])]
        this.props.parentCallback(new Date(parsedDate[0], parsedDate[1], parsedDate[2]));
    };

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <form className={classes.container}>
                    <TextField
                        id="datePicker"
                        label={this.props.msg}
                        type="date"
                        defaultValue={this.props.defaultValue}
                        className={classes.textField}
                        onChange={(e) => this.handleChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </React.Fragment>
        );
    }
}

datePickerItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(datePickerItem);