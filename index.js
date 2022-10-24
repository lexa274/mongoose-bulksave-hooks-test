import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import mongooseGridFs from 'mongoose-gridfs'


async function main () {
    const mongoDBServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoDBServer.getUri())

    const myModelSchema = new mongoose.Schema({
        name: String
    });

    const MyModel = mongoose.model('ModelName', myModelSchema);

    const val1 = new MyModel({ name: 'First' })
    const val2 = new MyModel({ name: 'Second' })
    const val3 = new MyModel({ name: 'Third' })

    await MyModel.bulkSave([val1, val2, val3])
}

main()
