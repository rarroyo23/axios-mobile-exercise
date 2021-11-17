# Axios Mobile Excerise
Axios has a lot of award-winning journalism, and sometimes it doesn't all fit on one page, so we have to help readers easily find and read the stories they want. Your challenge is to build a mobile listicle view that displays various stories and links out to the full view of the story.

## Before you start
We're not trying to get you to work for us for free, so please don't spend than more than 4 hours on this. You can write a `TODO` doc that explains how you'd complete any tasks you don't get to.

## What You're Building
Using Axios' own public API, build a mobile view that lists the latest 20 stories, along with an additional view to show the entirety of the story.

## Getting started
1. Fork this repo to begin the exercise.
2. Use React Native and rebuild the mocks in the PDF wireframe in CSS and JS.
3. First make a call to the stream endpoint to retrieve an array of the 20 lastest story ids for Axios.com.
4. For each story id, make another call to the content endpoint to retrieve the data for each story.
5. For each story in the list view, display the following:
- The `headline` of the story.
- The `primary_image` of the story.
6. For each list item, link to a separate view that shows the full story and display the following:
- The `headline` of the story.
- The `display name` of the author.
- The `section label` of the story.
- The `primary_image` of the story.
- The `published date` of the story.
- The `body text` of the story.
Bonus:
- Link out to Axios.com from the story view.
- Link back to the listicle view from the full story view.

## API Details

### Stream endpoint
https://api.axios.com/api/render/stream/content

This returns by default the UUIDs of about 10 stories, but the page size can be changed.

### Content endpoint
https://api.axios.com/api/render/content/c13dbda5-893d-46ba-ae6a-87ff8e34c74e

This returns the content and detail of one story, from its UUID.

## Suggestions
We tend to prefer functional components over classes, and hooks where necessary.

You can use any data fetching library you like. Fetch, Axios (heh) or SWR will all do just fine.

We care about accessibility. Please make your page as accessible as possible.

Building software is a collaborative process, so if you're feeling adventurous, feel free to diverge from the designs somewhat and apply your own creativity. Let us know about the choices you made, and why.

The application has Jest already set up. Add the amount of test coverage you feel is appropriate.

We use TypeScript at Axios. Bonus points if you define types and use them effectively to increase the reliability of your code.




