import { shallowMount } from "@vue/test-utils";
import BookList from "@/components/BookList.vue";

describe("BookList.vue", () => {
  it("renders a message if no books are found and a search was made", () => {
    const wrapper = shallowMount(BookList, {
      propsData: {
        books: [],
        searchMade: true,
      },
    });
    expect(wrapper.text()).toContain("No books found.");
  });

  it("renders a message if no search has been made", () => {
    const wrapper = shallowMount(BookList, {
      propsData: {
        books: [],
        searchMade: false,
      },
    });
    expect(wrapper.text()).toContain(
      "Please enter a search term to find books."
    );
  });

  it("renders book items when passed", () => {
    const books = [
      // Mocked book data structure based on your API response
      {
        id: "1",
        volumeInfo: {
          title: "Test Book Title",
          authors: ["Author One", "Author Two"],
          imageLinks: { thumbnail: "http://example.com/thumbnail.jpg" },
          description: "Test Description",
        },
        saleInfo: {
          listPrice: { amount: 19.99, currencyCode: "USD" },
          buyLink: "http://example.com/buy",
        },
      },
    ];
    const wrapper = shallowMount(BookList, {
      propsData: {
        books: books,
        searchMade: true,
      },
    });
    expect(wrapper.text()).toContain(books[0].volumeInfo.title);
    expect(wrapper.find("img").attributes("src")).toBe(
      books[0].volumeInfo.imageLinks.thumbnail
    );
  });
});
