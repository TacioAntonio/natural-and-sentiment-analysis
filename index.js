const natural = require('natural');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const interpretSentiment = (score) => {
    if (score > 0.5) return "Strongly Positive";
    if (score > 0) return "Positive";
    if (score === 0) return "Neutral";
    if (score > -0.5) return "Negative";
    return "Strongly Negative";
}

const receiveResponse = () => {
    rl.question('>> ', (phrase) => {
        console.log(interpretSentiment(analyzer.getSentiment(tokenizer.tokenize(phrase))));
        return receiveResponse();
    });
}

let Analyzer = natural.SentimentAnalyzer;
let stemmer = natural.PorterStemmer;
let analyzer = new Analyzer("English", stemmer, "afinn");
let tokenizer = new natural.WordTokenizer();
receiveResponse();