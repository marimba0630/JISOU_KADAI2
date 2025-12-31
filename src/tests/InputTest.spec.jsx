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

describe("Input Test", () => {
    it("登録ができること", async () => {
        render(<LearningRecord />);
        
        const before = (await screen.findAllByRole("listitem")).length;

        const user = userEvent.setup();
        const input_title = await screen.findByLabelText("学習内容");
        const input_time = await screen.findByLabelText("学習時間");
        const button = screen.getByRole("button", {name: "登録"});

        await user.type(input_title, "入力テスト");
        await user.type(input_time, "10");
        await user.click(button);

        const after = (await screen.findAllByRole("listitem")).length;

        expect(after).toBe(before + 1);


    });
});
