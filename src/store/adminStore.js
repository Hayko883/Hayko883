import {defineStore} from "pinia";
import axios from "axios";
import router from "@/js/router";

export const useAdminStore = defineStore('adminStore', {
    state: () => ({
        users: {},
        user: {},
    }),
    actions: {
        getUsers() {
            return new Promise((resolve, reject) => {
                axios.get(`http://127.0.0.1:8000/api/admin/users`,
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    .then(response => {
                    const data = response.data.data
                    this.users = data;
                    resolve(this.user)
                }).catch((e) => {
                    reject(e);
                });
            })
        },
        getUserId(userId) {
            return new Promise((resolve, reject) => {
                axios.get(`http://127.0.0.1:8000/api/admin/user/${userId}`,
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    .then(response => {
                    const data = response.data.data
                    this.user = data;
                    console.log(data, 'ccccc')
                    resolve(this.user)
                }).catch((e) => {
                    reject(e);
                });
            })
        },
        deleteUser(userId) {
            return new Promise((resolve, reject) => {
                axios.get(`http://127.0.0.1:8000/api/admin/delete/${userId}`,
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    .then(response => {
                        this.users = this.users.filter(e => e.id !== userId)
                        resolve(this.user)
                    }).catch((e) => {
                    reject(e);
                });
            })
        },
        async createUser(formData) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:8000/api/admin/create', formData,
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    .then(res => {
                    const data = res.data
                    this.user = data.data
                    if (data.success) {
                        router.push({name: 'AllUsers'})
                    }
                    resolve()
                }).catch(e => reject(e))
            })
        },
        async updateUser(userId,updateForm){
            return new Promise((resolve,reject)=> {
                axios.put(`http://127.0.0.1:8000/api/admin/update/${userId}`, updateForm,
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    .then(response =>{
                        if (response.data.success) {
                            router.push({name: 'AllUsers'})
                        }
                        resolve(response)
                    }).catch((e)=>reject(e))
            })
        },
    }
})