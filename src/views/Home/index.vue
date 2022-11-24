<template>
    <v-container fill-height class="main-container">
        <!-- Header -->
        <div class="box">
            <v-row>
            <v-col cols="12" md="1">
                <v-img width="64px" height="64px" :src="ava_user"></v-img>
            </v-col>
            <v-col cols="12" md="11" class="flex-justify-center fs20 bold">
                <!-- Welcome {{ staff }}! -->
                Welcome!
            </v-col>
            </v-row>
        </div>
        <!-- Filter & Graph
        <Graph />
        Overview
        <Overview />
        Table Title
        <div class="box-title bg-linier text-white" v-privilege="'sls_dash_rd'">
            <div class="fs16 bold">
                Top Products
                <v-tooltip right color="black">
                <template v-slot:activator="{ on: tooltip }">
                    <v-icon v-on="{ ...tooltip }" color="white" right>
                    mdi-information-outline
                    </v-icon>
                </template>
                <span>Product sold with highest revenue</span>
                </v-tooltip>
            </div>
            <div class="fs14">
                {{ selectedDate == null ? currentDate : selectedDate }}
            </div>
        </div>
        Top Product
        <TopProducts /> -->
    </v-container>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import { ImageAvaUser } from "@vue-mf/global";
    import Graph from './components/Graph'
    import Overview from './components/Overview'
    import TopProducts from './components/TopProducts'

    export default {
        components: { ImageAvaUser, Graph, Overview, TopProducts },
        name: "Home",
        data() {
            return {
                ava_user: "",
            }
        },
        computed: {
            ...mapState({
                staff: state => state.home.staff_name,
                selectedDate: state => state.home.selectedDate,
                currentDate: state => state.home.currentDate,
            }),
        },
        methods: {
            ...mapActions([
                "checkMaintenance",
                "fetchStaff"
            ]),
        },
        mounted() {
            // this.checkMaintenance();
            // this.fetchStaff()
        },
        created() {
            this.ava_user = ImageAvaUser
        },
    }
</script>