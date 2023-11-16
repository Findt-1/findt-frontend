const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

let window;
let document;
let { addItem, searchItem } = require('./functions.js');

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  window = dom.window;
  document = window.document;

  window.addItem = addItem;
  window.searchItem = searchItem;
});

test('Adicionar um item', () => {
  const itemInput = document.getElementById('item');
  const addButton = document.querySelector('.findt__add');
  const itemList = document.getElementById('itemList');

  itemInput.value = 'Test Item';
  addButton.click();

  expect(itemList.innerHTML).toContain('Test Item');
});

test('Mostrar os itens', () => {
  const searchInput = document.getElementById('searchItem');
  const searchButton = document.querySelector('.findt__show');
  const itemList = document.getElementById('itemList');

  searchInput.value = 'Test Item';
  searchButton.click();

  expect(itemList.innerHTML).toContain('Test Item');
});
