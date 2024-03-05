<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody v-for="contact in contacts" :key="contact.id">
                <tr class="table-secondary">
                    <th scope="row">{{ contact.id }}</th>
                    <th scope="row">{{ contact.name }}</th>
                    <th scope="row">{{ contact.email }}</th>
                    <th scope="row">{{ contact.designation }}</th>
                    <th scope="row">{{ contact.contact_no }}</th>
                    <th scope="row">
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'EditContact', params: {id: contact.id} }">
                            Edit
                        </router-link>
                    </th>
                    <th scope="row">
                        <button class="alert alert-danger btn-sm" @click.prevent="deleteContact(contact.id)">
                            Delete
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactList',
    data() {
        return {
            contacts: Array
        }
    },
    created() {
        this.getContacts();
    },
    methods: {
        async getContacts() {
            let url = 'http://127.0.0.1:8000/api/contacts';
            await axios.get(url).then(response => {
                this.contacts = response.data.contacts;
                console.log(this.contacts);
            }).catch(error => {
                console.log(error);
            });
        },

        // async getContacts() {
        //     let url = 'http://127.0.0.1:8000/api/contacts';
        //     try {
        //         const response = await fetch(url);
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const data = await response.json();
        //         this.contacts = data.contacts;
        //         console.log(this.contacts);
        //     } catch (error) {
        //         console.log('Fetch error:', error);
        //     }
        // }

        async deleteContact(id) {
            let url = `http://127.0.0.1:8000/api/delete_contact/${id}`;
            await axios.delete(url).then(response => {
                if (response.status == 200) {
                    alert(response.data.message);
                    this.getContacts();
                }
            }).catch(error => {
                console.log(error);
            });
        }

        // async deleteContact(id) {
        //     let url = `http://127.0.0.1:8000/api/delete_contact/${id}`;
            
        //     try {
        //         const response = await fetch(url, {
        //             method: 'DELETE'
        //         });

        //         if (response.status === 200) {
        //             const responseData = await response.json();
        //             alert(responseData.message);
        //             this.getContacts();
        //         }
        //     } catch (error) {
        //         console.log('Fetch error:', error);
        //     }
        // }

    },
    mounted() {
        console.log('Contact List Component mounted');
    }
}
</script>

<style>

</style>