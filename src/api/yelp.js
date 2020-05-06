import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5GwqXRzjwGV5pANApIS2Ex5tuwgf-DVgnZ-zkbdxbivHl7WfzV7YAs1SeZg9MsQ4BrgTp2uJL3dJdNSHBroNiTyxgu19kg65jgdJG6Jxw5Fd8yOI4wr3m5MBGCqxXnYx'
    }
})