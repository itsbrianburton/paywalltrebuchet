# Paywall Trebuchet
This script is designed to remove the most common paywalls found on websites.
When you encounter a paywall, simply click a bookmark to load this script into your browser to make the paywall go away.

To add this to your browser, create a new bookmark in your bookmark toolbar with the following link:

`javascript:(function() { var b = document.createElement("script"); b.setAttribute("src", "https://rawgit.com/itsbrianburton/paywalltrebuchet/master/payload.js?c="+Math.floor((Math.random() * 10000) + 1)); document.body.appendChild(b); })();`

Then when you encounter a paywall, just click on your bookmark.