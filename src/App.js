import './App.css';
// import * as common from './common/common.js'
import * as signin from './member/signin.js'
import * as member from './member/memberlist.js'
import Button from 'react-bootstrap/Button';
import { useEffect ,useState } from 'react';

function App() {
  useEffect(()=>{
    
  },[])

  const[signInShow,setSignInShow]=useState(false);
  const[memberlistShow,setMemberlistShow]=useState(false);
  return (
    <>

      {/* <Button variant="secondary" onClick={()=>common.getApi('/noParam','noParam')}>noParam</Button>{' '}
      <Button variant="success" onClick={()=>common.getParamApi('/getSave','getParam')}>getParam</Button>{' '}
      <Button variant="info" onClick={()=>common.getParamApi('/requestSave','getRequest')}>getRequest</Button>{' '}
      <Button variant="warning" onClick={()=>common.postApi('/requestSave','postRequest')}>postRequest</Button>{' '}
      <Button variant="danger"  onClick={()=>common.postApi('/postSave','post')}>post</Button>{' '} */}
      
      <Button variant="primary" onClick={()=>setSignInShow(!signInShow)}>회원가입</Button>{' '}
      <Button variant="success" onClick={()=>setMemberlistShow(!memberlistShow)}>회원목록</Button><br/>
      <Button variant="dark">상품등록</Button>{' '}
      <Button variant="warning">상품목록</Button><br/>
      <Button variant="info">상품주문</Button>{' '}
      <Button variant="secondary">주문내역</Button>
      {
        signInShow===true ? <signin.SignIn/>:null
      }
      {
        memberlistShow===true ? <member.MemberList/>:null
      }
    </>
  );
}
export default App;
