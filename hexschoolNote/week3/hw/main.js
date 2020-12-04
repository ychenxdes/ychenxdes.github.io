new Vue({
    el: "#app",
    data: {
        // 建立產品列表
        products: [
            {
                id: 1586934917210,
                category: "GENTS",
                title: "THE TRAGEDY OF LORD GEORGE",
                content: "Rich, noble, deceptive. Like our patriarch, this woody perfume has secrets.",
                description: "FOUGÈRE",
                imageUrl:
                    "https://www.penhaligons.com/medias/sys_master/images/images/h99/h7e/9050315980830/9050315980830.jpg",
                is_enabled: 1,
                origin_price: 278,
                price: 265,
                unit: "75ml",
            },
            {
                id: 1196934917910,
                title: "THE BEWITCHING YASMINE",
                category: "LADIES",
                content: "Will Yasmine’s scent of jasmine, incense and oud help her lure a suitable match?",
                description: "ORIENTAL",
                imageUrl:
                    "https://www.penhaligons.com/medias/sys_master/images/images/h48/h81/9050287964190/9050287964190.jpg",
                is_enabled: 0,
                origin_price: 278,
                price: 265,
                unit: "75ml",
            },
        ],
        //暫時放置用
        tempProduct: {},
    },
    methods: {
        // 更新產品
        updateProduct() {
            // 判斷是否現有id
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                // 有id的話，比對是哪一則，做修改
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products[i] = this.tempProduct;
                    }
                });
            } else {
                // 新產品，產生id
                const id = new Date().getTime();
                // 將id指給 this.tempProduct
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            // 淺拷貝
            this.tempProduct = {};
            // 關閉Modal
            $("#productModal").modal("hide");
        },

        // 判斷情況，打開Modal
        openModal(isNew, item) {
            // 建立新產品，使用switch迴圈判斷 isNew的值，去辨別執行項目
            switch (isNew) {
                // 建立新產品時，叫出建新產品的Modal
                case "new":
                    this.tempProduct = {};
                    $("#productModal").modal("show");
                    break;
                // 修改時
                case "edit":
                    this.tempProduct = Object.assign({}, item);
                    $("#productModal").modal("show");
                    break;
                // 修改時
                case "delete":
                    $("#delProductModal").modal("show");
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        // 刪除產品
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                //function為什麼不能這樣寫?
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $("#delProductModal").modal("hide");
        },
    },
});

