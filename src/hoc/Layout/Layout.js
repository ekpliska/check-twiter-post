import React, { Component } from 'react';
import LayoutStyle from './Layout.module.css'
import MenuToggle from '../../components/Navagation/MenuToggle/MenuToggle';
import Drower from '../../components/Navagation/Drower/Drower';

class Layout extends Component {

    state = {
        menu: false
    }

    ToogleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    
    render() {
        return (
            <div className={LayoutStyle.layout}>
                <MenuToggle
                    onToggle={this.ToogleMenuHandler}
                    isOpen={this.state.menu}
                />
                <Drower
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                ></Drower>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;