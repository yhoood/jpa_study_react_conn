import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useEffect ,useState } from 'react';

export function MemberList() {

  useEffect(()=>{
    axios.get(process.env.REACT_APP_SERVER +'/member/memberList')
    // axios.get('/member/memberList?id="abc"')
    .then((response)=>{
      console.log(response.data)
      setList(response.data)
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
          <th>이름</th>
          <th>도시</th>
          <th>거리</th>
          <th>우편번호</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(function (a){
            return(
                    <tr key={a}>
                      <td>{a.memberName}</td>
                      <td>{a.address.city}</td>
                      <td>{a.address.street}</td>
                      <td>{a.address.zipcode}</td>
                    </tr>
                   )
          })
        }
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
      </tbody>
    </Table>
  );
}