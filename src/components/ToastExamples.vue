<template>
    <button type="button" @click="showToatWarning()" class="btn btn-warning">warning</button>
    <button type="button" @click="showToatSuccess()" class="btn btn-success">success</button>
    <button type="button" @click="showToatInfo()" class="btn btn-info">info</button>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    methods:{
        showToatWarning(){
            toast.warning('Wow warning!',{
                autoClose: 1000,
            });   
        },
        showToatSuccess(){
            toast.success('Wow success!',{
                autoClose: 1000,
            });   
        },
        showToatInfo(){
            toast.info('Wow info!',{
                autoClose: 1000,
            });   
        }
    }
}
</script>