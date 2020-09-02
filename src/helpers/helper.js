export function checkWin(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach((letter) => {
    if (!correct.includes(letter)) status = '';
  });

  if (wrong.length === 11) status = 'lose';

  return status;
}
