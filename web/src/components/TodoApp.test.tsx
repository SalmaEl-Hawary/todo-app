import React from "react";
import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";

declare global {
  interface Crypto {
    randomUUID?: () => string;
  }
}

beforeAll(() => {
  // Ensure crypto exists
  if (!globalThis.crypto) {
    Object.defineProperty(globalThis, "crypto", {
      value: {} as Crypto,
      writable: true,
    });
  }

  // Ensure randomUUID exists
  if (typeof globalThis.crypto.randomUUID !== "function") {
    Object.defineProperty(globalThis.crypto, "randomUUID", {
      value: () => "test-uuid-" + Math.random().toString(16).slice(2),
      configurable: true,
    });
  }
});

function setup() {
  const view = render(<TodoApp />);
  const input = screen.getByLabelText(/todo input/i) as HTMLInputElement;
  const addButton = screen.getByRole("button", { name: /add todo/i });
  return { view, input, addButton };
}

describe("TodoApp", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds a todo", async () => {
    const user = userEvent.setup();
    const { input, addButton } = setup();
    await user.type(input, "Buy milk");
    await user.click(addButton);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("toggles a todo", async () => {
    const user = userEvent.setup();
    const { input, addButton } = setup();
    await user.type(input, "Walk dog");
    await user.click(addButton);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("deletes a todo", async () => {
    const user = userEvent.setup();
    const { input, addButton } = setup();
    await user.type(input, "Task to delete");
    await user.click(addButton);
    const del = screen.getByRole("button", { name: /delete task to delete/i });
    await user.click(del);
    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });

  it("persists to localStorage", async () => {
    const user = userEvent.setup();
    const { input, addButton } = setup();
    await user.type(input, "Persist me");
    await user.click(addButton);
    await waitFor(() =>
      expect(
        JSON.parse(localStorage.getItem("simpletodo.todos") || "[]")
      ).toHaveLength(1)
    );
  });
});
