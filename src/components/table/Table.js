import React, { Component, Fragment } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { Checkbox, FormControlLabel, Grid, SvgIcon } from "@material-ui/core";

export default class Table extends Component {
  getHead = () => {
    const { tableData, treeLabel } = this.props;
    const head = Object.keys(tableData[0]);
    head.splice(head.indexOf(treeLabel), 1);
    return head;
  };

  MinusSquare = () => {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }}>
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  };

  PlusSquare = () => {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }}>
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  };

  renderInnerTree = (obj, parentIndex, index) => {
    const { treeLabel,gridTemplate } = this.props;
    const heads = this.getHead();
    return (
      <TreeItem
        key={parentIndex + "_" + index}
        nodeId={"list" + parentIndex + "_" + index}
        label={
          <Grid container>
            <Grid item md={1}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
              />
            </Grid>
            {heads.map((head, index) => {
              return (
                <Grid key={"item" + parentIndex + "_" + index} item md={gridTemplate[index]}>
                  {obj[head]}
                </Grid>
              );
            })}
          </Grid>
        }
      >
        {obj.hasOwnProperty(treeLabel) &&
          obj[treeLabel].map((item, ind) => {
            return this.renderInnerTree(item, parentIndex + "_" + index, ind);
          })}
      </TreeItem>
    );
  };

  render() {
    const { tableData, treeLabel, label,gridTemplate } = this.props;
    const heads = this.getHead();
    return (
      <Fragment>
        <Grid container>
          <Grid item md={1}></Grid>
          {heads.map((head, index) => {
            return (
              <Grid key={index} item md={gridTemplate[index]}>
                <strong>{head.toUpperCase()}</strong>
              </Grid>
            );
          })}
        </Grid>
        <TreeView
          defaultCollapseIcon={this.MinusSquare()}
          defaultExpandIcon={this.PlusSquare()}
        >
          {tableData.map((row, index) => {
            const node = (
              <Grid container key={label + "_" + index}>
                <Grid item md={1}>
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                  />
                </Grid>
                {heads.map((head, index) => {
                  return (
                    <Grid key={"head" + index} item md={gridTemplate[index]}>
                      {row[head]}
                    </Grid>
                  );
                })}
              </Grid>
            );
            const wrapper = React.createRef();
            return (
              <TreeItem
                ref={wrapper}
                key={index}
                nodeId={"list" + index}
                label={node}
              >
                {row[treeLabel].map((sub, ind) => {
                  return this.renderInnerTree(sub, index, ind);
                })}
              </TreeItem>
            );
          })}
        </TreeView>
      </Fragment>
    );
  }
}
