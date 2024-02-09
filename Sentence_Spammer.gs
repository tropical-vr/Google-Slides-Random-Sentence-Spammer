function createSlidesWithRandomSentences() {
  var presentation = SlidesApp.getActivePresentation();

  for (var i = 0; i < 10; i++) { //adjust the "blue number i < 'NUMBER' to change the amount of slides you wanna create, becareful low end devices cry"
    var slide = presentation.appendSlide();
    
    // Generate random background color
    var randomColor = getRandomColor();
    var background = slide.getBackground();
    background.setSolidFill(randomColor);

   // Add main sentence text box
    var mainTextBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX);
    var mainTextRange = mainTextBox.getText();
    var randomSentence = generateRandomSentence();
    mainTextRange.setText(randomSentence);
    mainTextRange.getTextStyle().setFontSize(36); // Adjust font size as needed
    mainTextRange.getTextStyle().setBold(false);
    mainTextRange.getTextStyle().setForegroundColor('#000000'); // black color
    mainTextBox.setWidth(700); // adjust width for better visibility
    mainTextBox.setHeight(200); // adjust height for better visibility

    // Add drop shadow text box
    var shadowTextBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX);
    var shadowTextRange = shadowTextBox.getText();
    shadowTextRange.setText(randomSentence);
    shadowTextRange.getTextStyle().setFontSize(36); // Adjust font size as needed
    shadowTextRange.getTextStyle().setBold(false);
    shadowTextRange.getTextStyle().setForegroundColor('#ffffff'); // white color
    shadowTextBox.setWidth(700); // adjust width for better visibility
    shadowTextBox.setHeight(200); // adjust height for better visibility
    shadowTextBox.setLeft(mainTextBox.getLeft() - 2); // Shift to the right
    shadowTextBox.setTop(mainTextBox.getTop() - 2); // Shift down




    // Add "-ai" text box
    var aiTextBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX);
    var aiTextRange = aiTextBox.getText();
    aiTextRange.setText("-ai");
    aiTextRange.getTextStyle().setFontSize(40); // Adjust font size as needed
    aiTextRange.getTextStyle().setBold(false);
    aiTextRange.getTextStyle().setForegroundColor('#ffffff'); // white color
    aiTextBox.setLeft(500); // Adjust position as needed
    aiTextBox.setTop(90); // Adjust position as needed
    
    // Add disclaimer text box
    var disclaimerTextBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX);
    var disclaimerTextRange = disclaimerTextBox.getText();
    disclaimerTextRange.setText("Disclaimer: Everything here is made by AI. Do not come after me, please. I can and will delete this.");
    disclaimerTextRange.getTextStyle().setFontSize(18); // Adjust font size as needed
    disclaimerTextRange.getTextStyle().setBold(true);
    disclaimerTextRange.getTextStyle().setForegroundColor('#FF0000'); // red color
    disclaimerTextBox.setWidth(700); // adjust width for better visibility
    disclaimerTextBox.setHeight(50); // adjust height for better visibility
    disclaimerTextBox.setTop(350); // Adjust position as needed

    // Add bozo text box
    var bozoTextBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX);
    var bozoTextRange = bozoTextBox.getText();
    bozoTextRange.setText("Open Source: https://github.com/tropical-vr/Google-Slides-Random-Sentence-Spammer/tree/main (made by me, github's blocked though)");
    bozoTextRange.getTextStyle().setFontSize(18); // Adjust font size as needed
    bozoTextRange.getTextStyle().setBold(true);
    bozoTextRange.getTextStyle().setForegroundColor('#ffffff'); // white color
    bozoTextBox.setWidth(700); // adjust width for better visibility
    bozoTextBox.setHeight(50); // adjust height for better visibility
    bozoTextBox.setTop(280); // Adjust position as needed
  }
}

