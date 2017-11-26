const verify = (regexp, yes, no) => {
  if (regexp.source === '...') return;
  yes.forEach((s) => {
    if (!regexp.test(s)) console.log(`Не нашлось ${s}`);
  });
  no.forEach((s) => {
    if (regexp.test(s)) console.log(`Неожиданное вхождение ${s}`);
  });
};

// 1. car and cat
verify(/ca[rt]/, ['my car', 'bad cats'], ['camper', 'high art']);

// 2. pop and prop
verify(/p?rop/, ['pop culture', 'mad props'], ['plop']);

// 3. ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/, ['ferret', 'ferry', 'ferrari'], ['ferrum', 'transfer A']);

// 4. Any word ending in ious
verify(/\b\w+ious\b/, ['how delicious', 'spacious room'], ['ruinous', 'consciousness']);

// 5. A whitespace character followed by a dot, comma, colon, or semicolon
verify(/\s[.,:;]/, ['bad punctuation .'], ['escape the dot']);

// 6. A word longer than six letters
verify(/\w{7,}/, ['hottentottententen'], ['no', 'hotten totten tenten']);

// 7. A word without the letter e
verify(/\b[^\WeE]+\b/, ['red platypus', 'wobbling nest'], ['earth bed', 'learning ape']);

