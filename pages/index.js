import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import StatementModel from "../models/statementModel";

import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: `solid ${theme.palette.common.white}`,
  height: "100%",
}));

const Index = ({ statements }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={7} height={700}>
        {[...Array(31)].map((item, i) => (
          <Grid key={i} item xs={1}>
            <Item>{item}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>

    // <>
    //   {statements.map((statement) => (
    //     <div key={statement._id}>
    //       <div className="card">
    //         <h5 className="pet-name">{statement.amount}</h5>
    //         <div className="main-content">
    //           <p className="pet-name">{statement.date}</p>
    //           <p className="pet-name">{statement.reason}</p>
    //           <p className="owner">Owner: {statement.method}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await StatementModel.find({});
  const statements = JSON.parse(JSON.stringify(result));

  return { props: { statements: statements } };
}

export default Index;
