import Students from '../model';

export default {
  async getItems({ page, limit, search, orderBy, status = '' }) {
    try {
      const total = Array.from(
        await Students.find({
          name: { $regex: '^' + search },
          status: { $regex: '^' + status },
        }),
      ).length;

      return {
        count: limit,
        total,
        data: await Students.find({
          name: { $regex: '^' + search },
          status: { $regex: '^' + status },
        })
          .skip((page - 1) * limit)
          .limit(limit)
          .exec(),
      };
    } catch (err) {
      throw new Error(err);
    }
  },
  async createItem(data) {},
  async updateItem(id, data) {},
  async deleteItem(id) {},
};
