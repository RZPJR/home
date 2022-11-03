<template>
    <div class="box-body-table" v-privilege="'sls_dash_rd'">
        <v-data-table
            :headers="table.fields"
            :mobile-breakpoint="0"
            :items="overview.top_revenue"
            :loading="overview.isLoading"
            :items-per-page="5"
        >
            <template v-slot:item="props">
                <tr style="height: 48px">
                <td>{{ props.item.name }}</td>
                <td>{{ formatPrice(props.item.total) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>  
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "TopProducts",
        data() {
            return {                
                table: {
                    fields: [
                        {
                            text: "Product Name",
                            class: "grey--text text--darken-4",
                            sortable: false
                        },
                        {
                            text: "Product Revenue",
                            class: "grey--text text--darken-4",
                            sortable: false
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapState({
                overview: state => state.home.overview,
            }),
        },
        methods: {            
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace(".", ",");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
        }
    }
</script>