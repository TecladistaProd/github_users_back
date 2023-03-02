import App from './App';
import 'dotenv/config';

const port = process.env.PORT || 80;

(async () => {
  App.listen(port, () => console.log(`Listening on port ${port}`));
})();
