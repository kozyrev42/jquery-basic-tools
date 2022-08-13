// Работа с атрибутами HTML тегов
// .attr() - в зависимости от количества параметров он будет считывать или изменять значение атрибута.
// Первым параметром .attr() принимает имя атрибута, а вторым - его новое значение
$('#xxx').attr('class', 'blue');  // red -> blue

// Если же вызывать .attr() с одним параметром, то он вернет значения атрибута
// console.log($('#xxx').attr('class'));


// Удаление атрибута
// Если вы хотите удалить какой-нибудь атрибут совсем, для этого следует использовать метод .removeAttr(имя атрибута)
// $('#test-form').removeAttr('value')
// console.log($('#test-form').attr('value'));


// атрибутов типа 'disabled' и 'checked'
// Для них необходимо использовать метод .prop(), который первым параметром принимает имя атрибута, а вторым - true или false.
// сделаем input неработаспособным->disabled->true
//$('#test').prop('disabled', true);

// можно также читать значения атрибутов
// console.log($('#test').prop('disabled')); // false OR true


// Работа с классами
// в атрибуте class в HTML коде можно писать несколько классов через пробел
// добавить новый класс к имеющимся
$('#bbb').addClass('big-font');

// Аналогичный метод существует и для удаления класса - .removeClass(). 
// Он удаляет указанный в параметре класс, не затрагивая остальных.
//$('#bbb').removeClass('red');

// Существует также полезный метод .toggleClass(), 
// который будет добавлять указанный класс, если его нет, и убирать его если он есть.
// при клике, будет отрабатывать функция
$('#bbb').click(function() {
	$('#bbb').toggleClass('red');
});

// .hasClass(). Он проверяет наличие или отсутствие класса, переданного ему параметром.
//  Если такой класс есть у элемента - выведет true, а если такого класса нет - выведет false.
$('#bbb').click(function() {
	console.log("класс red " + $('#bbb').hasClass('red'));
});


