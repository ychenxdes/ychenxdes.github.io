new Vue({
  el: "#app",
  data: {
    products: [],
    pagination: {},
    tempProduct: {
      imageUrl: [],
    },
    isNew: false, //用來變換modal標題
    status: {
      fileUploading: false,
    },
    user: {
      token: "",
      uuid: "0b14219f-1a37-44d4-8d67-88e77b0f312a",
    },
  },
  //生命週期，若取不到 token 則返回登入畫面
  created() {
    //取得cookie
    this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //取不到則返回登入頁面
    if (this.user.token === "") {
      window.location = "loginPage.html"
    }
    //取得產品資料
    this.getProducts();
  },
  methods: {
    //頁碼預設為第一頁
    getProducts(page = 1) {
      const api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products?page=${page}`;
      //預設帶入token
      axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

      axios.get(api).then(res => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination; //取得分頁資訊
      });
    },
    openModal(mode, item) {
      switch (mode) {
        case "newProduct":
          this.isNew = true; //變換modal標題
          //清空內容
          this.tempProduct = {
            imageUrl: [],
          };
          $("#productModal").modal("show");
          break;
        case "editProduct":
          this.isNew = false; //變換modal標題
          this.getSingleProduct(item.id); //用取得單一產品資訊的函式取得資料
          break;
        case "deleteProduct":
          this.tempProduct = Object.assign({}, item); //用淺拷貝拷貝item
          $("#delModal").modal("show");
          break;
        default:
          break;
      }
    },
    //取得單一產品資料，id為item.id的那個id
    getSingleProduct(id) {
      const api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${id}`;
      axios.get(api).then(res => {
        this.tempProduct = res.data.data; //取到後寫進tempProduct
        $("#productModal").modal("show");
      }).catch(error => {
        console.log(error);
      });
    },
    //新增為「post」編輯則是「patch」，patch 必須傳入產品 ID
    saveProduct() {
      //彈窗為新增產品時
      let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product`;
      let httpMethod = "post";

      //彈窗為修改產品時
      if (!this.isNew) {
        api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = "patch";
      }

      //預設帶入token
      axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

      axios[httpMethod](api, this.tempProduct).then(() => {
        $("#productModal").modal("hide");
        this.getProducts();
      }).catch(error => {
        console.log(error)
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file", uploadedFile);
      const url = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/storage`;
      this.status.fileUploading = true;
      axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        this.status.fileUploading = false;
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path);
        }
      }).catch(() => {
        console.log("上傳不可超過 2 MB");
        this.status.fileUploading = false;
      });
    },
    deleteProduct() {
      const url = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`;

      // 預設帶入 token
      axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

      axios.delete(url).then(() => {
        $("#delModal").modal("hide");
        this.getProducts();
      });
    },
  },
})