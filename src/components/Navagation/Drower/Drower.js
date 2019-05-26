import React, {Component} from 'react';
import DrowerStyle from './Drower.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    1, 2, 3
];

class Drower extends Component {

    renderLink() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    {link}
                </li>
            )
        })
    }

    render() {

        const cls = [DrowerStyle.drower];

        if (!this.props.isOpen) {
            cls.push(DrowerStyle.close);
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLink()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drower;