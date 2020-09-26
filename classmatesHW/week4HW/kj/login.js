const uuid = '61d0f120-1ac2-427c-9a10-878a710b2b57';
const apiPath = 'https://course-ec-api.hexschool.io/api/';

new Vue({
    el: '#login',
    data() {
        return {
            user: {
                email: '',
                password: '',
            }
        };
    },
    methods: {
        signIn() {
            const vm = this;
            const api = `${apiPath}auth/login`;
            axios.post(api, vm.user).then(res => {
                console.log(res);
                const token = res.data.token;
                const expired = res.data.expired;
                
                // 寫入 cookie token，expires 設置有效時間
                document.cookie =`token=${token};expires=${new Date(expired * 1000)}; path=/`;
                window.location = 'product.html';
            })
            .catch(err => console.log(err))
        },
    },
});