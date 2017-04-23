
....Generating New Shortened URL
if (validateUrl)
  turn Url to lowerCase
  if (UrlExist)
    return url + associated ID
  else
    generateId
    insertIntoDB (url and id)
    return url + generatedId
else
    return {error: errorMessage}

... Finding original URL for redirecting
    if (validateId)
      findUrl associated with the validateId
      redirect to URL
    else
      return {error: errorMessage}

Tests (Use Chai / Mochai)
- Unit Test functions or Utils.
- mockmongoose for mocking DB  - MockMongoose.. organizing test using mocha
- Write End to End Test
