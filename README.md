**Tic Tac Toe**

This application allows you play yourself (or a friend) in Tic Tac Toe. The app currently allows the user to sign up, sign in, sign out, and change their password. The new game button displays the game board where you click in x's or o's, depending who's turn it is. My end goal is to add more game logic. For example, I'm planing on adding a winner alert, and a feature that tracks and displays the users game stats.

**Here are the links to my deployed application and my reposository:**

* [Repo](https://github.com/philtodiscoglass/tic-tac-toe)
* [Application](https://philtodiscoglass.github.io/tic-tac-toe/)

My plan of attack started with authentication. I began with sign up because that is the first action the app requires from a new user. I then completed sign in, sign out, and change password. I then moved on to building the game board, implementing a feature that retreives the index value of the clicked square on the game board. I stored that value and used it to keep track of what is displayed on the board (x's and o's and their positions).

**User Stories:**

* As a user I want to be able to create a new account and sign in.
* As a user I want the game to be fast and not refresh on each move.
* As a user I want to be able to keep track of my game stats.
* As a user I want to play tic tac toe.
* As a user I want an alert that tells me when I make an invalid move.

**Tech Used:**

* Javascript
* jQuery
* HTML/CSS

**Unsolved Problems**

* Winner logic
* Stats

**Bugs**

* First move shows no value in cell array
* You can overwrite cell value in the array (but not on the board)

**Wireframe:**

[Wireframe](https://imgur.com/a/UXBz17w)
