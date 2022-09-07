export default function Navitem( { menuItem } ){
    return React.createElement('li',{ className: "nav-item" },
                React.createElement('a',
                    {
                        href: '#',
                        className: 'nav-link text-reset'
                    },
                    menuItem
                )
            )
}