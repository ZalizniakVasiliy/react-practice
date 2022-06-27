import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logList: [],
            logObj: {logValue: 0, logId: 0}
        }
    }

    changeLog = (val) => () => {
        if (val === 'increaseOnOne') {
            let {logObj, logList} = this.state;

            this.setState({
                logObj: {
                    logValue: ++logObj.logValue,
                    logId: ++logObj.logId
                },
                logList: [logObj, ...logList]
            });
        }

        if (val === 'decreaseOnOne') {
            let {logObj, logList} = this.state;

            this.setState({
                logObj: {
                    logValue: --logObj.logValue,
                    logId: ++logObj.logId
                },
                logList: [logObj, ...logList]
            });
        }
    }

    addIncreaseLog = this.changeLog('increaseOnOne');
    addDecreaseLog = this.changeLog('decreaseOnOne');

    removeLogItem = (logId) => (e) => {
        e.preventDefault();
        const {logList} = this.state;

        const newLogList = logList.filter((item) => item.logId !== logId);
        this.setState({logList: newLogList});
    }

    renderItem = ({logValue, logId}) => {
        return (
            <button type='button'
                    className='list-group-item list-group-item-action'
                    key={logId}
                    onClick={this.removeLogItem(logId)}>{logValue}
            </button>
        )
    }

    render() {
        const {logList} = this.state;

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
                    {logList.map(item => this.renderItem(item))}
                </div>
            </div>
        )
    }
}

export default Component;