$(() => {
  "use strict";

  // Quotes database
  const quotesObj = [
    {
      author: "Rumi",
      quote: "Do not feel lonely, the entire universe is inside you."
    },
    {
      author: "Hafez",
      quote:
        "And still, after all this time, The sun never says to the earth, You owe Me."
    },
    {
      author: "Saadi",
      quote: "Have patience. All things are difficult before they become easy."
    },
    {
      author: "Rumi",
      quote:
        "Lovers don't finally meet somewhere. They're in each other all along."
    },
    {
      author: "Hafez",
      quote: "Look what happens with A love like that, It lights the Whole Sky."
    },
    {
      author: "Saadi",
      quote:
        "In the sea there are countless treasures, But if you desire safety, it is on the shore."
    },
    {
      author: "Rumi",
      quote:
        "There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again."
    },
    {
      author: "Hafez",
      quote:
        "I wish I could show you, When you are lonely or in darkness, The Astonishing Light Of your own Being!"
    },
    {
      author: "Saadi",
      quote:
        "A wise man among the ignorant is as a beautiful girl in the company of blind men."
    },
    {
      author: "Rumi",
      quote:
        "Raise your words, not voice. It is rain that grows flowers, not thunder."
    },
    {
      author: "Hafez",
      quote:
        "What Do sad people have in Common? It seems They have all built a shrine To the past And often go there And do a strange wail and Worship. What is the beginning of Happiness? It is to stop being So religious Like That."
    },
    {
      author: "Saadi",
      quote:
        "It's no virtue to gain the whole world. Just gain the heart of one person."
    },
    {
      author: "Rumi",
      quote:
        "This place is a dream. Only a sleeper considers it real. Then death comes like dawn, and you wake up laughing at what you thought was your grief."
    },
    {
      author: "Hafez",
      quote:
        "This sky Where we live Is no place to lose your wings So love, love Love."
    },
    {
      author: "Saadi",
      quote:
        "I fear God the most, but after Him, I fear those who don't fear Him."
    },
    {
      author: "Rumi",
      quote:
        "Would you become a pilgrim on the road of love? The first condition is that you make yourself humble as dust and ashes."
    },
    {
      author: "Hafez",
      quote:
        "What is the key To untie the knot of the mind's suffering? Benevolent thought, sound And movement."
    },
    {
      author: "Saadi",
      quote:
        "Human beings are members of a whole, In creation of one essence and soul. If one member is afflicted with pain, Other members uneasy will remain. If you have no sympathy for human pain, The name of human you cannot retain."
    },
    {
      author: "Rumi",
      quote:
        "You are not a drop in the ocean. You are the entire ocean, in a drop."
    },
    {
      author: "Hafez",
      quote:
        "When all your desires are distilled You will cast just two votes: To love more, And be happy."
    },
    {
      author: "Saadi",
      quote:
        "You who feel no pain at the suffering of others It is not fitting for you to be called human."
    },
    {
      author: "Rumi",
      quote:
        "If the foot of the trees were not tied to earth, they would be pursuing me. For I have blossomed so much, I am the envy of the gardens."
    },
    {
      author: "Hafez",
      quote:
        "Art is the conversation between lovers. Art offers an opening for the heart. True art makes the divine silence in the soul Break into applause."
    },
    {
      author: "Saadi",
      quote:
        "Whatever makes an impression on the heart seems lovely in the eye."
    },
    {
      author: "Rumi",
      quote: "Stop acting so small. You are the universe in ecstatic motion."
    },
    {
      author: "Hafez",
      quote: "Love is simply creation's greatest joy."
    },
    {
      author: "Saadi",
      quote: "Virtue is in the mind, not in the appearance."
    },
    {
      author: "Rumi",
      quote:
        "Don't be satisfied with stories, how things have gone with others. Unfold your own myth."
    },
    {
      author: "Hafez",
      quote:
        "Light will someday split you open; even if your life is now a cage."
    },
    {
      author: "Saadi",
      quote: "I have never seen a man lost who was on a straight path."
    }
  ];

  // Data
  let randomIndex = undefined;
  let newQuoteIndex = undefined;

  // Generate a random number based on our quotes database
  randomIndex = Math.floor(Math.random() * quotesObj.length);
  newQuoteIndex = randomIndex + 1;

  // Show a random quote when user came in
  $("#text q").text(quotesObj[randomIndex].quote);
  $("#author").text(quotesObj[randomIndex].author);

  // Set tweeter
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" +
      quotesObj[randomIndex].quote.toString()
  );

  // When new quote is clicked
  $("#new-quote").on("click", () => {
    // Change quotes to new quotes
    $("#text q").text(quotesObj[newQuoteIndex].quote);
    $("#author").text(quotesObj[newQuoteIndex].author);

    // Set tweeter
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" +
        quotesObj[newQuoteIndex].quote.toString()
    );

    if (newQuoteIndex === quotesObj.length - 1) {
      newQuoteIndex = 0;
    } else {
      newQuoteIndex++;
    }
  });
});
