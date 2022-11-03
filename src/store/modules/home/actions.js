import axios from 'axios'
import http from "../../../services/http";

const actions = {
    fetchOverview: async ({ commit, dispatch }, payload) => {
        commit("setPreloadOverview", true);
        try {
            const response = await http.get("/dashboard/overview", {
                params: { date: payload }
            });
            const res = response.data.data;
            commit("setTopRevenue", res.top_revenue);
            commit("setTotalCharge", res.total_charge);
            commit("setTotalTransaction", res.total_transaction);
            commit("setTotalWeight", res.total_weight);
            commit("setPreloadOverview", false);
        } catch (error) {
            console.log(error);
            commit("setPreloadOverview", false);
        }
    },
    fetchGraph: async ({ commit, dispatch }, payload) => {
        commit("setPreloadGraph", true);
        try {
            const response = await http.get("/dashboard/graph", {
                params: { date: payload }
            });
            const res = response.data.data;
            let labels = [];
            let data_sets = [
            {
                label: "Total Price",
                fill: false,
                borderColor: "#8DC53F",
                borderWidth: 3,
                data: []
            }
            ];
            for (let i = 0; i < res.length; i++) {
            if (res.length > 0) {
                labels.push(res[i].day);
                data_sets[0].data.push(res[i].total_price);
            }
            }
            commit("setPreloadGraph", false);
            commit("setGraphLabel", labels);
            commit("setGraphDataSet", data_sets);
        } catch (error) {
            console.log(error);
            commit("setPreloadGraph", false);
        }
    },  
    checkMaintenance: async () => {
        try {
            let API_URL = process.env.VUE_APP_API_URL
            axios.get(API_URL + '/auth/checkmaintenance').then((response) => {
            return response
            })
        } catch (error) {
            console.log(error);
        }
    },
};

export default actions;
