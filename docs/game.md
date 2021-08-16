# Gomoku

## Requirements
  + Mobile, Safari

## Workflow

main:
  + User visits the website and checks auth.
    + If the auth is not present, ask the user to enter a username and registrate. Server stores the username and returns a login key.
  + User enters Dashboard screen.
    + User clicks new game to wait for a opponent.
      + Server matches a opponent for User.
        + The user can cancel matching
      + Go to `game`
  
game:
  TODO