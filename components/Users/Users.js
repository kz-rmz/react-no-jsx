import User from './User.js';
import Modal from '../Modal.js';

export default function Users() {
    const [ modalIsOpen, setModalOpen ] = React.useState(false);
    const [ users, setUsers ] = React.useState([]);
    const [ user, setUser ] = React.useState(null);

    React.useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then( response => response.json())
            .then( result => setUsers(result));
    }, []);

    function modalToggle(currentUser) {
        if(modalIsOpen === true){
            setModalOpen(false);
        } else {
            setModalOpen(true);
            const result = users.filter( user => user.name === currentUser)
            setUser(result[0]);
        }
    };

    const usersList = users.map( user => {
        return React.createElement(
            User,
            { 
                key: Math.random().toString(),
                name: user.name,
                toggleOpen: modalToggle,
            }, 
            null);
    })

    if(modalIsOpen === true){
        return React.createElement(
            Modal,
            {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                closeModal: modalToggle,
            },
            null
            );
    } else if(modalIsOpen === false) {
        return React.createElement(
            'ol',
            {
                className: 'list-group list-group-numbered'
            },
            usersList
            );
    }
}