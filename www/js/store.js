const createStore = Framework7.createStore;
const store = createStore({
  state: {
    // 翻訳履歴一覧が入る
    translations: [
    ]
  },
  getters: {
    // 翻訳履歴一覧のゲッター
    translations({ state }) {
      return state.translations;
    }
  },
  actions: {
    // 翻訳履歴の追加用（一件）
    addTranslate({ state }, translation) {
      state.translations = [...state.translations, translation];
    },
    // 翻訳履歴の追加用（一括）
    addTranslates({ state }, translations) {
      state.translations = [...state.translations, ...translations];
    },
  },
})
