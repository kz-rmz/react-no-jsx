export default function Brand({brand}){
    return React.createElement(
            'a',
            {className: 'navbar-brand text-reset'},
            brand
    )
}