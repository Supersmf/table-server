import Students from '../model';

export default {
  async getItems({ page, limit, search, orderBy, order, status = '' }) {
    try {
      const total = Array.from(
        await Students.find({
          name: { $regex: search, $options: 'i' },
          status: { $regex: '^' + status },
        }),
      ).length;

      return {
        count: limit,
        total,
        data: await Students.find({
          name: { $regex: search, $options: 'i' },
          status: { $regex: '^' + status },
        })
          .sort({ [orderBy || 'name']: order })
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
