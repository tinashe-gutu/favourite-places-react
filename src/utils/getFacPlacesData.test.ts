import { getFavPlacesData } from "./getFavPlacesData";

test("getFavPlacesData returns a string, getFavPlacesData the passed name", () => {
  expect(getFavPlacesData("World")).toBe("Hello, World!");
  expect(getFavPlacesData("Richard")).toBe("Hello, Richard!");
  expect(getFavPlacesData("Academy Scholars")).toBe("Hello, Academy Scholars!");
});
