
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd, showAdd}) => {

  const onClick = () =>{
    console.log('click')
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add new task'} onClick={onAdd}/>
    </header>
  )
}

//const headingStyle = {
 // color: 'red',
 // backgroundColor:'blue'
//}


export default Header