import console from 'console'

const KEY_WIDTH = 16
const VALUE_WIDTH = 24

export default {
  ...console,
  draw: async (input) => {
    if (!(input instanceof Array) && !input.toString) {
      throw new Error(
        'Invalid input: console.draw() only accepts an array, string or object with a toString() function'
      )
    }

    if (input instanceof Array && input.length === 0) return console.log()

    const text =
      input instanceof Array
        ? input
            .map(
              ([key, value]) =>
                `${
                  ' ' +
                  key.toString().padEnd(KEY_WIDTH) +
                  value.toString().padEnd(VALUE_WIDTH) +
                  ' '
                }`
            )
            .join('\n')
        : ' ' + input.toString().padEnd(KEY_WIDTH + VALUE_WIDTH) + ' '

    const { default: boxen } = await import('boxen')

    return console.log(
      boxen(text, {
        dimBorder: true,
        borderStyle: 'round',
      })
    )
  },
}
