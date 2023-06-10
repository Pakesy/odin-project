import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Helper function to click a series of buttons with specific names
const clickButtons = (buttonNames) => {
    buttonNames.forEach(name => {
        fireEvent.click(screen.getByRole("button", {name}));
    });
};

// Helper function to check calculator output
const expectOutputToBe = (value) => {
    expect(screen.getByTestId("output")).toHaveTextContent(value);
};

describe("Test calculator app.", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("Renders calculator", () => {
        expectOutputToBe("0");

        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(19);

        const buttonNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "AC", "C", "%", "/", "+", "-", "=", "*", "."];
        buttonNames.forEach(name => {
            expect(screen.getByRole("button", {name})).toBeInTheDocument();
        });
    });

    test("Does addition correctly.", () => {
        clickButtons(["1", "0", "+", "5", "="]);
        expectOutputToBe("15");
    });

    test("Does multiplication correctly.", () => {
        clickButtons(["1", "0", "*", "3", "6", "="]);
        expectOutputToBe("360");
    });

    test("Does subtraction correctly.", () => {
        clickButtons(["1", "0", "0", "-", "9", "5", "="]);
        expectOutputToBe("5");
    });

    test("Does division correctly.", () => {
        clickButtons(["1", "0", "0", "/", "5", "="]);
        expectOutputToBe("20");
    });

    test("Does clear correctly.", () => {
        clickButtons(["1", "0", "C"]);
        expectOutputToBe("1");
    });

    test("Does AC correctly", () => {
        const plusButton = screen.getByRole("button", { name: "+" });
        clickButtons(["1", "0", "+", "2"]);
        expect(plusButton).toHaveStyle({ borderColor: "#fff" });

        fireEvent.click(screen.getByRole("button", { name: "AC" }));
        expectOutputToBe("0");
        expect(plusButton).not.toHaveStyle({ borderColor: "#fff" });
    });

    test("Does chain operations correctly", () => {
        clickButtons(["1", "0", "+", "5"]);
        expectOutputToBe("5");

        clickButtons(["+", "1", "0"]);
        expectOutputToBe("10");

        fireEvent.click(screen.getByRole("button", { name: "=" }));
        expectOutputToBe("25");
    });
});
