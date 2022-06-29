import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logList: [],
            logValue: 0
        }
    }

    changeLog = (val) => () => {
        let {logValue, logList} = this.state;

        if (val === 'increaseOnOne') {
            this.setState({
                logValue: ++logValue,
                logList: [logValue, ...logList]
            });
        }

        if (val === 'decreaseOnOne') {
            this.setState({
                logValue: --logValue,
                logList: [logValue, ...logList]
            });
        }
    }

    addIncreaseLog = this.changeLog('increaseOnOne');
    addDecreaseLog = this.changeLog('decreaseOnOne');

    removeLogItem = (oldIndex) => (e) => {
        e.preventDefault();
        const {logList} = this.state;
        const newLogList = logList.filter((item, newIndex) => newIndex !== oldIndex);

        let newLogValue;
        if (newLogList.length > 0) {
            newLogValue = newLogList[0];
        } else {
            newLogValue = 0;
        }
        this.setState({logList: newLogList, logValue: newLogValue});
    }

    renderItem = (logValue, index) => {
        return (
            <button type='button'
                    className='list-group-item list-group-item-action'
                    key={index}
                    onClick={this.removeLogItem(index)}>{logValue}
            </button>
        )
    }

    render() {
        const {logList} = this.state;

        if (logList.length > 0) {
            return (
                <div>
                    <div className='btn-group font-monospace' role='group'>
                        <button type='button'
                                className='btn btn-outline-success'
                                onClick={this.addIncreaseLog}>+
                        </button>
                        <button type='button'
                                className='btn btn-outline-danger'
                                onClick={this.addDecreaseLog}>-
                        </button>
                    </div>
                    <div className='list-group'>
                        {logList.map((item, index) => this.renderItem(item, index))}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className='btn-group font-monospace' role='group'>
                    <button type='button'
                            className='btn btn-outline-success'
                            onClick={this.addIncreaseLog}>+
                    </button>
                    <button type='button'
                            className='btn btn-outline-danger'
                            onClick={this.addDecreaseLog}>-
                    </button>
                </div>
            </div>
        )
    }
}

export default Component;

