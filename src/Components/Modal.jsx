import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import cn from 'classnames';

class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const {isOpen, children} = this.props;

        const modalStyleNone = {display: 'none'}

        const modalStyle = {display: 'block'}

        const toggleStyle = cn('modal', {'fade show': isOpen})

        if (!isOpen) {
            return (
                <div className={toggleStyle} style={modalStyleNone} role='dialog'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className={toggleStyle} style={modalStyle} role='dialog'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;