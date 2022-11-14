async function init() {
  document.title = "";

  let titles = [
    "Hello, World!",
    "addidix.xyz",
    "ADDIDIX",
    "addidix",
  ]

  while (true) {
    for (let title of titles) {
      await type(title);
      await sleep(1000);
      await untype(title);
    }
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function type(text) {
  for (let character of text) {
    document.title += character;
    await sleep(100);
  }
}

async function untype(text) {
  for (let character of text) {
    document.title = document.title.slice(0, document.title.length - 1);
    await sleep(100);
  }
}

init();
