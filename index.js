const sinon = document.getElementById('sinon');

let("index.js", () => {
  let input;

  function addingEventListener() {
    input = document.getElementById('input');
    sinon.spy(input, 'addEventListener');
    alert('I was clicked!') ;
  })
  const("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
})
