import axios from 'axios';

// Please replace the <The API key> (below Line 10 Col 21) with your own.
// It should look something like:
// 'Client-ID 74ad2cf202fa57f2b0f6b551386a0c089636f33f4790688ffa3ede3673c991d9'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 74ad2bf202fa57f2b0f6b558386a0c089636f33f4790688ffa3ede3673c991d9'
  }
});
