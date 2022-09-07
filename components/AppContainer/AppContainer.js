import Users from '../Users/Users.js';

export default function AppContainer() {
    return React.createElement(
        'div',
        {
            className: 'container-md py-5',
        },
        React.createElement(
            Users,
            null,
            null
        )
    )
}