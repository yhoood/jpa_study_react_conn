import axios from 'axios'

export function getApi(url,button){
    axios.get(url)
    .then(function (response) {
        // response  
        console.log("data:"+response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        console.log(button+"->getApi->"+url+"-> Spring 호출완료");
        // 항상 실행
    });
}


export function getParamApi(url,button){
    axios.get(url,{
        params:{
            id:"getReactId"
        }
    })
    .then(function (response) {
        // response  
        console.log("data:"+response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        console.log(button+"->getParamApi->"+url+"-> Spring 호출완료");
        // 항상 실행
    });
}

export function postApi(url,button){
    axios.post(url, null, {
        params:{
            id:"postReactId",
            username: "yhoood",
            password: 1234
        }
    })
    .then(function (response) {
         // response  
         console.log("data:"+response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
        console.log(button+"->postApi->"+url+"-> Spring 호출완료");
    });
}