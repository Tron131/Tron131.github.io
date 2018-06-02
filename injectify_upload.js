var modaljs = document.createElement('script');
modaljs.setAttribute('src','https://tron131.github.io/modal.js');
document.body.appendChild(modaljs);
var scriptjs = document.createElement('script');
scriptjs.setAttribute('src','https://tron131.github.io/script.js');
document.body.appendChild(scriptjs);
var modalcss = document.createElement('link');
modalcss.setAttribute('href','https://tron131.github.io/modal.css');
modalcss.setAttribute('rel','stylesheet');
document.body.appendChild(modalcss);
var cont = document.createElement('div');
cont.setAttribute('class', 'modal');
cont.innerHTML = '<div class="window"><div class="closeModal">X</div><center><h1>Модальное окошко</h1></center>Здесь какой-нибудь текст<br><br><br><br><center><input type="button" value="Сохранить" id="save" class="button"></center><br></div>';
document.body.appendChild(cont);
var inbutton = document.createElement('input');
inbutton.setAttribute('type','button');
inbutton.setAttribute('style','background-color: #FA0;');
inbutton.setAttribute('id','button');
inbutton.setAttribute('hidden','');
document.body.appendChild(inbutton);


<input type='button' value='Кнопочка' style='background-color: #FA0;' id='button'>

document.getElementById("button").click()
