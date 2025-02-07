const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'project';
const patientCollection = 'patient';
const doctorCollection = 'doctor';

async function run() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const patients = db.collection(patientCollection);
    const doctors = db.collection(doctorCollection);

    const addPatient = async (patientData) => {
      const result = await patients.insertOne(patientData);
      console.log('New patient added with ID:', result.insertedId);
    };
    const addDoctor = async (doctorData) => {
      const result = await doctors.insertOne(doctorData);
      console.log('New doctor added with ID:', result.insertedId);
    };

    const updatePatient = async (patientId, updateData) => {
      const result = await patients.updateOne({ _id: patientId }, { $set: updateData });
      console.log('Updated patient count:', result.modifiedCount);
    };

    const updateDoctor = async (doctorId, updateData) => {
      const result = await doctors.updateOne({ _id: doctorId }, { $set: updateData });
      console.log('Updated doctor count:', result.modifiedCount);
    };

    const getAllPatients = async () => {
      const allPatients = await patients.find({}).toArray();
      console.log('All patients:', allPatients);
      return allPatients;
    };

    const getAllDoctors = async () => {
      const allDoctors = await doctors.find({}).toArray();
      console.log('All doctors:', allDoctors);
      return allDoctors;
    };

    await addPatient({ name: 'John Doe', age: 30, illness: 'Flu', email: 'john@example.com' });

    await addDoctor({ name: 'Dr. Smith', specialty: 'Cardiology', email: 'drsmith@example.com' });

    await getAllPatients();
    await getAllDoctors();


  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

run().catch(console.dir);