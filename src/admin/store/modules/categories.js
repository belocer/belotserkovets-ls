export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories)
  },
  actions: {
    async create(store, title) {

      try {
        const response = await this.$axios.post('/categories', { title });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async fetch({commit}) {

      try {
        const { data } = await this.$axios.get('/categories/1');
        commit("SET_CATEGORIES", data)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  }
}