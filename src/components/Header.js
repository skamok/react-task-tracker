import PropTypes from 'prop-types';
import Button from './button';


const Header = ({title}) => {
  const onClick = () => {
    
  }
  return (
    <header className="header">
      <h1 /*style={headingStyle}*/>Task tracker</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
/* style in js
const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}
*/
export default Header;
