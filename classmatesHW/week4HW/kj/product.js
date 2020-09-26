
// 新增、編輯Modal元件
Vue.component('productModal', {
    template: '#productModal',
    /* 1. 因Ajax會用到user、modal中呈現產品會需要tempProduct，因此從外部傳入資料。
       2. 一般props為陣列，但也可以指定組件的「驗證規則」，並包裝成物件。
       3. 一般會檢驗「型別(type)」並提供「預設值(default)」。若是物件或陣列，則default會是一個function。
       4. 需要注意的是，這個驗證是發生於元件的創建之前，因此元件中各data、methods或computed都還不可使用。 */
    props: {
        user: {
            type: Object,
            default() { return {}},
        }, 
        tempProduct: {
            type: Object,
            default() { return{ imageUrl: [] }},
        }, 
    },
    data() {
        return {
        };
    },
    methods: {
        // 取得單一產品的資料
        getProduct(id) {
            const vm = this;
            const api = `${vm.user.apiPath}${this.user.uuid}/admin/ec/product/${id}`;
            axios.get(api).then(res => {
                // 取得後，寫入tempProduct中，完成再打開modal
                vm.tempProduct = res.data.data;
                $('#productModal').modal('show');
            })
            .catch(err => console.log(err));
        },
        /* modal中的「確認」按鈕監聽click事件，觸發元件內的updateProduct方法，
          目的是將新的物件資訊透過Ajax寫入資料庫，並通知getProducts更新products內容 */
        updateProduct() {
            const vm = this;
            let api = '';
            let httpMethod = '';
            // 如果有tempProduct有內容(id存在)，則代表是編輯產品，使用patch方法
            if (vm.tempProduct.id) {
                api = `${vm.user.apiPath}${vm.user.uuid}/admin/ec/product/${vm.tempProduct.id}`;
                httpMethod = 'patch';
            // 如果tempProduct的id不存在，代表tempProduct已被清空，是新增產品，使用post方法
            } else {
                api = `${vm.user.apiPath}${vm.user.uuid}/admin/ec/product`;
                httpMethod = 'post';
            };
            // 無論編輯或新增產品，都需要驗證
            axios.defaults.headers.common.Authorization = `Bearer ${vm.user.token}`;

            axios[httpMethod](api, vm.tempProduct).then(res => {
                // 成功編輯或新增產品後，關閉modal，再透過$emit發送update事件，觸發Vue實體中getProducts方法
                $('#productModal').modal('hide');
                vm.$emit('update');
            })
            .catch(err => console.log(err));       
        },

        uploadFile() {
            const vm = this;
            // 取得該筆上傳的資料
            const uploadedFile = vm.$refs.file.files[0];
            // 由於檔案難以使用Ajax，因此改用form形式上傳。首先建立一個新的FormData物件
            const formData = new FormData();
            // 輸入欲傳送的資料。第一個參數表示類型是file，第二個參數是檔案本身
            formData.append('file', uploadedFile);
            const api = `${vm.user.apiPath}${vm.user.uuid}/admin/storage`;
            axios.defaults.headers.common.Authorization = `Bearer ${vm.user.token}`;

            axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(res => {
                    vm.tempProduct.imageUrl.push(res.data.data.path);
            })
            .catch(err => console.log(err));
        },
    },
});


// 刪除Modal元件
Vue.component('deleteModal', {
    template: '#deleteModal',
    // 因Ajax會用到user、modal中呈現產品title會需要tempProduct，因此從外部傳入資料
    props: {
        user: {
            type: Object,
            default() { return {}},
        },
        tempProduct: {
            type: Object,
            default() { return { imageUrl: [] }},
        },
    },
    data() {
        return {
        };
    },
    methods: {
        // modal中的「確認刪除」按鈕監聽click事件，觸發元件內的deleteProduct方法
        deleteProduct() {
            const vm = this;
            const api = `${vm.user.apiPath}${vm.user.uuid}/admin/ec/product/${vm.tempProduct.id}`;
            axios.defaults.headers.common.Authorization = `Bearer ${vm.user.token}`;

            axios.delete(api).then(res => {
                // 成功刪除產品後，先關閉modal，再透過$emit發送update事件，觸發Vue實體中的getProducts方法
                $('#deleteModal').modal('hide');
                vm.$emit('update');
            })
            .catch(err => console.log(err));
        },
    },
});

