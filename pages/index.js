import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import StatementModel from "../models/statementModel";

const Index = ({ statements }) => {
  return (
    <>
      {statements.map((statement) => (
        <div key={statement._id}>
          <div className="card">
            <h5 className="pet-name">{statement.amount}</h5>
            <div className="main-content">
              <p className="pet-name">{statement.date}</p>
              <p className="pet-name">{statement.reason}</p>
              <p className="owner">Owner: {statement.method}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await StatementModel.find({});
  const statements = JSON.parse(JSON.stringify(result));

  return { props: { statements: statements } };
}

export default Index;
