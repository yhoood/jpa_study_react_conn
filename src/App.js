import './App.css';
// import * as common from './common.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <>

      {/* <Button variant="secondary" onClick={()=>common.getApi('/noParam','noParam')}>noParam</Button>{' '}
      <Button variant="success" onClick={()=>common.getParamApi('/getSave','getParam')}>getParam</Button>{' '}
      <Button variant="info" onClick={()=>common.getParamApi('/requestSave','getRequest')}>getRequest</Button>{' '}
      <Button variant="warning" onClick={()=>common.postApi('/requestSave','postRequest')}>postRequest</Button>{' '}
      <Button variant="danger"  onClick={()=>common.postApi('/postSave','post')}>post</Button>{' '} */}
      
      <Button variant="primary">회원가입</Button>{' '}
      <Button variant="success">회원목록</Button><br/>
      <Button variant="dark">상품등록</Button>{' '}
      <Button variant="warning">상품목록</Button><br/>
      <Button variant="info">상품주문</Button>{' '}
      <Button variant="secondary">주문내역</Button>
      <SignIn/>
    </>
  );
}

function SignIn(){
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default App;
