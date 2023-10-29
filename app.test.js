const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

let window;
let document;

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  window = dom.window;
  document = window.document;
});

test('Adding an item', () => {
  const itemInput = document.getElementById('item');
  const addButton = document.querySelector('.search__add button');
  const itemList = document.getElementById('itemList');

  // Simulate user input and click event
  itemInput.value = 'Test Item';
  addButton.click();

  // Verify that the item is added to the list
  expect(itemList.innerHTML).toContain('Test Item');
});

test('Buscar objeto', () => {
  const searchInput = document.getElementById('searchItem');
  const searchButton = document.querySelector('.search__input button');
  const itemList = document.getElementById('itemList');

  // Simulate user input and click event
  searchInput.value = 'Test Item';
  searchButton.click();

  // Verify that the list only shows items that match the search query
  expect(itemList.innerHTML).toContain('Test Item');
});
