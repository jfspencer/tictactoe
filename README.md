# tictactoe
FRP TicTacToe

Note:
- .gitignore not added for dev consumption convenience
- published with public test link on TestFlight

Original Spec

- [ ] build a tic tac toe game
- [ ] use a mobile framework (like ionic)
- [ ] Allow 2 players to play tic tac toe (Follow the rules of tic tac toe)
- [ ] Have 3x3 grid on which the players can play
- [ ] Allow the players to take turns marking spaces on the 3x3 grid
- [ ] Recognize when a player has won and declare that player as victorious
- [ ] Allow the user to start a new game

--------------------------------

UX Support Spec
- [X] UI must be lazy loaded to minimize load time
- [X] UI should indicate which player is active for a given turn
- [ ] Game state should be reactively durable
- [ ] Logic mechanics should use Reactive Functional Programming techniques (https://www.reactivemanifesto.org)
- [ ] Should have a decent splash screen
- [X] Implement no take backs
- [ ] allow users to take turns on the same device
- [ ] allow each player to use their own device

Remote Play Spec
- [ ] requires a unique name. name will be persisted to the user lookup db.
- [ ] provide a list of users to play against
- [ ] allow remote user to accept or deny a new game
- [ ] Use CQRS to prevent remote user overwrites/conflicts and allows for rollback of game state
- [ ] one database as a user lookup dictionary
  - [ ] include online state flag, to prevent orphan game requests
- [ ] one database per user for write side operations
- [ ] stream in other users' to complete UI game state

Maintenance Spec
- [ ] Should have 100% logic code coverage
- [ ] Should have common use case integration tests
