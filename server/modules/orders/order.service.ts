import { appDatasource } from "../../common/database/app-datasource";
import { OrderEntity } from "./order.model";

 class OrderService {
  async create(name: string) {
    await appDatasource
      .createQueryBuilder()
      .insert()
      .into(OrderEntity)
      .values([
        {
          name,
        },
      ])
      .execute();
  }

  async findAll() {
    return await appDatasource
      .createQueryBuilder()
      .select()
      .from(OrderEntity, "order")
      .getRawMany();
  }

  async findOne(id: number) {
    return await appDatasource
      .createQueryBuilder()
      .select()
      .from(OrderEntity, "order")
      .where("order.id = :id", { id })
      .getRawOne();
  }

  async update(id: number, name: string) {
    await appDatasource
      .createQueryBuilder()
      .update(OrderEntity)
      .set({ name })
      .where("id = :id", { id })
      .execute();
  }

  async delete(id: number) {
    await appDatasource
      .createQueryBuilder()
      .delete()
      .from(OrderEntity)
      .where("id = :id", { id })
      .execute();
  }
}

export default new OrderService();
