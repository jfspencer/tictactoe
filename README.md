# tictactoe
FRP TicTacToe

Note:
- .gitignore not added for dev consumption convenience
- published with public test link on TestFlight

Base Spec
- [X] build a tic tac toe game
- [X] use a mobile framework (like ionic)
- [X] Allow 2 players to play tic tac toe (Follow the rules of tic tac toe)
- [X] Have 3x3 grid on which the players can play
- [X] Allow the players to take turns marking spaces on the 3x3 grid
- [X] Recognize when a player has won and declare that player as victorious
- [X] Allow the user to start a new game
- [X] unit tests (coverage could be better)


--------------------------------
Some things that would be cool to add
UX Support Spec
- [X] seamlessly responsive to screen sizes from mobile to desktop
- [X] lazy load the UI to minimize load time
- [X] UI should indicate which player is active for a given turn
- [X] Logic mechanics should use Reactive Functional Programming techniques (https://www.reactivemanifesto.org)
- [X] Implement no take backs
- [ ] Game state should be reactively durable

Remote Play Spec
- [X] setup couchDB instance for testing
- [ ] requires a unique name. name will be persisted to the user lookup db.
- [ ] provide a list of users to play against
- [ ] allow remote user to accept or deny a new game
- [ ] Use CQRS to prevent remote user overwrites/conflicts and allows for rollback of game state
- [ ] one database as a user lookup dictionary
  - [ ] include online state flag, to prevent orphan game requests
- [ ] one database per user for write side operations
- [ ] stream in other users' to complete UI game state
- [ ] prevent user from marking the board during the other players turn
