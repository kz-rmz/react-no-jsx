import Navitem from "./Navitem.js";
import Brand from "./Brand.js";

export default function Navbar(){
    const [ brand, useBrand ] = React.useState('FIRM');
    const menuItems = ['Main'];
    const menuElements = menuItems.map( ( menuItem, index ) =>{
        return React.createElement (
                    Navitem,
                    {
                        key: index.toString(),
                        menuItem,
                    },
                )
    })
    return React.createElement(
        'nav',
        {
            className: 'navbar-nav justify-content-center flex-grow-1 bg-success',
        },
        React.createElement(
            'div',

            { className: 'container-lg d-flex py-2'},

            React.createElement(Brand, {brand}),
            React.createElement('ul',{ className: 'navbar-nav ms-auto' },
                menuElements
            )
        )
    )
}