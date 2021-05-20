import "./App.css";
import Table from "./components/table/Table";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  SvgIcon,
  withStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    Demo_1: [
      {
        "Code And Description": "1st",
        Domin: "25",
        Vocab: "1st",
        css: "25",
        Version: "2",
        "Confidence Score": "20.20",
        list: [
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
        ],
      },
      {
        "Code And Description": "1st",
        Domin: "25",
        Vocab: "1st",
        css: "25",
        Version: "2",
        "Confidence Score": "20.20",
        list: [
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
        ],
      },
    ],
    Demo_2: [
      {
        "Code And Description": "1st",
        Domin: "25",
        Vocab: "1st",
        css: "25",
        Version: "2",
        "Confidence Score": "20.20",
        list: [
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
        ],
      },
    ],
    Demo_3: [
      {
        "Code And Description": "1st",
        Domin: "25",
        Vocab: "1st",
        css: "25",
        Version: "2",
        "Confidence Score": "20.20",
        list: [
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
        ],
      },
    ],
    Demo_4: [
      {
        "Code And Description": "1st",
        Domin: "25",
        Vocab: "1st",
        css: "25",
        Version: "2",
        "Confidence Score": "20.20",
        list: [
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
            list: [
              {
                "Code And Description": "1st",
                Domin: "25",
                Vocab: "1st",
                css: "25",
                Version: "2",
                "Confidence Score": "20.20",
              },
            ],
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
          {
            "Code And Description": "1st",
            Domin: "25",
            Vocab: "1st",
            css: "25",
            Version: "2",
            "Confidence Score": "20.20",
          },
        ],
      },
    ],
  });
  const [value, setValue] = useState("");

  const [radios, setRadios] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
      const keys = Object.keys(data);
      setRadios(keys);
      setValue(keys[0]);
  }, []);

  const GreenRadio = withStyles({
    root: {
      color: "#68bb6e",
      "&$checked": {
        color: "#68bb6e",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <Grid container>
      <Grid style={{ backgroundColor: "#fff" }} item md={2}>
        <div>
          <FormLabel
            component="legend"
            style={{
              padding: "8px",
            }}
          >
            {/* filter icon will append here */}
            <SvgIcon />
            Filters
          </FormLabel>
          <FormLabel
            component="legend"
            style={{
              backgroundColor: "#cccccc",
              padding: "8px",
            }}
          >
            Vocabulary
          </FormLabel>
        </div>
        <FormControl style={{ padding: "20px" }} component="fieldset">
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
                  control={<GreenRadio />}
                  label={radio}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid
        item
        md={9}
        sm={9}
        style={{ backgroundColor: "#fff", marginLeft: "15px", padding: "20px" }}
      >
        {data[value] && (
          <Table
            tableData={data[value]}
            gridTemplate={[5, 1, 1, 1, 1, 2]}
            label={value}
            treeLabel="list"
            searchedKeyword="Searched Keyword"
          />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
