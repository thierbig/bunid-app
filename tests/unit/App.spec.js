import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ items: [], totalItems: 50 }),
  })
);

beforeEach(() => {  
  fetch.mockClear();
});

jest.mock('@/components/BookSearchInput.vue', () => ({
  name: 'BookSearchInput',
  render: (h) => h('div'),
}));
jest.mock('@/components/BookList.vue', () => ({
  name: 'BookList',
  render: (h) => h('div'),
}));
jest.mock('@/components/HomePagination.vue', () => ({
  name: 'HomePagination',
  render: (h) => h('div'),
}));

describe('App.vue', () => {
  it('initializes with correct elements', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({ name: 'BookSearchInput' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'BookList' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'HomePagination' }).exists()).toBe(true);
  });
  
  it('calls fetchBooks and fetchTotalResults when searchBooks is called', async () => {
    const wrapper = shallowMount(App);
    const fetchBooksSpy = jest.spyOn(wrapper.vm, 'fetchBooks');
    const fetchTotalResultsSpy = jest.spyOn(wrapper.vm, 'fetchTotalResults');

    await wrapper.vm.searchBooks();

    expect(fetchBooksSpy).toHaveBeenCalled();
    expect(fetchTotalResultsSpy).toHaveBeenCalled();
    fetchBooksSpy.mockRestore();
    fetchTotalResultsSpy.mockRestore();
  });  
  it('updates currentPage and calls fetchBooks when changePage is called', async () => {
    const wrapper = shallowMount(App);
    const fetchBooksSpy = jest.spyOn(wrapper.vm, 'fetchBooks');
    wrapper.vm.changePage(2);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.currentPage).toBe(2);
    expect(fetchBooksSpy).toHaveBeenCalled();
    fetchBooksSpy.mockRestore();
  });
});
