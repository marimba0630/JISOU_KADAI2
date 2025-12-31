jest.mock("../supabaseClients.jsx", () => {
    let data = [ {id: 1, title: "dummy", time: 1}, {id: 2, title: "dummy2", time: 2} ];
    
    return {
        supabase: {
            from: jest.fn(() => ({
                select: jest.fn(() => {
                    return Promise.resolve({
                        data: data,
                        error: null,
                    })
                }),
                insert: jest.fn((newItem) => {
                    newItem.id = 2;
                    data = [...data, newItem];
                    return Promise.resolve({
                        data: newItem,
                        error: null,
                    });
                }),
                delete: jest.fn(() => {
                    return {                    
                        eq: jest.fn((key, value) => {
                        data = data.filter(item => item[key] !== value);
                        return Promise.resolve({
                            data: data,
                            error: null,
                        });
                    }),}
                }),
            })),
        },
    };
});


import { LearningRecord } from "../LearningRecord";
import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Error Test", () => {
    it("入力せずに登録するとエラーがでること", async () => {
        render(<LearningRecord />);
        
        let error = await screen.findByTestId("error");

        const user = userEvent.setup();
        const button = screen.getByRole("button", {name: "登録"});

        await user.click(button);

        error = await screen.findByTestId("error");
        expect(error).toHaveTextContent("入力されていない項目があります");


    });
});
