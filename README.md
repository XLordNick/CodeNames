# CodeNames
This is a project intended to mimic the board game code names

# Rules of the Game
* Bullet List
There are two teams and each game, a member from both team serve as the team captain
The captains go to the generate board page and create a pattern. They have the option to rotate it left/right or generate a completely new pattern
If they click Blue Team first, it generates a pattern where the Blue Team has 9 words and the Red Team has 8 words
Once the captains agrees on a pattern and an orientation, they can generate the game board at the home page
Taking turns, each captain gives the other team members a word as a hint and a number symbolizing the number of words on the board
The other team members can guess up to 1 more than the number words stated by the captain, but if any words are stated incorrectly, then the turn for the team is over
The member makes a guess by clicking on the respective word, note that once clicked, you cannot undo
The captains then indict with the buttons below the board whether the word is for the red team, blue team, neutral, or a death word
If a team selects a death word, it is an automatic loss for them
The first team to get all of their words first is the winner!!

# How it Works
The backend structure is backed by JavaScript and takes advantage of button clicking events fired by the HTML page
The word bank used by the program is located in the data.js file, there are a total of 2265 nouns currently available

# Future Improvements and Fixes
Simplify pattern generation, current implementation adds in a bit of fluff to increase randomness
Refinement of the word bank to have words separated by different categories that they can be grouped together by, currently consolidates all the words together into one list
Converting the internal CSS into an external file for clarity and simplicity
Restyling to scale more gracefully on different devices
Timer functionality where each team has to select the words within the time limit
Adding in the ability for the game board to detect the winner, currently only detects if death word is selected
Modify the generate board to function by sending an image via text message to the team captains
Adding in an AI to serve as the captain
