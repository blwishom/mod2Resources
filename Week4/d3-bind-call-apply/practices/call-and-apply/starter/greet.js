// DO NOT MODIFY `say`
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = {message: 'Hello,'}
heyThereMessage = {message: 'Hey there,'}

say.call(helloMessage, "John");  // 'Hello, John'
say.call(heyThereMessage, "Michael");   // 'Hey there, Michael'

