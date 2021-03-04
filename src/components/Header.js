import PropTypes from 'prop-types';
import Button from './button';


const Header = ({title, onAdd, showadd}) => {
  return (
    <header className="header">
      <h1 /*style={headingStyle}*/>Task tracker</h1>
      <Button color={showadd ? 'red' : 'green'} text={showadd ? 'Close' : 'Add'} onClick={onAdd}/>
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
