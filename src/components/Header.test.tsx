import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router";

import Header from "./Header";

describe("Header", () => {

  // nav bar


  test("shows Home link", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const home = screen.getByRole("link", {
      name: /home/i,
    });

    expect(home).toBeInTheDocument();
  });

  test("shows TV Shows link", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const tvShows = screen.getByRole("link", {
      name: /tv shows/i,
    });

    expect(tvShows).toBeInTheDocument();
  });

  test("shows Movies link", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const movies = screen.getByRole("link", {
      name: /movies/i,
    });

    expect(movies).toBeInTheDocument();
  });

  test("shows Kids link", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const kids = screen.getByRole("link", {
      name: /kids/i,
    });

    expect(kids).toBeInTheDocument();
  });

  test("shows My List link", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const myList = screen.getByRole("link", {
      name: /my list/i,
    });

    expect(myList).toBeInTheDocument();
  });
//end of nav bar 
 
// nav buttons have green when hover
 test("navigation bar links have correct green styles", () => {
  render(
    <MemoryRouter>
      <Header
        theme="dark"
        language="en"
        user={null}
        onToggleTheme={vi.fn()}
        onToggleLanguage={vi.fn()}
        onSignOut={vi.fn()}
      />
    </MemoryRouter>
  );

  const home = screen.getByRole("link", {
    name: /home/i,
  });

  const tvShows = screen.getByRole("link", {
    name: /tv shows/i,
  });

  const movies = screen.getByRole("link", {
    name: /movies/i,
  });

  const kids = screen.getByRole("link", {
    name: /kids/i,
  });

  const myList = screen.getByRole("link", {
    name: /my list/i,
  }); 
  expect(tvShows).toHaveClass("hover:text-green-400");
  expect(movies).toHaveClass("hover:text-green-400");
  expect(kids).toHaveClass("hover:text-green-400");
  expect(myList).toHaveClass("hover:text-green-400");
});
// end of hover for buttons in nav bar 

  // theme button


  test("shows Light button when theme is dark", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const themeButton = screen.getByRole("button", {
      name: /light/i,
    });

    expect(themeButton).toBeInTheDocument();
  });

  test("shows Dark button when theme is light", () => {
    render(
      <MemoryRouter>
        <Header
          theme="light"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const themeButton = screen.getByRole("button", {
      name: /dark/i,
    });

    expect(themeButton).toBeInTheDocument();
  });

  test("calls theme toggle when theme button is clicked", async () => {
    const user = userEvent.setup();

    const handleToggleTheme = vi.fn();

    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={handleToggleTheme}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const themeButton = screen.getByRole("button", {
      name: /light/i,
    });

    await user.click(themeButton);

    expect(handleToggleTheme).toHaveBeenCalledTimes(1);
  });
// end of theme button
//lan button 

  test("shows AR button when language is English", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const languageButton = screen.getByRole("button", {
      name: /ar/i,
    });

    expect(languageButton).toBeInTheDocument();
  });

  test("shows EN button when language is Arabic", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="ar"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const languageButton = screen.getByRole("button", {
      name: /en/i,
    });

    expect(languageButton).toBeInTheDocument();
  });

  test("calls language toggle when language button is clicked", async () => {
    const user = userEvent.setup();

    const handleToggleLanguage = vi.fn();

    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={handleToggleLanguage}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const languageButton = screen.getByRole("button", {
      name: /ar/i,
    });

    await user.click(languageButton);

    expect(handleToggleLanguage).toHaveBeenCalledTimes(1);
  });
// end of //lan button 
// signin

  test("shows Sign In when user is not logged in", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const signIn = screen.getByText(/sign in/i);

    expect(signIn).toBeInTheDocument();
  });
// end of sign in 
//sign out 

  test("shows Sign Out when user is logged in", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={{ username: "Sadeen" }}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const signOut = screen.getByRole("button", {
      name: /sign out/i,
    });

    expect(signOut).toBeInTheDocument();
  });

  test("shows username when user is logged in", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={{ username: "Sadeen" }}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const username = screen.getByText(/sadeen/i);

    expect(username).toBeInTheDocument();
  });

  test("calls onSignOut when Sign Out button is clicked", async () => {
    const user = userEvent.setup();

    const handleSignOut = vi.fn();

    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={{ username: "Sadeen" }}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={handleSignOut}
        />
      </MemoryRouter>
    );

    const signOutButton = screen.getByRole("button", {
      name: /sign out/i,
    });

    await user.click(signOutButton);

    expect(handleSignOut).toHaveBeenCalledTimes(1);
  });
// end of signout 
//free trial button exists 

  test("shows Start Free Trial", () => {
    render(
      <MemoryRouter>
        <Header
          theme="dark"
          language="en"
          user={null}
          onToggleTheme={vi.fn()}
          onToggleLanguage={vi.fn()}
          onSignOut={vi.fn()}
        />
      </MemoryRouter>
    );

    const freeTrial = screen.getByText(/start free trial/i);

    expect(freeTrial).toBeInTheDocument();
  });
});