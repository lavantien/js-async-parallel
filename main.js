import { Worker } from 'worker_threads'

const n = 1000000
const numberOfWorkers = 16

const doFib = async (n) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()
    const data = BigInt(n)

    const worker = new Worker('./fib.js', {
      workerData: {
        data,
      },
    })

    worker.once('message', (message) => {
      console.log(
        `worker [${worker.threadId}] took ${Date.now() - startTime}ms`,
      )
      resolve(message)
    })
    worker.once('error', (error) => {
      reject(error)
    })
  })
}

const main = async () => {
  try {
    const actions = []
    for (let i = 0; i < numberOfWorkers; i++) {
      actions.push(doFib(n))
    }
    const startTime = Date.now()
    const values = await Promise.all(actions)
    const digitsCount = values.map((value) => value.toString().length)
    console.log('values: ', digitsCount)
    console.log(`all took ${Date.now() - startTime}ms`)
  } catch (err) {
    console.error(err)
  }
}
main().catch(console.error)
