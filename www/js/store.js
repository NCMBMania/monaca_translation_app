const createStore = Framework7.createStore;
const store = createStore({
  state: {
    translations: [
    ]
  },
  getters: {
    translations({ state }) {
      return state.translations;
    }
  },
  actions: {
    addTranslate({ state }, translation) {
      state.translations = [...state.translations, translation];
    },
  },
})

