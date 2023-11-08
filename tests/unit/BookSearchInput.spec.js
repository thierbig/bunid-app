import { shallowMount } from "@vue/test-utils";
import BookSearchInput from "@/components/BookSearchInput.vue";

describe("BookSearchInput.vue", () => {
  it("emits an input event when search button is clicked", async () => {
    const wrapper = shallowMount(BookSearchInput);
    const inputText = "Harry Potter";
    await wrapper.setData({ internalQuery: inputText });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([inputText]);
  });

  it("emits a search event when search button is clicked", async () => {
    const wrapper = shallowMount(BookSearchInput);
    await wrapper.setData({ internalQuery: "Harry Potter" });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().search).toBeTruthy();
  });
});
