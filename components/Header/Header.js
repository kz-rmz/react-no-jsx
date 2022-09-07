import Navbar from "./Navbar.js";

export default function Header() {
    
    return React.createElement(
        'div',
        {
            className: 'navbar navbar-expand-lg p-0',
        },
        [   
            React.createElement(Navbar,{}, null),
        ]
    );
}