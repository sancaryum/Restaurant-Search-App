import axios from 'axios';
import { YellowBox } from 'react-native';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
            'Bearer -tKmaCq3O5SOiRCOlM3L7H4RjTqxzPCs39BSdTR9hTfrxQzhAfN2A8noTpeto_U9SeIbeQXVwOZB5EBwsbQ8RL6wxLE6SshaYxKTb6eEZ1UJn2k7h0wBGdWqlW-9X3Yx'
    }
});




//aşağıdaki aynısı yelp.get('https://api.yelp.com/v3/businesses/search')
//yelp.get('/search')