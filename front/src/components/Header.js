import propTypes from 'prop-types'
const Header = ({title}) => {
    return (
        <header className='nav justify-content-center'>
            <li className="nav-item">
            <h1 className="display-4">{title}</h1>
            </li>
        </header>
    )
}
Header.defaultProps = {
    title : 'hello',
}

Header.propTypes = {
    title : propTypes.string.isRequired,
}

export default Header