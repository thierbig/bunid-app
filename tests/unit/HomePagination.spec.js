import { shallowMount } from "@vue/test-utils";
import HomePagination from "@/components/HomePagination.vue";

describe("HomePagination.vue", () => {
  it("disables the previous button on the first page", () => {
    const wrapper = shallowMount(HomePagination, {
      propsData: {
        currentPage: 1,
        pageCount: 10,
        totalResults: 100,
        searchMade: true,
      },
    });
    const prevButton = wrapper.find(".pagination-previous");
    expect(prevButton.exists()).toBe(true);
    expect(prevButton.attributes("disabled")).toBe("disabled");
  });

  it("renders the next button when currentPage is less than pageCount", () => {
    const wrapper = shallowMount(HomePagination, {
      propsData: {
        currentPage: 1,
        pageCount: 10,
        totalResults: 100,
        searchMade: true,
      },
    });
    expect(wrapper.find(".pagination-next").exists()).toBe(true);
  });

  it("does not render the next button on the last page", () => {
    const wrapper = shallowMount(HomePagination, {
      propsData: {
        currentPage: 10,
        pageCount: 10,
        totalResults: 100,
        searchMade: true,
      },
    });
    expect(wrapper.find(".pagination-next").exists()).toBe(false);
  });

  it("emits update:currentPage with the previous page when the previous button is clicked", async () => {
    const wrapper = shallowMount(HomePagination, {
      propsData: {
        currentPage: 2,
        pageCount: 10,
        totalResults: 100,
        searchMade: true,
      },
    });
    await wrapper.find(".pagination-previous").trigger("click");
    expect(wrapper.emitted()["update:currentPage"]).toBeTruthy();
    expect(wrapper.emitted()["update:currentPage"][0]).toEqual([1]);
  });

  it("emits update:currentPage with the next page when the next button is clicked", async () => {
    const wrapper = shallowMount(HomePagination, {
      propsData: {
        currentPage: 1,
        pageCount: 10,
        totalResults: 100,
        searchMade: true,
      },
    });
    await wrapper.find(".pagination-next").trigger("click");
    expect(wrapper.emitted()["update:currentPage"]).toBeTruthy();
    expect(wrapper.emitted()["update:currentPage"][0]).toEqual([2]);
  });
});
