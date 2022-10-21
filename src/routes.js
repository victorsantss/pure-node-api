const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById
  },
  {
    endpoint: '/products',
    method: 'GET',
    handler: ProductController.listProducts
  },
]