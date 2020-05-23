import React, { Component } from 'react';
import { withStyles, fade } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

// const theme = createMuiTheme();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  dialogFail: {
    backgroundColor: fade(red[500], 0.40),
    borderRadius: 3,
    border: 0,
  },
  dialogSuccess: {
    backgroundColor: fade(green[500], 0.40),
    borderRadius: 3,
    border: 0,
  },
  dialogOkayButton: {
    color: blue[500],
  },
};

class informationDialog extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            open: false,
        }
      }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={ () => this.handleClose()}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className={this.props.dialogType === 'success' ? classes.dialogSuccess : classes.dialogFail }
                >
                    <DialogTitle id="alert-dialog-slide-title">{this.props.dialogTitle}</DialogTitle>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-slide-description">
                                {this.props.dialogInfo}
                            </DialogContentText>
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()} className={classes.dialogOkayButton}>
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

informationDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(informationDialog);