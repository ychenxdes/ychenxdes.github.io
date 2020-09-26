const main = new Vue ({
    el: '#app',
    data () {
        return {
            products: [
                {
                    id: 1586934917210,
                    unit: '台',
                    category: '掌上主機',
                    title: 'Switch',
                    origin_price: 20000,
                    price: 9980,
                    description: '想玩就玩',
                    content: '動森太好玩惹',
                    is_enabled: 1,
                    imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                },
                {
                    id: 1196934917910,
                    unit: '台',
                    category: '主機',
                    title: 'PS5 Wifi',
                    origin_price: 29999,
                    description: '次世代超強規格',
                    content: '我也想要換一台 PS5 Wifi',
                    price: 9487,
                    is_enabled: 0,
                    imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                },
            ],
            tempProduct: {
                imageUrl: [],
            },
        }
    },
    methods: {
        // 建立新的產品
        openModal (val, item) {
            const vm = this
            switch (val) {
                case 'new':
                    vm.tempProduct = {
                        imageUrl: [],
                    }
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    vm.tempProduct = Object.assign({}, item);
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    vm.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        // 編輯 產品
        updateProduct() {
            const vm = this
            if (vm.tempProduct.id) {
                const id = vm.tempProduct.id
                vm.products.forEach(function (item, i) {
                    if (item.id === id) {
                        vm.products[i] = vm.tempProduct
                    }
                })
            } else {
                // Unix Timestamp
                const id = new Date().getTime();
                vm.tempProduct.id = id;
                vm.products.push(vm.tempProduct);
            }
            vm.tempProduct = {};
            $('#productModal').modal('hide');
        },
        // 刪除 產品
        delProduct() {
            const vm = this
            if (vm.tempProduct.id) {
                const id = vm.tempProduct.id;
                vm.products.forEach((item, i) => {
                    if (item.id === id) {
                        vm.products.splice(i, 1);
                        vm.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        }
    }
})

export default main
