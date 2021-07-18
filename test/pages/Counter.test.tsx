import { render } from '../testUtils'
import "@testing-library/jest-dom/extend-expect";
import Counter from "../../components/Counter";

test("Check for Getting Started Text", () => {
    const Element = render(<Counter />);
    const button = Element.getByText(/Add/i)
    const h1 = Element.getByText(/Count/i)
    
    
    Element.debug(h1)
    expect(h1.textContent).toContain("Count: 0")
    button.click()
    expect(h1.textContent).toContain("Count: 1")
    Element.debug(h1)
    expect(button).toBeInTheDocument();
});
