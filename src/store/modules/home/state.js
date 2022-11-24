const state = {
  staff: localStorage.getItem("staff_name"),
  priv: localStorage.getItem("priv"),
  selectedDate: null,
  currentDate: null,
  staff_name: '',
  overview: {
    isLoading: false,
    total_transaction: "",
    total_charge: "",
    total_weight: "",
    top_revenue: []
  },
  graph: {
    isLoading: false,
    labels: [],
    datasets: []
  }
};

export default state;