// Function to generate a random color code
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random sentence
function generateRandomSentence() {
  var subjects = ['I', 'You', 'He', 'She', 'They', 'The cat', 'The dog', 'The robot', 'The alien', 'The scientist'];
  var verbs = ['loves', 'hates', 'likes', 'enjoys', 'dislikes', 'fears', 'adores', 'resents', 'ignores', 'cherishes', 'believes', 'doubts', 'worries', 'imagines', 'remembers'];
  var objects = ['apples', 'bananas', 'oranges', 'grapes', 'strawberries', 'pizza', 'ice cream', 'chocolate', 'cake', 'sushi', 'the sunset', 'the ocean', 'the mountains', 'music', 'books'];
  var adjectives = ['red', 'juicy', 'sweet', 'tasty', 'ripe', 'delicious', 'yummy', 'sour', 'bitter', 'spicy', 'beautiful', 'mysterious', 'magical', 'peaceful', 'amazing'];
  var adverbs = ['happily', 'sadly', 'quickly', 'slowly', 'eagerly', 'calmly', 'angrily', 'carefully', 'lightly', 'heavily', 'secretly', 'loudly', 'quietly', 'proudly', 'shyly'];
  var conjunctions = ['and', 'but', 'however', 'although', 'while', 'because', 'unless', 'since', 'whereas', 'therefore', 'nevertheless', 'meanwhile', 'moreover', 'furthermore', 'otherwise'];
  var prepositions = ['in', 'on', 'under', 'above', 'beside', 'between', 'through', 'around', 'along', 'beneath', 'inside', 'outside', 'near', 'against', 'behind'];
  
  var subject = subjects[Math.floor(Math.random() * subjects.length)];
  var verb = verbs[Math.floor(Math.random() * verbs.length)];
  var object = objects[Math.floor(Math.random() * objects.length)];
  var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  var conjunction = conjunctions[Math.floor(Math.random() * conjunctions.length)];
  var preposition = prepositions[Math.floor(Math.random() * prepositions.length)];

  var sentenceStructure = Math.floor(Math.random() * 10);
  var sentence = '';

  switch (sentenceStructure) {
    case 0:
      sentence = subject + ' ' + verb + ' ' + object + '.';
      break;
    case 1:
      sentence = subject + ' ' + verb + ' ' + adverb + ' ' + object + '.';
      break;
    case 2:
      sentence = subject + ' ' + verb + ' ' + object + ' because it is ' + adjective + '.';
      break;
    case 3:
      sentence = 'Although ' + subject + ' ' + verb + ' ' + object + ', ' + getDifferentSubject(subject) + ' also ' + verb + ' ' + getDifferentObject(object) + '.';
      break;
    case 4:
      sentence = 'While ' + subject + ' ' + verb + ' ' + object + ', ' + getDifferentSubject(subject) + ' ' + verb + ' ' + adverb + '.';
      break;
    case 5:
      sentence = subject + ' ' + verb + ' ' + object + ' ' + conjunction + ' ' + getDifferentSubject(subject) + ' ' + verb + ' ' + getDifferentObject(object) + '.';
      break;
    case 6:
      sentence = 'Despite ' + subject + ' ' + verb + ' ' + object + ', ' + getDifferentSubject(subject) + ' ' + verb + ' ' + adverb + '.';
      break;
    case 7:
      sentence = 'The ' + subject + ' ' + verb + ' ' + object + ' ' + preposition + ' ' + getDifferentSubject(subject) + ' ' + verb + ' ' + getDifferentObject(object) + '.';
      break;
    case 8:
      sentence = subject + ' ' + verb + ' ' + object + ' ' + conjunction + ' ' + getDifferentSubject(subject) + ' ' + verb + ' ' + adverb + ' ' + getDifferentObject(object) + '.';
      break;
    case 9:
      sentence = subject + ' ' + verb + ' ' + object + ' ' + preposition + ' ' + adjective + ' ' + getDifferentObject(object) + '.';
      break;
    default:
      sentence = subject + ' ' + verb + ' ' + object + '.';
      break;
  }

  return sentence;
}

// Function to get a different subject
function getDifferentSubject(currentSubject) {
  var subjects = ['I', 'You', 'He', 'She', 'They', 'The cat', 'The dog', 'The robot', 'The alien', 'The scientist'];
  var newSubject = currentSubject;
  while (newSubject === currentSubject) {
    newSubject = subjects[Math.floor(Math.random() * subjects.length)];
  }
  return newSubject;
}

// Function to get a different object
function getDifferentObject(currentObject) {
  var objects = ['apples', 'bananas', 'oranges', 'grapes', 'strawberries', 'pizza', 'ice cream', 'chocolate', 'cake', 'sushi', 'the sunset', 'the ocean', 'the mountains', 'music', 'books'];
  var newObject = currentObject;
  while (newObject === currentObject) {
    newObject = objects[Math.floor(Math.random() * objects.length)];
  }
  return newObject;
}
