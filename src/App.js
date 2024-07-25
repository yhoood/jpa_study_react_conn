import './App.css';
import * as common from './common.js'
import Button from 'react-bootstrap/Button';
// import axios from 'axios'


function App() {
  return (
    <>
      {/* <Button variant="primary" onClick={()=>{
        axios.get('/orders')
        .then((data)=>{
          console.log(data)
        },null,null)
      }}>orders_direct</Button>{' '} */}

      <Button variant="secondary" onClick={()=>common.getApi('/noParam','noParam')}>noParam</Button>{' '}
      <Button variant="success" onClick={()=>common.getParamApi('/getSave','getParam')}>getParam</Button>{' '}
      <Button variant="info" onClick={()=>common.getParamApi('/requestSave','getRequest')}>getRequest</Button>{' '}
      <Button variant="warning" onClick={()=>common.postApi('/requestSave','postRequest')}>postRequest</Button>{' '}
      <Button variant="danger"  onClick={()=>common.postApi('/postSave','post')}>post</Button>{' '}
      {/* 
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
    </>
  );
}

export default App;
