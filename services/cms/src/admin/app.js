const locales = [
  // 'ar',
  // 'fr',
  // 'cs',
  // 'de',
  // 'dk',
  // 'es',
  // 'he',
  // 'id',
  // 'it',
  // 'ja',
  // 'ko',
  // 'ms',
  // 'nl',
  // 'no',
  // 'pl',
  // 'pt-BR',
  // 'pt',
  // 'ru',
  // 'sk',
  // 'sv',
  // 'th',
  // 'tr',
  // 'uk',
  // 'vi',
  // 'zh-Hans',
  // 'zh',
]

export default {
  config: {
    locales,
    tutorials: false,
    notifications: {
      releases: false,
    },
  },
  bootstrap: (app) => {
    console.log(app)
  },
}