// 頁籤元件
Vue.component('pagination', {
    template: '#pagination',
    // 以pages承接外部傳入的pagination物件
    props: { pages: {} },       
    data() {return {}},
    methods: {
        // 透過$emit「emit-pages」事件，觸發Vue實體中的getProducts，並將getProducts預設的page替換
        emitPages(item) {       
            this.$emit('emit-pages', item);
        },
    },
});

// Vue實體
new Vue({
    el: '#app',
    data: {
        products: [],       // 全部的產品
        pagination: {},     // 分頁物件，型別為文件所定義
        tempProduct: {      // 暫存的單筆產品資訊，用於編輯、刪除modal的資料綁定
            imageUrl: []    /* v-model會自動設定物件第一層的鍵、值，但第二層及以下的不會，
                               因此imageUrl需要先做宣告 */
        },
        user: {             // 將使用者與Ajax必備資訊包裝成一個物件
            apiPath: 'https://course-ec-api.hexschool.io/api/',
            uuid: '61d0f120-1ac2-427c-9a10-878a710b2b57',
            token: ''
        },
    },
    
    // 為了避免輸入網址即可登入後台，因此在created階段驗證是否帶有token。若沒有，則跳轉至登入頁面。
    created() {
        const vm = this;
        vm.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (vm.user.token === '') {
            window.location = 'index.html';
        };
    // 若成功取得token，則開放執行getProducts()。
        vm.getProducts();
    },
    
    methods: {
    
    /* 1. getProducts()的功能是用Ajax取得最新產品資訊，將產品存入products陣列。可透過template上的v-for渲染。
       2. getProducts()會在通過驗證(creared階段)後第一次更新products，之後每次有做新增、修改或刪除，
          元件也會用$emit通知getProducts()要再次更新products。
       3. 頁面(page)的預設值為第一頁(page=1) */ 
        getProducts(page=1) {
            const vm = this;
            const api = `${vm.user.apiPath}${vm.user.uuid}/admin/ec/products?page=${page}`;
            // 需取得驗證
            axios.defaults.headers.common.Authorization = `Bearer ${vm.user.token}`;     

            axios.get(api).then(res => {
                // 將products更新。
                vm.products = res.data.data;
                // 將分頁物件更新。
                vm.pagination = res.data.meta.pagination;
            })
            .catch(err => console.log(err));
        },
    /* 1. switchModal()的功能是判斷應切換到哪一個Modal，需先準備好資料後再做開啟。
       2. 第2個參數product，是透過html的v-for所傳入，代表當前的產品物件 */ 
        switchModal(option, product) {
            const vm = this;
            switch(option) {
                // 新增產品，需先清空tempProduct，以供使用者填入資料
                case 'new':
                    vm.tempProduct = { imageUrl: [] };
                    $('#productModal').modal('show');
                    break;
                /* 編輯產品，需先準備目前的產品物件，以便呈現資料在modal上。因應api需求，要代入該產品的id。
                   由於getProduct()方法是設定在元件內，因此需要用$refs調用。 */
                case 'edit':
                    vm.$refs.productModal.getProduct(product.id);
                    break;
                // 刪除產品，因modal中需要呈現該產品的title，因此先備份該產品資料到tempProduct
                case 'delete':
                    vm.tempProduct = Object.assign({}, product);
                    $('#deleteModal').modal('show');
                    break;
                default:
                    break;
            };
        },

        signout() {
            const vm = this;
            document.cookie =`token=;expires=; path=/`;
            vm.user.token = '';
            window.location = 'index.html';
        },
    },
});