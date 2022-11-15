<template>
    <div class="box" v-privilege="'sls_dash_rd'">
        <!-- Filter -->
        <v-row>
            <v-col cols="12" md="5">
                <div class="fs16 bold">
                    Sales Summary
                <v-tooltip right>
                    <template v-slot:activator="{ on: tooltip }">
                    <v-icon v-on="{ ...tooltip }" dark right>
                        mdi-information-outline
                    </v-icon>
                    </template>
                    <span>Sales of the month</span>
                </v-tooltip>
                </div>
                <div class="fs14">
                    {{ selectedDate == null ? currentDate : selectedDate }}
                </div>
            </v-col>
            <v-col cols="12" md="3" class="h80">
                <v-select
                    v-model="months"
                    outlined
                    label="Months"
                    dense
                    :items="monthsItems"
                    v-privilege="'sls_dash_fil'"
                    clearable
                ></v-select>
            </v-col>
            <v-col cols="12" md="3" class="h80">
                <v-select
                    v-model="years"
                    outlined
                    label="Years"
                    dense
                    :items="yearsItems"
                    v-privilege="'sls_dash_fil'"
                    clearable
                ></v-select>
            </v-col>
            <v-col cols="12" md="1">
                <button
                    :disabled="searchDisable"
                    @click="search"
                    class="btn-search-home"
                >
                    <v-icon color="white"> search </v-icon>
                </button>
            </v-col>
        </v-row>
        <v-row class="hr-title" />
        <!-- Graph -->
        <v-row>
            <v-col cols="12" md="12">
                <v-card>
                    <v-progress-linear
                        v-if="graph.isLoading"
                        indeterminate
                        color="#50ABA3"
                    ></v-progress-linear>
                </v-card>
                <LineChart
                    class="pt-3"
                    v-if="!graph.isLoading"
                    :chartData="graph"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import LineChart from "@/components/LineChart.vue";

    export default {
        components: { LineChart },
        name: 'Graph',
        data() {
            return {
                months: null,
                monthsItems: [],
                years: null,
                yearsItems: [],
            }
        },
        computed: {
            ...mapState({
                graph: state => state.home.graph,
                priv: state => state.home.priv,
                selectedDate: state => state.home.selectedDate,
                currentDate: state => state.home.currentDate,
            }),
            searchDisable() {
                return !(this.months && this.years);
            },
        },
        methods: {
            ...mapActions([
                "fetchGraph",
                "fetchOverview"
            ]),
            ...mapMutations([
                "setSelectedDate",
                "setCurrentDate"
            ]),
            async search() { // Get Sales Summary
                if (this.priv.includes("sls_dash_rd")) {
                    const dates = this.months + "-" + this.years;
                    this.$store.commit('setSelectedDate', this.monthsItems[this.months - 1].text + " " + this.years)
                    this.fetchOverview(dates);
                    this.fetchGraph(dates);
                }
            },
            getOptionDate() { // get total months and year
                const today = new Date();
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                for (let i = 0; i < 12; i++) {
                    this.monthsItems.push({
                        text: monthNames[i],
                        value: i + 1
                    });
                }
                const y = today.getFullYear();
                for (let i = 2019; i <= y; i++) {
                    this.yearsItems.push({ text: String(i), value: i });
                }
            },
            dateNow() { // Get today date
                const today = new Date();
                const y = today.getFullYear();
                const m = today.toLocaleString("default", { month: "long" });
                this.$store.commit('setCurrentDate', m + " " + y)
                this.months = today.getMonth() + 1;
                this.years = y;
                this.search();
            },
        },
        mounted() {
            this.getOptionDate();
            this.dateNow();
        },
    }
</script>