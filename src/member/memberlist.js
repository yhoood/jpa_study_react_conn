import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useEffect ,useState } from 'react';

export function MemberList() {
  useEffect(()=>{
    axios.get('/member/memberList')
    .then((response)=>{
      console.log(response.data)
      setList([response.data])
      console.log(list)
    })
    .catch(()=>{
      console.log('실패함ㅅㄱ')
    })
  },[])
  const [list,setList]=useState([]);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}