import * as common from '../common/common.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

//회원가입
export function SignIn(){
    const [signInData, setSignInData] = useState({
      memberName: "",
      city: "",
      street: "",
      zipcode: "",
    });
    
    function handleInputChange(field, event) {
      //useState는 set함수를 여러번 중복사용시, 즉시 재랜더링이 되지 않기 때문에 prev(이전)로 사용권장
      setSignInData((prev) => ({
        ...prev,
        [field]: event.target.value,//userInfo와 같은 객체는 setState를 이용해서 value값을 업데이트할 때 key가 동적이므로 [key] 형식으로 작성을 해야한다.
      }));
    }
  
    function handleSubmit(event) {
      event.preventDefault(); //a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 창이 새로고침하여 실행됨, preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
      const params = new URLSearchParams();
      params.append('memberName',signInData.memberName)
      params.append('city',signInData.city)
      params.append('street',signInData.street)
      params.append('zipcode',signInData.zipcode)
      common.postApi(process.env.REACT_APP_SERVER+'/member/signIn',params);
    }
  
    //onSubmit : 폼을 제출할 때 이벤트가 발생한다.
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>이름</Form.Label>
          <Form.Control type="" placeholder="Enter name" onChange={(event) => handleInputChange("memberName", event)} value={signInData.memberName}/>

        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>도시</Form.Label>
          <Form.Control type="" placeholder="Enter city" onChange={(event) => handleInputChange("city", event)} value={signInData.city}/>

        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>거리</Form.Label>
          <Form.Control type="" placeholder="Enter street" onChange={(event) => handleInputChange("street", event)} value={signInData.street}/>

        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>우편번호</Form.Label>
          <Form.Control type="" placeholder="Enter name" onChange={(event) => handleInputChange("zipcode", event)} value={signInData.zipcode}/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }