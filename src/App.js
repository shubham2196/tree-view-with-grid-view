import "./App.css";
import Table from "./components/table/Table";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");

  const [radios, setRadios] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:5001/").then((res) => {
      const keys = Object.keys(res.data);
      setRadios(keys);
      setValue(keys[0]);
      setData(res.data);
    });
  }, []);

  return (
    <Grid container>
      <Grid item md={2}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            value={value}
            onChange={handleChange}
          >
            {radios.map((radio, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={radio}
                  control={<Radio />}
                  label={radio}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item md={10}>
        {data[value] && (
          <Table tableData={data[value]} label={value} treeLabel="list" />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
