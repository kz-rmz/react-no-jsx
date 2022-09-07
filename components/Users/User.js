export default function User({ name, toggleOpen }) {
    return React.createElement(
        'li',
        {
            className: 'list-group-item list-group-item-action',
            onClick: function(e) {
                toggleOpen(e.target.textContent)
            }
        },
        name
    )
}