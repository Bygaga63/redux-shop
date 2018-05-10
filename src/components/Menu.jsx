import React from 'react';
import {Menu} from 'semantic-ui-react'


export const MenuComponent = ({ totalPrice, count }) => (
    <div>
        <Menu>
            <Menu.Item name='browse' onClick={this.handleItemClick}>
                Магазин книг
            </Menu.Item>
            {console.log(totalPrice)}
            <Menu.Menu position='right'>
                <Menu.Item name='signup' onClick={this.handleItemClick}>
                    Итого: &nbsp;<b>{totalPrice}</b>&nbsp; руб.
                </Menu.Item>

                <Menu.Item name='help' onClick={this.handleItemClick}>
                    Корзина &nbsp;<b>({count})</b>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
);




