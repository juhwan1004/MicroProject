// .btn-modal 버튼 onclick하면 div.modal_window 생성하기

// 참조할 element 찾기
var btn_create_modal = document.querySelector('.btn-modal');
btn_create_modal.onclick = function() {
  createModal();
  createDim();
  // var btn_input = document.querySelector('.btn_todo_input');
  var modal = document.querySelector('.modal-window');
  if (modal.hasChildNodes()) {
    // modal-window 팝업 시 innput-todo-text 요소에 focus
    var input_focus = document.querySelector('#input-todo-text');
    input_focus.focus();

    var btn_input = document.querySelector('.btn-todo-input');
    btn_input.onclick = function() {
      var input_text = document.querySelector('#input-todo-text');
      var btn_todo_input = document.querySelector('.btn-todo-input');
      var todo_list = document.querySelector('.todo-list');

      if (input_text.value) {
        var item = document.createElement('li');
        var item_text_node = document.createTextNode(input_text.value);
        item.appendChild(item_text_node);
        todo_list.appendChild(item);
        input_text.value = '';
        input_text.focus();
      }
    }
    var btn_close = document.querySelector('.btn-close-modal');
    var dim = document.querySelector('.modal-dim');
    btn_close.onclick = function() {
      modal.remove();
      dim.remove();
    }
  }
}

// var btn_close_modal = document.querySelector('.btn-close-modal');
// btn_close_modal.onclick = closeModal;

function createModal() {
  // div.modal_window 생성
  var modal_window = document.createElement('div');
  modal_window.setAttribute('class', 'modal-window');
  console.log(modal_window);

  // div.input-group 생성
  var input_group = document.createElement('form');
  input_group.setAttribute('class', 'input-group');

  // label 생성
  var input_label = document.createElement('label');
  var input_label_text = document.createTextNode('할 일 입력');
  input_label.appendChild(input_label_text);
  input_label.setAttribute('for', 'input-todo-text');
  input_label.setAttribute('class', 'readable-hidden');

  // input.input-todo-text 생성
  var input_todo_text = document.createElement('input');
  input_todo_text.setAttribute('type', 'text');
  input_todo_text.setAttribute('id', 'input-todo-text');
  input_todo_text.setAttribute('placeholder', 'To do...');
  input_todo_text.setAttribute('required', 'required');

  // button.btn-todo-input 생성
  var btn_todo_input = document.createElement('button');
  btn_todo_input.setAttribute('type', 'submit');
  btn_todo_input.setAttribute('class', 'btn-todo-input');
  btn_todo_input.nodeValue = "OK";
  // .btn-todo-input의 Text 생성/삽입
  var btn_todo_input_text = document.createTextNode('OK');
  btn_todo_input.appendChild(btn_todo_input_text);

  // input-group에 input,button 요소 삽입
  input_group.appendChild(input_label);
  input_group.appendChild(input_todo_text);
  input_group.appendChild(btn_todo_input);

  // ol 생성
  var todo_list = document.createElement('ol');
  todo_list.setAttribute('class', 'todo-list');

  // button.btn-close-modal 생성
  var close_modal = document.createElement('button');
  close_modal.setAttribute('class', 'btn-close-modal');
  close_modal.setAttribute('aria-label', '닫기 버튼');
  // .btn-close-modal text 생성/삽입
  var close_modal_text = document.createTextNode('X');
  close_modal.appendChild(close_modal_text);

  // modal-window에 input-group, ol, btn-close-modal element 삽입
  modal_window.appendChild(input_group);
  modal_window.appendChild(todo_list);
  modal_window.appendChild(close_modal);

  // body에 modal_window 삽입
  document.body.appendChild(modal_window);

}

function createDim() {
  var dim = document.createElement('div');
  dim.setAttribute('class', 'modal-dim');
  document.body.appendChild(dim);
}
