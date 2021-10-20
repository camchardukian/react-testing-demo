import { shallow } from "enzyme";
import CounterSection from "../CounterSection";

describe("Counter Section", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterSection />);
  });
  test("Successfully renders the counter section title", () => {
    expect(wrapper.find(".counter-section-title").text()).toBe(
      "Counter Section"
    );
  });

  test("Successfully renders the increment button", () => {
    expect(wrapper.find(".increment-counter-btn").text()).toBe(
      "Click to Increment"
    );
  });

  test("The counter's initial value is set to 0", () => {
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  test("Clicking the increment button increments the counter value", () => {
    wrapper.find(".increment-counter-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
  });

  test("Clicking the decrement button decrements the counter value", () => {
    wrapper.find(".decrement-counter-btn").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("-1");
  });
});
