import { Component } from 'react'
import Summary from './summary'
import { compose } from 'redux';
import { connect } from 'react-redux'
import * as actions from './actions'
import { reduxForm, Field } from 'redux-form'

class CalculateForm extends Component {
    state = { tip: 0, price: 0 }

    handleComputation = (formProps) => {
        this.props.calculateForm(formProps, (data) => {
            console.log('callback', data);
        })
    }

    onRemove = (e) => {
        const id = e.target.getAttribute('data-id')
        const remove = this.props.history.filter((filt) => filt.id !== id)
        this.props.remove(remove,() => {});
    }

    render() {
        const { handleSubmit } = this.props
        const { price, tip, total } = this.state
        return (
            <>
                <form onSubmit={handleSubmit(this.handleComputation)}>
                    <div className="form-group">
                        <label>Price: $</label>
                        <Field type="text" name="price" component="input" required />
                    </div>
                    <div className="form-group">
                        <label>Tip: %</label>
                        <Field type="text" name="tip" component="input" required />
                    </div>
                    <div className="form-group">
                        <button action="submit">Calculate</button>
                    </div>
                </form>
                <Summary onRemove={this.onRemove} history={this.props.history}/>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    };
}

export default compose(connect(mapStateToProps, actions),  reduxForm({form: 'calculateForm'}))(CalculateForm)