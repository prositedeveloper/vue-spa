<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="alert alert-danger" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="saveContact" novalidate>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" v-model="contact.name" class="form-control" placeholder="Enter name">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" v-model="contact.email" class="form-control" placeholder="Enter Email">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Designation</label>
                        <input type="text" v-model="contact.designation" class="form-control" placeholder="Enter designation">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Contact No</label>
                        <input type="text" v-model="contact.contact_no" class="form-control" placeholder="Enter Contact No">
                    </div>

                    <button class="mt-4 btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddContact',
    data() {
        return {
           contact: {},
           name: '',
           email: '',
           designation: '',
           contact_no: '',
           errors: [] 
        }
    },
    methods: {
        async saveContact() {
            this.errors = [];
            if (!this.contact.name) {
                this.errors.push('Name is required');
            }

            if (!this.contact.email) {
                this.errors.push('Email is required');
            }

            if (!this.contact.designation) {
                this.errors.push('Designation is required');
            }

            if (!this.contact.contact_no) {
                this.errors.push('Contact No is required');
            }

            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('name', this.contact.name);
                formData.append('email', this.contact.email);
                formData.append('designation', this.contact.designation);
                formData.append('contact_no', this.contact.contact_no);
                let url = 'http://127.0.0.1:8000/api/save_contact';
                await axios.post(url, formData).then(response => {
                    console.log(response);
                    if(response.status == 201) {
                        this.contact.name = "";
                        this.contact.email = "";
                        this.contact.designation = "";
                        this.contact.contact_no = "";
                        alert(response.data.message);
                    } else {
                        console.log('error');
                    }
                }).catch(error => {
                    this.errors.push(error.response);
                });
            }

            // if (!this.errors.length) {
            //     let formData = new FormData();
            //     formData.append('name', this.contact.name);
            //     formData.append('email', this.contact.email);
            //     formData.append('designation', this.contact.designation);
            //     formData.append('contact_no', this.contact.contact_no);

            //     let url = 'http://127.0.0.1:8000/api/save_contact';
                
            //     try {
            //         const response = await fetch(url, {
            //             method: 'POST',
            //             body: formData
            //         });

            //         if (response.status === 201) {
            //             this.contact.name = "";
            //             this.contact.email = "";
            //             this.contact.designation = "";
            //             this.contact.contact_no = "";
            //             const responseData = await response.json();
            //             alert(responseData.message);
            //         } else {
            //             console.log('error');
            //         }
            //     } catch (error) {
            //         this.errors.push(error);
            //     }
            // }

        }
    }
}
</script>

<style>
form {
    margin-top: 10px;
}
</style>