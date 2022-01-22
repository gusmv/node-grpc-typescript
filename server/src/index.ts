import { app } from './app';

import './grpc/server'

app.listen(9000, () => console.log('Server running on port 9000.'));