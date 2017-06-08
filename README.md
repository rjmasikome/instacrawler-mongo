# instacrawler-mongo

This is a nodejs based crawler that will crawl instagram data based on hashtag to locally installed mongodb. Please use this for educational purpose only. Access token of instagram must be obtained, and **not in sandbox** mode. For more information, please refer to https://www.instagram.com/developer/

### Requirement
- Make sure `mongodb` is installed
- Make sure `node` and `npm` is installed

### Pre-requisite
- Have a hashtag to crawl in mind
- Have access_token from instagram developer which is not in sandbox mode
- No access control to your mongo

### Installation and usage
- Install dependencies
`npm install`
- Crawl the hashtag to your mongo
`node . <HASHTAG> <ACCESS-TOKEN>`
