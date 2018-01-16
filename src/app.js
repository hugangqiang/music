import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from 'view/home/Home'
import Message from 'view/message/Message'
import Search from 'view/search/Search'
import Web from 'view/web/Web'

require('common/css/index.css');

axios.defaults.timeout = 6000;
axios.defaults.baseURL = 'https://musicApi.hugangqiang.com';
/* axios({
    url: '/search',
    method: 'GET',
    params: {
        keywords: '海阔天空'
    }
}).then( (res) => {
    console.log(res)
}) */


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/web" component={Web} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/search" component={Search} />
        </div>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
