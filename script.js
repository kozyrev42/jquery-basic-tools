//  Работа с библиотекой jQuery осуществляется с помощью универсальной функции $() 

// После доллара следует писать круглые скобки (это же функция), в которых указываются параметры (обычно один параметр),
//  примерно вот так: $(параметр).
// Чаще всего с помощью доллара $ получают группу HTML элементов по CSS селектору.

// в переменной получим html тег, с селектором class="xxx"
// var elems_class = $('.xxx').html();

// в переменной получим html тег, с селектором class="xxx"
// var elems_id = $('#xxx').html();

// К примеру, вот так мы получим все элементы с классом .xxx и поставим им красный цвет:
// $('.xxx').css('color', 'red');


// Почти все методы jQuery возвращают набор, к которому этот метод был применен,
//  что позволяет выстраивать цепочки методов любой длины.
// Давайте получим все элементы с классом .xxx, поставим им красный цвет, и сменим их текст на 'новый текст':
// обратился к селектору.установил цвет.установил новый текст
// !!! Длина цепочек не ограничена - вы можете применять подряд столько методов, сколько вам нужно.
// текст и цвет изменится у всех элементов на странице
// $('.xxx').css('color', 'green').html('новый_текст!');

// можно записать набор элементов в переменную, а потом изменить их свойства и текст
// названия $переменных, которые содержат в себе обернутый набор jQuery, принято начинать с доллара $
let $elems = $('.xxx');
// $elems.css('color', 'red').html('новый_текст!!!');

// обратимся к элементу по id и выведем алертом
// let $elem = $('#xxx');
// alert($elem.html());

// выведет только значение одного контейнера
// let $elems = $('.xxx');
// alert($elems.html());

// .css()- Первым параметром метод принимает имя CSS свойства, а вторым - его новое значение.
$elems.css('background-color', 'blue')

//  Если вы хотите задать несколько CSS свойств, то для этого можно передать параметром в метод .css() объект,
// ключами которого будут CSS свойства, а значениями объекта - значения CSS свойств
// меняется синтаксис написания свойств! font-size -> fontSize -> или 'font-size'
$elems.css({color: '#ffffff', 'font-size': '24px'});