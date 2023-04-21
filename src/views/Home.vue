<template>
    <div class="container min-h-content py-5 text-center">
        <div class="row py-lg-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="product in products"  :key="product.id">
                    <div class="card shadow-sm">
                        <img class="bd-placeholder-img card-img-top" width="100%"  :src="product.image" alt="">
                        <div class="card-body">
                        <p class="card-text">{{ product.name }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <CartBTN :product="product"/>
                            </div>
                            <small class="text-muted"><i class="bi bi-currency-dollar"></i>{{ product.price }}</small>
                        </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
import CartBTN from '../components/CartBTN.vue'
export default {
    
    setup() {
       
    },
    components :{CartBTN},
    data(){
        return{
            products:[
                {id:1, name:'First phone',image:'http://localhost:5173/img/phone1.jpg', price:100},
                {id:2, name:'Second phone',image:'http://localhost:5173/img/phone2.jpg', price:150},
                {id:3, name:'Third phone',image:'http://localhost:5173/img/phone3.jpg', price:180},
            ]
        }
    }
  
}
</script>