# Frontend Mentor - Todo app

![Design preview for the Todo app coding challenge](./design/desktop-preview.jpg)

Apparently at some point in their career every architect will design a chair. In the same way, it seems every wannabe developer will one day create a todo list. So here's mine.

## Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Drag and drop to reorder items on the list
- Toggle light and dark mode

## Lessons learnt

- 💡 I spent some time confused between updating the object storing the todo list data, and what was rendered in the UI. In the end I found setting and getting `localStorage` useful for ensuring that I was always working with the latest data, but this does necessitate a lot of rendering and re-rendering.
- 💡 I like relying on the browser to do the work for me whenever possible, but I have to say I've found the drag and drop API hard work. Hard work to get working, and double hard work on browser inconsistencies. I think I have this mostly sorted, but there are still problems with FireFox on mobile.

## Problems

I would very much welcome advice on the following issues:

- ⚠️ I am still wondering if there is a better way to approach the JavaScript side of this project. Perhaps creating each todo item as a `class` and adding variables and methods that way. I am at the stage with CSS now when I can mostly see a good way to approach a problem, I'm not there yet with JS.

## Future learning

- 🙇‍♂️ JavaScript patterns and approaches. I want to get to the stage where I can easily see a good approach to tackling a problem in JS. At the moment I don't feel confident deciding on an overall approach, even if I am now getting more comfortable applying methods and approaches at the micro level.
