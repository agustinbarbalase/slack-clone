# slack-clone

## api-documentation

## ```/api/sessions```

| Method | Endpoint                   | Description                                               |
|--------|----------------------------|-----------------------------------------------------------|
| POST   | ```/api/sessions/login```  | Get JWT to authentication                                 |
| POST   | ```/api/sessions/signup``` | Register user as ```User``` and get JWT to authentication |

## ```/api/users```

| Method | Endpoint             | Description   | Auth as |
|--------|----------------------|---------------|---------|
| GET    | ```/api/users```     | Get all users | Admin   |
| GET    | ```/api/users/:id``` | Get a user    | Admin   |
| POST   | ```/api/users```     | Create a user | Admin   |
| PUT    | ```/api/users/:id``` | Edit a user   | Admin   |
| DELETE | ```/api/users/:id``` | Delete a user | Admin   |

## ```/api/channels```

| Method | Endpoint                                      | Description              | Auth as |
|--------|-----------------------------------------------|--------------------------|---------|
| GET    | ```/api/channels```                           | Get all channels         | Admin   |
| GET    | ```/api/channels/:channelId```                | Get info about channel   | Member  |
| POST   | ```/api/channels```                           | Create a channel         | User    |
| PUT    | ```/api/channels/add/:channelId/:userId```    | Add member to channel    | Owner   |
| PUT    | ```/api/channels/remove/:channelId/:userId``` | Remove member to channel | Owner   |
| DELETE | ```/api/channels/:channelId```                | Delete a channel         | Owner   |

## ```/api/chats```

| Method | Endpoint                            | Description              | Auth as |
|--------|-------------------------------------|--------------------------|---------|
| GET    | ```/api/chats/:channelId/:chatId``` | Get info about chat      | Member  |
| POST   | ```/api/chats/:channelId```         | Create a chat on channel | Owner   |
| PUT    | ```/api/chats/:channelId/:chatId``` | Edit info about chat     | Owner   |
| DELETE | ```/api/chats/:channelId/:chatId``` | Delete a chat on channel | Owner   |

## ```/api/messages```

| Method | Endpoint                               | Description              | Auth as |
|--------|----------------------------------------|--------------------------|---------|
| GET    | ```/api/messages/:channelId/:chatId``` | Get all message on chat  | Member  |
| POST   | ```/api/messages/:channelId```         | Create a message on chat | Member  |
