const mutations = {
  setPreloadOverview: function(state, payload) {
    state.overview.isLoading = payload;
    return state;
  },
  setTopRevenue: function(state, payload) {
    state.overview.top_revenue = payload;
    return state;
  },
  setTotalTransaction: function(state, payload) {
    state.overview.total_transaction = payload;
    return state;
  },
  setTotalCharge: function(state, payload) {
    state.overview.total_charge = payload;
    return state;
  },
  setTotalWeight: function(state, payload) {
    state.overview.total_weight = payload;
    return state;
  },
  setPreloadGraph: function(state, payload) {
    state.graph.isLoading = payload;
    return state;
  },
  setGraphLabel: function(state, payload) {
    state.graph.labels = payload;
    return state;
  },
  setGraphDataSet: function(state, payload) {
    state.graph.datasets = payload;
    return state;
  },
  setSelectedDate: function(state, payload) {
    state.selectedDate = payload;
    return state;
  },
  setCurrentDate: function(state, payload) {
    state.currentDate = payload;
    return state;
  },
  setStaffName: function(state, payload) {
    state.staff_name = payload;
    return state;
  }
};

export default mutations;
