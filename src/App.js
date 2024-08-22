import './App.css';
// import * as common from './common/common.js'
import * as signin from './member/signin.js'
import * as member from './member/memberlist.js'
import Button from 'react-bootstrap/Button';
import { useEffect ,useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
        <>
          <Header></Header>
          <Main></Main>
        </>
       } />
      <Route path="/best" element={ 
        <>
          <Header></Header>
          <div>best페이지임</div> 
        </>
      } />
      <Route path="*" element={
        <>
          <div>없는페이지요</div>
          <Link to='/'>홈으로</Link>
        </>
      } />
      </Routes>

      {/* <Button variant="secondary" onClick={()=>common.getApi('/noParam','noParam')}>noParam</Button>{' '}
      <Button variant="success" onClick={()=>common.getParamApi('/getSave','getParam')}>getParam</Button>{' '}
      <Button variant="info" onClick={()=>common.getParamApi('/requestSave','getRequest')}>getRequest</Button>{' '}
      <Button variant="warning" onClick={()=>common.postApi('/requestSave','postRequest')}>postRequest</Button>{' '}
      <Button variant="danger"  onClick={()=>common.postApi('/postSave','post')}>post</Button>{' '} */}
      
      {/* <Button variant="primary" onClick={()=>setSignInShow(!signInShow)}>회원가입</Button>{' '}
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
      } */}
    </div>
  );
}


function Header(){
  let navigate = useNavigate();
  return(
    <>
      <div className="navbar" bg="light" data-bs-theme="light">
        <div className="container">
          <Navbar.Brand onClick={()=>{ navigate('/')}}>신선식품</Navbar.Brand>
        </div>
      </div>
      <div className="navbar" bg="light" data-bs-theme="light">
        <div className="container">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/best')}}>베스트</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1)}}>이전</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(1)}}>다음</Nav.Link>
          </Nav>
          <Nav className="me-auto" style={{float:"left"}}>
            <Nav.Link onClick={()=>{ navigate('/about')}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about/member')}}>구성원</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about/location')}}>회사위치</Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  )
}
function Main(){
  const[signInShow,setSignInShow]=useState(false);
  const[memberlistShow,setMemberlistShow]=useState(false);
  return(
    <>
      <div className="main-bg"></div>

      <div className="container" style={{marginTop : '10px'}}>
        <div className="row">
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
        </div>
      </div> 
    </>
  )
}
export default App;
