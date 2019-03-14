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

        let url = BASE_URL +  EASY_SHOP + '/tokens' +"?q="+query  + '&apiKey=' + API_KEY;
        $.ajax({url:url}).then(function (res) {
            if(res.length === 0){
                //TODO SO WHAT?
            return false;
            }else{
               //  alert('success! Authorized as ' + res[0].login );
                currentLogin = res[0].login;

                sessionStorage.setItem(currentLogin, AUTH);
                sessionStorage.setItem("lastAuth", currentLogin);//TODO костылек??????? несомненно

                return   true;

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


                  for(let i =0; i< res.length; i++) {
                      for (let j = 0; j < res[i].list.length; j++) {
                          if(res[i].list[j]) {
                              currentUserItems.push(res[i].list[j]);
                          }
                      }
                  }

            }
        })
    },


    addList(list,name,currentLogin,privatize) {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify({"list": list,
                'login':currentLogin,"name":name,'private':privatize}),
            type: "POST",
            contentType: "application/json"
        });

        sessionStorage.setItem("currentList", name);
    },

    async getCurrentList(){

   let currentList  =   this.getShopListByName(sessionStorage.getItem("currentList"));
      let list = currentList.then((data)=>{
//TODO catchin respons&network errors for loosers, huh?
            return data[0].list;

 }).then((response)=>{
            let currentList = [];
            for(let i = 0; i <response.length; i++) {
                currentList.push(response[i]);
            }

            return currentList;
        });


        return list;
    },

    getUsersListItemsPricedBy(shop, list){

        let j='{ itemName: { $in: [ ';
        for (let i = 0; i <list.length ; i++) {
            if(i===0){
                j = j.concat(`"${list[i]}"`);
            }else {
                j = j.concat(`, "${list[i]}"`);
            }
        }
       j = j.concat("] } }");

        let js = JSON.stringify(j);
        let q = j;
        let query = JSON.stringify(q);
        let url = BASE_URL + EASY_SHOP +"/"+shop+"?q="+ q+"&apiKey="+API_KEY;


        let res;
        res = fetch(url).then((response)=> response.json());

        let shopList = res.then((data)=>{
          return {list: data, store: shop};
        })

        return shopList;
    },

    async getList() {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
       try{
           const response=await fetch(url);
           if(response.ok){
               const jsonResponse= await response.json();
               Resp=jsonResponse;
               return jsonResponse;
           }
           throw new Error('Request failed!')
       }
       catch (e) {
           console.log(e);
       }



    },

    removeList(doc){ //TODO yet deletes too much..
        let query={"list":doc.json};
        let q='?q='+query;
        let url=BASE_URL+GET_shopLists_Url+q+'&apiKey='+API_KEY;
        $.ajax({
            url: url,
            data:JSON.stringify([]),
            type: 'PUT',
            contentType: 'application/json'
        }).catch((e)=>{console.log(e)})

    },
    getShopListByName(name) {
        let q={"name":name};
        let query=JSON.stringify(q);
        let res;
        let url = BASE_URL + GET_shopLists_Url +"?q="+query+"&apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    },


    getShopList() {
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    }


}

export default DataBase;

