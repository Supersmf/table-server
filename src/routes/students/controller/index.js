import service from '../services';

export default {
  async read(request, response) {
    try {
      const { search, limit, page, orderBy, order, status } = request.query;
      const students = await service.getItems({
        search,
        status,
        orderBy,
        order,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
      });

      response.json(
        // status: 'success',
        // message: 'Contacts retrieved successfully',
        students,
      );
    } catch (err) {
      response.json(err);
    }
  },
  async create(ctx) {},
  async update(ctx) {},
  async delete(ctx) {},
};
