export default function Modal({ id, name, username, email, closeModal}){
    return React.createElement(
        // 'div',{ className: 'modal' },
        //     React.createElement(
        //         'div', { className: 'modal-dialog' },
        //             React.createElement(
        //                 'div',{ className: 'modal-content' },
        //                 React.createElement('div',{ className: 'modal-header' },
        //                         React.createElement('h5',{ className: 'modal-title' },'Modal title'),
        //                         React.createElement('button',{ className: 'btn-close', onClick: ()=>{closeModal()} }, null)
        //                 )
        //             )
        //     )
        'div',
        {
            className: 'card'
        },
        React.createElement(
            'div',
            {
                className: 'card-body'
            },
            // {onClick: () => closeModal()},
            React.createElement('h5', {className: 'card-title, text-muted mb-2'}, `ID: ${id}`),
            React.createElement('h5', {className: 'card-title'}, `Name: ${name}`),
            React.createElement('p', {className: 'card-subtitle mb-2'}, `Username: ${username}`),
            React.createElement('p', {className: 'card-text'}, `email: ${email}`),
            React.createElement('a', {className: 'card-link', onClick: ()=>{closeModal()}}, 'Back'),
        )
    )
}