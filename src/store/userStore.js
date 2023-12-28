import {defineStore} from "pinia";
import axios from "axios";
import router from "@/js/router";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: {},
    }),
    actions: {
        getUser() {
            return new Promise((resolve, reject) => {
                axios.get(`http://127.0.0.1:8000/api/user`,{ headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(response => {
                    const data = response.data;
                    this.user = data;
                    // resolve(this.user)
                }).catch((e) => {
                    reject(e);
                    });
            })
        },
        async setUser(formData){
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:8000/api/store', formData).then(res => {
                    const data = res.data
                    this.user = data.data
                    console.log(data.token,'tokennnnnnjlkjklj')
                    localStorage.setItem('token',data.token)
                    console.log(this.user,'dddddd')
                    if (data.success){
                        router.push({name: 'Home'})
                    }
                    resolve()
                }).catch(e => reject(e))
            })
        },
        async login(formData){
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:8000/api/auth/login', formData).then(res => {
                    const data = res.data
                    this.user = data.data
                    console.log(this.user,'tokeeeeeenn')
                    if (data.success){
                        localStorage.setItem('token',data.token)
                        router.push({name: 'Home'})
                    }
                    resolve()
                }).catch(e => reject(e))
            })
        },
      async logout() {
            this.user = null;
            localStorage.removeItem('token');
            router.push('/');
        }
    }
})
// export default {
//   data(){
//     return {
//       user: []
//     }
//   },
//   created() {
//     this.getUser()
//   },
//   methods: {
//     async getUser() {
//         await axios.get('http://127.0.0.1:8000/api/').then(response =>{
//         const data = response.data.data;
//         this.user = data
//           console.log(data);
//       }).
//       catch (error=> {
//         console.log('error', error);
//       });
//     }
//   }
// }