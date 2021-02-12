import { Connection, createConnection, Repository } from "typeorm";
import { Webpart, WebpartData } from './entity/Webpart';


export default class DataBase {
  private webrepos: Repository<Webpart>;

  private constructor(connection: Connection) {
    this.webrepos = connection.getRepository(Webpart);
  }

  public static async connect() {
    const connection = await createConnection({
      type: 'sqlite',
      database: 'database.db',
      entities: [Webpart],
      synchronize: true,
      logging: false,
    });
    return new DataBase(connection);
  }

  public async addWebpart(webpartData: WebpartData) {
    const webpart = new Webpart();
    webpart.name = webpartData.name
    webpart.title = webpartData.title
    webpart.text = webpartData.text
    await this.webrepos.save(webpart);
  }

  public getOne(id: number) {
    return this.webrepos.findOne(id);
  }

  public getAll() {
    return this.webrepos.find();
  }

  public async remove(id: number) {
    await this.webrepos.delete({ id });
  }
}

/*const initialize = async () => {
        const connection = await createConnection({
            type: "sqlite",
            database: "database.db",
            entities: [Webpart],
            synchronize: true,
            logging: false,
        })
        webrepos = connection.getRepository(Webpart);
    }*/


    //initialize();