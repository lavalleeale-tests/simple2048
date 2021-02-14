function getAllIndexes(arr, val) {
  const indexes = []; let
    i;
  for (i = 0; i < arr.length; i += 1) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function handleRight(values, setValues) {
  const newValues = Array.from(values);
  for (let i = 0; i < 3; i += 1) {
    for (let j = i * 4; j < i * 4 + 4; j += 1) {
      if (newValues[j] !== 0) {
        if (newValues[j] === newValues[j + 4]) {
          newValues[j] = 0;
          newValues[j + 4] *= 2;
        } else if (newValues[j + 4] === 0) {
          newValues[j + 4] = newValues[j];
          newValues[j] = 0;
        }
      }
    }
  }
  if (JSON.stringify(values) !== JSON.stringify(newValues)) {
    const allIndexes = getAllIndexes(newValues, 0);
    newValues[allIndexes[Math.floor(Math.random() * allIndexes.length)]] = 2;
  }
  setValues(newValues);
}

function handleLeft(values, setValues) {
  const newValues = Array.from(values);
  for (let i = 3; i > 0; i -= 1) {
    for (let j = i * 4; j < i * 4 + 4; j += 1) {
      if (newValues[j] !== 0) {
        if (newValues[j] === newValues[j - 4]) {
          newValues[j] = 0;
          newValues[j - 4] *= 2;
        } else if (newValues[j - 4] === 0) {
          newValues[j - 4] = newValues[j];
          newValues[j] = 0;
        }
      }
    }
  }
  if (JSON.stringify(values) !== JSON.stringify(newValues)) {
    const allIndexes = getAllIndexes(newValues, 0);
    newValues[allIndexes[Math.floor(Math.random() * allIndexes.length)]] = 2;
  }
  setValues(newValues);
}
function handleDown(values, setValues) {
  const newValues = Array.from(values);
  for (let i = 0; i < 4; i += 1) {
    for (let j = i * 4; j < i * 4 + 3; j += 1) {
      if (newValues[j] !== 0) {
        if (newValues[j] === newValues[j + 1]) {
          newValues[j] = 0;
          newValues[j + 1] *= 2;
        } else if (newValues[j + 1] === 0) {
          newValues[j + 1] = newValues[j];
          newValues[j] = 0;
        }
      }
    }
  }
  if (JSON.stringify(values) !== JSON.stringify(newValues)) {
    const allIndexes = getAllIndexes(newValues, 0);
    newValues[allIndexes[Math.floor(Math.random() * allIndexes.length)]] = 2;
  }
  setValues(newValues);
}
function handleUp(values, setValues) {
  const newValues = Array.from(values);
  for (let i = 0; i < 4; i += 1) {
    for (let j = i * 4 + 3; j > i * 4; j -= 1) {
      if (newValues[j] !== 0) {
        if (newValues[j] === newValues[j - 1]) {
          newValues[j] = 0;
          newValues[j - 1] *= 2;
        } else if (newValues[j - 1] === 0) {
          newValues[j - 1] = newValues[j];
          newValues[j] = 0;
        }
      }
    }
  }
  if (JSON.stringify(values) !== JSON.stringify(newValues)) {
    const allIndexes = getAllIndexes(newValues, 0);
    newValues[allIndexes[Math.floor(Math.random() * allIndexes.length)]] = 2;
  }
  setValues(newValues);
}

function handleKeys(event, values, setValues) {
  event.preventDefault();
  switch (event.key) {
    case 'd':
    case 'ArrowRight':
      handleRight(values, setValues);
      break;
    case 'a':
    case 'ArrowLeft':
      handleLeft(values, setValues);
      break;
    case 's':
    case 'ArrowDown':
      handleDown(values, setValues);
      break;
    case 'w':
    case 'ArrowUp':
      handleUp(values, setValues);
      break;
    default:
      break;
  }
}

export default handleKeys;
