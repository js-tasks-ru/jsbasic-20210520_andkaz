let calculator = {
  read: function (a, b) {
    this.a = +prompt('first number', '')
    this.b = +prompt('second number', '')    
   }
   
 }
 
 
 calculator.read()
 
 function mul () {
   return this.a * this.b
 }
 
 calculator.mul = mul 
 
 
 function sum () {
   return this.a + this.b
 }
 
 calculator.sum = sum


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
