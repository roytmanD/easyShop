import React from 'react';
import $ from 'jquery';

export const BASE_URL = 'https://api.mlab.com/api/1';

export const GET_shopLists_Url = '/databases/easy_shop/collections/shopLists';

const GET_EMAILS_URL = '/databases/easy_shop/collections/emails'

export const API_KEY = 'fsJGVMZJ2RYyINyuEhUMfuDgGzcBUEb3';


const EASY_SHOP = '/databases/easy_shop/collections';

const AUTH = "AUTH";


let currentLogin = null;


const DataBase = {

    addToken(login, password) {
        let q = {"login": login};
        let query = JSON.stringify(q);
        let url = BASE_URL + EASY_SHOP + '/tokens' + "?q=" + query + '&apiKey=' + API_KEY;
        $.ajax({url: url}).then(function (res) {
            if (res.length === 0) {
                url = BASE_URL + EASY_SHOP + '/tokens' + '?apiKey=' + API_KEY;
                $.ajax({
                    url: url,
                    data: JSON.stringify(
                        {
                            "login": login,
                            "password": password
                        }
                    ),
                    type: "POST",
                    contentType: "application/json"
                });
            } else {
                alert(`Username "${login}" already exists! can't sign up! try another one!`);

            }
        });


    },

    async auth(login, password) {

        let q = {
            "login": login,
            "password": password
        };
        let query = JSON.stringify(q);
        let url = BASE_URL + EASY_SHOP + '/tokens' + "?q=" + query + '&apiKey=' + API_KEY;
        $.ajax({url: url})
            .then(function (res) {
                if (res.length === 0) {
                    alert('wrong!!')
                }
                else {

                    currentLogin = res[0].login;
                    sessionStorage.setItem(currentLogin, AUTH);
                    sessionStorage.setItem("lastAuth", currentLogin);
                }

            })

    },


    addEmail(login, email) {
        let url = BASE_URL + GET_EMAILS_URL + '?apiKey=' + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify({
                login: login,
                email: email
            }),
            type: 'POST',
            contentType: 'application/json'
        });
    },


    addList(list, name, currentLogin, privatize) {
        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify({
                "list": list,
                'login': currentLogin, "name": name, 'private': privatize
            }),
            type: "POST",
            contentType: "application/json"
        });

        sessionStorage.setItem("currentList", name);
    },


    removeList(doc) { //TODO yet deletes too much..
        let query = {"list": JSON.stringify(doc)};
        let q = '?q=' + query;
        let url = BASE_URL + GET_shopLists_Url + q + '&apiKey=' + API_KEY;
        $.ajax({
            url: url,
            data: JSON.stringify([]),
            type: 'PUT',
            contentType: 'application/json'
        }).catch((e) => {
            console.log(e)
        })

    },

    updateListList(id, list) {
        let change = {"$set": {"list": list}};
        let changeQ = JSON.stringify(change);

        let q = JSON.stringify({"_id": id});

        let url = BASE_URL + GET_shopLists_Url + "?apiKey=" + API_KEY + "&q=" + q;
        $.ajax({
            url: url,
            data: changeQ,
            type: 'PUT',
            contentType: 'application/json'
        }).then((data) => console.log(data))
    },


    getExactUsersList(login, name) {
        let q = {"login": login, "name": name};
        let query = JSON.stringify(q);
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?q=" + query + "&apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    },

    async getCurrentList() {

        //      let currentList  =   this.getShopListByName(sessionStorage.getItem("currentList"));
        let currentList = this.getExactUsersList(sessionStorage.getItem("lastAuth"), sessionStorage.getItem("currentList"));
        if (currentList === null) currentList = "";
        let list = currentList.then((data) => {
//TODO catchin respons&network errors for loosers, huh?
            if (data[0] !== undefined) return data[0].list;
            else return ['']

        }).then((response) => {
            let currentList = [];
            for (let i = 0; i < response.length; i++) {
                currentList.push(response[i]);
            }

            return currentList.sort();
        });


        return list;
    },

    getUsersListItemsPricedBy(shop, list) {

        let j = '{ itemName: { $in: [ ';
        for (let i = 0; i < list.length; i++) {
            if (i === 0) {
                j = j.concat(`"${list[i]}"`);
            } else {
                j = j.concat(`, "${list[i]}"`);
            }
        }
        j = j.concat("] } }");


        let js = JSON.stringify(j);
        let q = j;
        let query = JSON.stringify(q);
        let url = BASE_URL + EASY_SHOP + "/" + shop + "?q=" + q + "&apiKey=" + API_KEY;

        let res;
        res = fetch(url).then((response) => response.json());

        let shopList = res.then((data) => {
            return {list: data, store: shop};
        })

        return shopList;
    },

    getShopListByLogin(login) {
        let q = {"login": login};
        let query = JSON.stringify(q);
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?q=" + query + "&apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    },


    getShopListByName(name) {
        let regex = ".*" + name + ".*";
        let q = {$or: [{"name": {$regex: regex}}, {"list": {$in: [{$regex: regex}]}}], "private": {$in: [false, null]}};
        let query = JSON.stringify(q);
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?q=" + query + "&apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    },

    searchUsersListByName(user, name) {
        let regex = ".*" + name + ".*";
        let q = {"login": user, $or: [{"name": {$regex: regex}}, {"list": {$in: [{$regex: regex}]}}]};
        let query = JSON.stringify(q);
        let res;
        let url = BASE_URL + GET_shopLists_Url + "?q=" + query + "&apiKey=" + API_KEY;
        res = fetch(url).then((response) => response.json());
        return res;
    }


}

export default DataBase;

