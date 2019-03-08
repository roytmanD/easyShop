import React from 'react';
import $ from 'jquery';

export const BASE_URL = 'https://api.mlab.com/api/1';

export const GET_shopLists_Url = '/databases/easy_shop/collections/shopLists';

export const API_KEY = 'fsJGVMZJ2RYyINyuEhUMfuDgGzcBUEb3';

export let Resp;

const EASY_SHOP = '/databases/easy_shop/collections';

const  AUTH = "AUTH";


export const sessionStorage = window.sessionStorage;

let currentLogin = 'superuser';
let currentPassword;


export let currentUserItems = [];

function getLogin() {
    return currentLogin;
}


const DataBase=  {

    addToken(login, password){
        let q = {"login": login};
        let query = JSON.stringify(q);
        //  let data = await fetch(url);
        let url = BASE_URL +  EASY_SHOP + '/tokens' +"?q="+query  + '&apiKey=' + API_KEY;
        $.ajax({url:url}).then(function (res) {
            if(res.length === 0){
                url = BASE_URL +  EASY_SHOP + '/tokens'  + '?apiKey=' + API_KEY;
                $.ajax({
                    url: url,
                    data: JSON.stringify(
                        {"login": login,
                            "password" : password}
                    ),
                    type: "POST",
                    contentType: "application/json"
                });
            }else{
                alert(`Username "${login}" already exists! can't sign up! try another one!`);

            }
        });


    },

    async auth(login, password){

        let q = {"login": login,
            "password" : password};
let query = JSON.stringify(q);
      //  let data = await fetch(url);
        let url = BASE_URL +  EASY_SHOP + '/tokens' +"?q="+query  + '&apiKey=' + API_KEY;
        $.ajax({url:url}).then(function (res) {
            if(res.length === 0){
                //callback(false, 'Wrong email or password')
                console.log(res);
            return false;
            }else{
               //  alert('success! Authorized as ' + res[0].login );
                currentLogin = res[0].login;

                sessionStorage.setItem(currentLogin, AUTH);
                sessionStorage.setItem("lastAuth", currentLogin);//TODO костылек??????? несомненно

                return   true;
//
// let id = {
//     "$oid": "5c7da4e61f6e4f047db0c74c"
// };
//        let id =  '/5c7da4e61f6e4f047db0c74c';
//                 let q = {"$oid": "5c7da4e61f6e4f047db0c74c" };
//                 let query = JSON.stringify(q);
//        url = BASE_URL +  EASY_SHOP + '/tokens' + "/5c7da4e61f6e4f047db0c74c2"  + '&apiKey=' + API_KEY;
// //TODO NIHUYAAAA NE RABOTAET
//
//                  $.ajax({url:url,
//                  data: JSON.stringify({"$set" : {currentLogin: currentLogin}}),
//                  type: 'PUT',
//                  contentType: 'application/json'}).then(function (res) {
//                      if(res.ok){ //TODO does it really check if the response was ok?
//                          console.log("trtatrtart" + res);
//                          // currentLogin = res[0].login;
//                          return true;
//                      }else {
//                          console.log('случилось говно');
//                          return false;
//                      }
//                  }); ////suuuuuukaaaa


                // url = BASE_URL + EASY_SHOP + "/current" +'/5c80103efb6fc072012f6de9' + '&apiKey=' +API_KEY;
                // console.log("huuuyyyy" + url);
                // $.ajax({url:url,
                // data: JSON.stringify({"$set" : {'currentUser': res[0].login}}),
                // type: 'PUT',
                // contentType: 'application/json'}).then(function (res) {
                //     console.log("resssss +" +res);
                // })



            }

        })

    },


    getUsersShopLists(user){ // TODO забирает из бд шопинг листы карент юзера
        let q = {"login":user}; //TODO lil edit b careful
        let query = JSON.stringify(q);
        let url = BASE_URL +  EASY_SHOP + '/shopLists' +"?q="+query  + '&apiKey=' + API_KEY;

        $.ajax({url:url}).then(function (res) {
            if(res.length === 0 ){
                alert('oops u fucked up again');
            }else{
          //      console.log(res);


                  for(let i =0; i< res.length; i++) {
                      for (let j = 0; j < res[i].list.length; j++) {
                         // currentUserItems.push(res[j].list);
                          if(res[i].list[j]) {
                              currentUserItems.push(res[i].list[j]);
                          }
                      }
                  }

               // console.log(res[i].list);

                //return res[0].list;
                console.log(currentUserItems);
            }
        })
    },

    addList(list) {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify({"list": list,
            'login':currentLogin}),
            type: "POST",
            contentType: "application/json"
        });
    },

    async getList() {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
       try{
           const response=await fetch(url);
           if(response.ok){
               const jsonResponse= await response.json();
               console.log(jsonResponse);
               Resp=jsonResponse;
               console.log(Resp);
               return jsonResponse;
           }
           throw new Error('Request failed!')
       }
       catch (e) {
           console.log(e);
       }



    },

    removeList(doc){ //TODO yet deletes too much..
        console.log(doc);
        let query={"list":doc.json};
        let q='?q='+query;
        let url=BASE_URL+GET_shopLists_Url+q+'&apiKey='+API_KEY;
        console.log(url);
        $.ajax({
            url: url,
            data:JSON.stringify([]),
            type: 'PUT',
            contentType: 'application/json'
        }).catch((e)=>{console.log(e)})

    },

    getShopList() {
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        console.log(res);
        return res;
    }


}

export default DataBase;

