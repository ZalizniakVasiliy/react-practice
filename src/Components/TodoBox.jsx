import React from 'react';
import Item from './Item';
import _ from 'lodash';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotes: [],
            noteValue: ''
        };
    }

    onChangeInput = (e) => {
        this.setState({noteValue: e.target.value})
    }

    handleAddNote = (e) => {
        e.preventDefault();
        const {listNotes, noteValue} = this.state;
        const newNote = {content: noteValue, id: _.uniqueId()};
        this.setState({listNotes: [newNote, ...listNotes], noteValue: ''})
    }

    handleRemoveNote = (taskId) => () => {
        const {listNotes} = this.state;
        const newListNotes = listNotes.filter(item => item.id !== taskId);
        this.setState({listNotes: newListNotes})
    }

    render() {
        const {listNotes, noteValue} = this.state;

        if (listNotes.length > 0) {
            return (
                <div>
                    <div className="mb-3">
                        <form className="d-flex">
                            <div className="me-3">
                                <input type="text"
                                       value={noteValue}
                                       required=""
                                       className="form-control"
                                       placeholder="I am going..."
                                       onChange={this.onChangeInput}/>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleAddNote}>add
                            </button>
                        </form>
                    </div>
                    <div>
                        {listNotes.map((item) => {
                            return <Item key={_.uniqueId()} onRemove={this.handleRemoveNote} task={item}/>
                        })}
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   value={noteValue}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."
                                   onChange={this.onChangeInput}/>
                        </div>
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={this.handleAddNote}>add
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoBox;
