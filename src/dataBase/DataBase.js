import React from 'react';
import $ from 'jquery';

export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.mlab.com/api/1';

export const GET_shopLists_Url = '/databases/easy_shop/collections/shopLists';

export const API_KEY = 'fsJGVMZJ2RYyINyuEhUMfuDgGzcBUEb3';

export let Resp;



const DataBase=  {
    addList(list) {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify({"list": list}),
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


    getShopList(){
        let res;
       /*let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
       fetch(url).then((response)=>{
           if(response.ok)
           {return response.json()
               console.log(response.json())
           }})
           .then((jsonResponse)=>{return jsonResponse})   */
      let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
      console.log($.ajax({
          type: 'GET',
          url: url,
          dataType:'json',
          success:(data)=>{
              data=res;
              return data}
      })) ;
        console.log(res);
          return res;
    }


}

export default DataBase;

