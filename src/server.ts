import App from './App';
import 'dotenv/config';

(async () => {
  App.listen(80, () => console.log('Listening on Port 80'));
})();
