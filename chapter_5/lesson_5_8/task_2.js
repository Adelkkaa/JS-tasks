// Есть массив сообщений такой же, как и в предыдущем задании.

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// Для этой задачи лучше использовать WeakMap
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

const dateOfMessage = new WeakMap();

dateOfMessage.set(messages[2], new Date());

console.log(dateOfMessage);
