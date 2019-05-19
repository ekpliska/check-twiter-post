import React, { Component } from 'react';
import LayoutStyle from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <div className={LayoutStyle.layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;