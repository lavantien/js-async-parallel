import { workerData, parentPort } from 'worker_threads'

function fib(x) {
  if (x < 1n) {
    return 0n
  }
  if (x <= 2n) {
    return 1n
  }
  let a = 1n
  let b = 1n
  let c = 0n
  for (let i = 3n; i <= x; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

const result = fib(workerData.data)

parentPort.postMessage(result)
