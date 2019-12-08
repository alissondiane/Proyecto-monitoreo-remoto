import React from 'react'
import '../App.css';
import PropTypes from 'prop-types';


const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
}

const defaultProps = {
  initialPage: 1
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     
    }
    
  }


  render() {
   
      return (
        <div className="">
       

        </div>
      )
     }
  }




export default App;
