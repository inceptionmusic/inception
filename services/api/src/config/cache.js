import Cache from 'node-cache'

const cache = new Cache({
  stdTTL: 60 * 60 * 24,
  checkperiod: 60 * 60 * 24 * 0.2,
  useClones: false,
})

export default cache
