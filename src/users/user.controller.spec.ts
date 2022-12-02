import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    userController = new UserController(userService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [];
      jest.spyOn(userService, 'getAllUser').mockImplementation(() => result);

      expect(await userController.getAllUser).toBe(result);
    });
  });
});
