# Hackathon s 14 

### ¿porque usar un framework?

Un framework es nada más que una herramienta que facilita el desarrollo de nuestras web apps. En resumen, usamos frameworks de Javascript ya que nos ayudan a programar de forma más rápida y sencilla.

Los frameworks nos ayudan de varias maneras. Una de estas maneras en la que nos ayuda un framework es a programar de manera más eficiente ya que se reduce la cantidad de código que se tiene que escribir para implementar una funcionalidad.

Otra manera en la que nos ayudan es al obligarnos a usar buenas prácticas y/o flujos de trabajo específicos (IE, Opinionated Frameworks) que sirven para construir programas modulares y mantenibles que se adecuan a principos del desarrollo como DRY, KISS, YAGNI, etc 

### Beneficios e usar un framework

Para el caso en particula del Vue.js, los beneficios que nos brinda son los siguientes:  

* Renderizar data de forma declarativa al DOM. Esto quiere decir que usando una sintaxis bien sencilla podemos mandar data al DOM desde el HTML sin usar Vanilla JS
* Renderizar los elementos HTML usando directivas. Esto nos permite utilizar loops y condicionales en el HTML
* Obtener datos del usuario de forma sencilla haciendo uso de directivas
* Implementar Event Listeners usando directivas en los tags HTML, sin tener que añadirlos con vanilla JS
* Implementar componentes reutilizables via Vue.component() 
* Crear interfaces reactivas que cambian en tiempo real a medida que el usuario ingresa datos 

### Problemas de no usar un framework

Si bien es cierto no todos los proyectos necesitan de un framework JS, nos podemos perder de los beneficios de no usar las herramientas adecuadas. En particular:

* Se perdería bastante tiempo implementado funcionalidades en vanilla JS que los frameworks ya nos proporcionan (Por ejemplo, las directivas de Vue.js)
* El tamaño de nuestro código aumentaría
* El código resultante sería más dificil de mantener