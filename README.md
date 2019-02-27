# eddies-blackjack

This is the first ever (finished) game I've created! 
I've tested it on five different browsers and it worked fine on four out of five browsers:
	Chrome, Firefox, Opera and Edge.
	It didn't work on.... Do I really have to say it? (*caugh* *caugh* IE)

While watching Mark Zamoyta's video on Pluralsight, Javascript: Getting Started. I did get an idea to make a 
better version of the Black Jack game he made on that video, since I found it very boring with a text based 
Black Jack game. One of the first things I made was to convert the output strings of the Cards into HTML image
elements. The card string became instead the filepath targeting the .svg-files in the image folder instead. 
The result became "images/value_of_suit.svg", and everytime the function "getNextCard" was called, one of the
arrayed HTML image-elements got it's source renamed into the filepath to the correct .svg-file.
I did however got to create a transparent image to "hide" the unused image-elements. Since I'm not really 
comfortable with removing/adding HTML elements yet, I decided to make this as an easier solution.

Next up I worked on adding a money input function, and it worked fine. Then I created a system for setting 
a bet from the money input. I did however stumble upon an irritating bug that made the value NaN, or when it
got negative values. Both solved with an easy if-state that returns 0.

Also I made a reward system that gives you 2x times the bet money for a win, and a special 3x times when
hitting 21. Although, if the Dealer (computer) get same score as you as a player get. Dealer will win, 
except when hitting 21 where the player wins.
The round can't get started if a bet is not set, and a bet can't be set if the Cash value is 0 or is less than
the Bet button value. After a round is started, you can't raise the stakes until next round.

Since this game was made for educational purpose I have no intention on making any money. Also, the images are
scrap-assets I found on the internet that no one have a claim on. If you wanna use them to make your own 
Black Jack game, feel free to steal them images from me! 

This game will also be the first ever "release" of my future-to-come game development 
company "Dexx Developments" (or whatever I may rename it to)

Best regards and have fun with this game! 
