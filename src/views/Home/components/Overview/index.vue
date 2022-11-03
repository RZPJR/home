<template>
    <div class="ma12 wp100" v-privilege="'sls_dash_rd'">
        <v-row>
            <v-col cols="12" md="4">
                <div class="box-col24">
                <v-row class="text-secondary" v-if="!overview.isLoading">
                    <v-col cols="12" md="10"> Transaction </v-col>
                    <v-col cols="12" md="2" class="flex-align-end">
                    <img
                        src="@/../public/icon/buy.svg"
                        alt="icon buy"
                        height="26px"
                        width="26px"
                    />
                    </v-col>
                </v-row>
                <v-row v-if="!overview.isLoading">
                    <v-col class="flex-align-end fs24 bold">
                    {{ formatNumberTransaction(overview.total_transaction) }}
                    </v-col>
                </v-row>
                <v-card>
                    <v-progress-linear
                    v-if="overview.isLoading"
                    indeterminate
                    color="#50ABA3"
                    ></v-progress-linear>
                </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="box-col24">
                <v-row class="text-secondary" v-if="!overview.isLoading">
                    <v-col cols="12" md="10"> Total Price (Rp) </v-col>
                    <v-col cols="12" md="2" class="flex-align-end">
                    <img
                        src="@/../public/icon/subtract.svg"
                        alt="icon subtract"
                        height="26px"
                        width="26px"
                    />
                    </v-col>
                </v-row>
                <v-row v-if="!overview.isLoading">
                    <v-col class="flex-align-end fs24 bold">
                    {{ formatPrice(overview.total_charge) }}
                    </v-col>
                </v-row>
                <v-card>
                    <v-progress-linear
                    v-if="overview.isLoading"
                    indeterminate
                    color="#50ABA3"
                    ></v-progress-linear>
                </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="box-col24">
                <v-row class="text-secondary" v-if="!overview.isLoading">
                    <v-col cols="12" md="10"> Tonnage (Kg) </v-col>
                    <v-col cols="12" md="2" class="flex-align-end">
                    <img
                        src="@/../public/icon/weight.svg"
                        alt="icon weight"
                        height="26px"
                        width="26px"
                    />
                    </v-col>
                </v-row>
                <v-row v-if="!overview.isLoading">
                    <v-col class="flex-align-end fs24 bold">
                    {{ formatNumber(overview.total_weight) }}
                    </v-col>
                </v-row>
                <v-card>
                    <v-progress-linear
                    v-if="overview.isLoading"
                    indeterminate
                    color="#50ABA3"
                    ></v-progress-linear>
                </v-card>
                </div>
            </v-col>
        </v-row>
    </div>  
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "Overview",
        data() {
            return {
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
            formatNumber(value) {
                let val = (value / 1).toFixed(2).replace(".", ".");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            formatNumberTransaction(value) {
                let val = (value / 1).toFixed(0).replace(".", ".");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
        }
    }
</script>