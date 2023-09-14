
console.log(process.cwd());

console.log(process.pid);

const argv = process.argv.slice(2);
console.log(argv);

const PORT = argv[0];
const URL_MONGO = argv[1];

console.log({ PORT, URL_MONGO });